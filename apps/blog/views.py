from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
# Esto es para es para poner el texto asi hola-esto-es-un...
from slugify import slugify
from apps.category.models import Category

from .serializers import PostSerializer, PostListSerializer
from .models import ViewCount, Post

from .pagination import SmallSetPagination, MediumSetPagination, LargeSetPagination
from .permissions import IsPostAuthorOrReadOnly, AuthorPermission

from django.db.models.query_utils import Q

# Esto es para poder trabajar con imagenes
from rest_framework.parsers import MultiPartParser, FormParser


class BlogListView(APIView):

    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Post.post_objects.all().exists():

            posts = Post.post_objects.all()

            # Pagination:

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)

            # Many porque van a ser una lista de posts
            serializer = PostListSerializer(results, many=True)

            # return Response({'Post': serializer.data}, status=status.HTTP_200_OK)
            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'Error': 'Not posts found'}, status=status.HTTP_404_NOT_FOUND)


class ListPostsByCategoryView(APIView):

    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Post.post_objects.all().exists():

            # Esto es igual a urls = test | list/by_category?slug=test ...
            slug = request.query_params.get('slug')
            # Tomamos la categoria por su slug
            category = Category.objects.get(slug=slug)

            # Mostramos los mas nuevos con order_by()
            posts = Post.post_objects.order_by('-published').all()

            if not Category.objects.filter(parent=category).exists():
                posts = posts.filter(category=category)
            else:
                sub_categories = Category.objects.filter(parent=category)
                # Category:
                filtered_categories = [category]

                for cate in sub_categories:
                    filtered_categories.append(cate)
                filtered_categories = tuple(filtered_categories)
                posts = posts.filter(category__in=filtered_categories)

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostListSerializer(results, many=True)
            # return Response({'Test': 'Success'}, status=status.HTTP_200_OK)

            return paginator.get_paginated_response({'posts': serializer.data})

        else:
            return Response({'Error': 'Not posts found'}, status=status.HTTP_404_NOT_FOUND)


class PostDetailView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, slug, format=None):
        if Post.objects.filter(slug=slug).exists():
            post = Post.objects.get(slug=slug)
            # Aqui como solo toma un resultado no le decimos many=True
            serializer = PostSerializer(post)

            address = request.META.get('HTTP_X_FORWARDED_FOR')
            # Si es que obtenemos un address:
            if address:
                ip_address = address.split(',')[-1].strip()
            else:
                # Si no lo tomamos asi:
                ip_address = request.META.get('REMOTE_ADDR')

            if not ViewCount.objects.filter(post=post, ip_address=ip_address):
                view = ViewCount(post=post, ip_address=ip_address)
                view.save()
                post.views += 1
                post.save()
            return Response({'post': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'Error': 'Post does not exists'}, status=status.HTTP_404_NOT_FOUND)


class SearchBlogView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        search_term = request.query_params.get('s')
        # Filtros Q (nos permite filtrar por varios campos)
        # con __ accedemos a un campo especifico campoDelmodelo__name
        matches = Post.post_objects.filter(
            Q(title__icontains=search_term) |
            Q(description__icontains=search_term) |
            Q(content__icontains=search_term) |
            Q(category__name__icontains=search_term)
        )

        paginator = SmallSetPagination()
        results = paginator.paginate_queryset(matches, request)

        serializer = PostListSerializer(results, many=True)
        return paginator.get_paginated_response({'filtered_posts': serializer.data})


class AuthorBlogListView(APIView):
    # Tines que estar autenticado
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, format=None):
        user = self.request.user
        if Post.objects.filter(author=user).exists():
            # Posts de un usuario en especifico
            posts = Post.objects.filter(author=user)

            # Pagination:

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)

            # Many porque van a ser una lista de posts
            serializer = PostListSerializer(results, many=True)

            # return Response({'Post': serializer.data}, status=status.HTTP_200_OK)
            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'Error': 'Not posts found'}, status=status.HTTP_404_NOT_FOUND)


class EditBlogPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly, )
    parser_classes = [MultiPartParser, FormParser]

    def put(self, request, format=None):
        user = self.request.user
        data = self.request.data
        post = Post.objects.get(slug=data['slug'])
        if data['title']:
            if not data['title'] == 'undefined':
                post.title = data["title"]
                post.save()
        if data['new_slug']:
            if not data['new_slug'] == 'undefined':
                post.slug = slugify(data["new_slug"])
                post.save()
        if data['description']:
            if not data['description'] == 'undefined':
                post.description = data["description"]
                post.save()
        if data['content']:
            if not data['content'] == 'undefined' or data['content'] == False:
                post.content = data["content"]
                post.save()
        if data['time_red']:
            if not data['time_red'] == 'undefined':
                post.time_red = data["time_red"]
                post.save()
        if data['category']:
            if not data['category'] == 'undefined':
                category_id = int(data['category'])
                category = Category.objects.get(id=category_id)
                post.category = category
                post.save()
        if data['thumbnail']:
            if not data['thumbnail'] == 'undefined':
                post.thumbnail = data['thumbnail']
                post.save()
        return Response({'success': 'Post edited'})


class DraftBlogPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly, )

    def put(self, request, format=None):
        data = self.request.data
        post = Post.objects.get(slug=data['slug'])

        post.status = 'draft'
        post.save()
        return Response({'success': 'Post edited'})


class PublishBlogPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly, )

    def put(self, request, format=None):
        data = self.request.data
        post = Post.objects.get(slug=data['slug'])

        post.status = 'published'
        post.save()
        return Response({'success': 'Post edited'})


class DeleteBlogPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly, )

    def delete(self, request, slug, format=None):
        post = Post.objects.get(slug=slug)

        post.delete()

        return Response({'success': 'Post edited'})


class CreateBlogPostView(APIView):
    permission_classes = (AuthorPermission, )

    def post(self, request, format=None):
        user = self.request.user
        Post.objects.create(author=user)

        return Response({'success': 'Post edited'})

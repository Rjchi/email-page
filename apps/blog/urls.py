from django.urls import path
# from .views import BlogListView, ListPostsByCategoryView, PostDetailView
from .views import *

urlpatterns = [
    path('list', BlogListView.as_view(), name='BlogList'),
    path('by_category', ListPostsByCategoryView.as_view(), name='ListPostsByCategory'),
    path('detail/<slug>', PostDetailView.as_view(), name='PostDetail'),
    path('search', SearchBlogView.as_view(), name='SearchBlog'),

    path('author_list', AuthorBlogListView.as_view(), name='AuthorBlogList'),
    path('edit', EditBlogPostView.as_view(), name='EditBlogPost'),
    path('draft', DraftBlogPostView.as_view(), name='DraftBlogPost'),
    path('publish', PublishBlogPostView.as_view(), name='PublishBlogPost'),
    path('delete/<slug>', DeleteBlogPostView.as_view(), name='DeleteBlogPost'),

    path('create', CreateBlogPostView.as_view(), name='CreateBlogPost'),
]

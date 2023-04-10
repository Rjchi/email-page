from rest_framework.pagination import PageNumberPagination

class SmallSetPagination(PageNumberPagination):
    page_query_param = 'p' # this is = http://127.0.0.1:8000/api/blog/list?p=1 or 2 or 3 ...
    page_size = 6 # Content for page, 6 posts
    page_size_query_param = 'page_size'
    max_page_size = 6

class MediumSetPagination(PageNumberPagination):
    page_query_param = 'p'
    page_size = 9
    page_size_query_param = 'page_size'
    max_page_size = 9

class LargeSetPagination(PageNumberPagination):
    page_query_param = 'p'
    page_size = 18
    page_size_query_param = 'page_size'
    max_page_size = 18
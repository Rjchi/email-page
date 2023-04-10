from django.contrib import admin
from .models import Post, ViewCount


class BlogAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'category')

    list_display_links = ('title', )

    list_per_page = 25


class ViewCountAdmin(admin.ModelAdmin):
    list_display = ('post', 'ip_address')

    list_display_links = ('post', 'ip_address', )

    list_per_page = 25


admin.site.register(Post, BlogAdmin)
admin.site.register(ViewCount, ViewCountAdmin)

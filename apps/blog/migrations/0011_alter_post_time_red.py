# Generated by Django 3.2.16 on 2023-04-09 00:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0010_auto_20230408_1932'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='time_red',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]

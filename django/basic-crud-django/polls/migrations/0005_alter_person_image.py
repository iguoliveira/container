# Generated by Django 4.0.6 on 2022-08-04 14:24

from django.db import migrations
import stdimage.models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0004_alter_person_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='person',
            name='image',
            field=stdimage.models.StdImageField(force_min_size=False, upload_to='media/', variations={'medium': (300, 300), 'small': (100, 100)}),
        ),
    ]
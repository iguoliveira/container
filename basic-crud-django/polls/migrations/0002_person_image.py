# Generated by Django 4.0.6 on 2022-08-04 13:52

from django.db import migrations
import stdimage.models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='image',
            field=stdimage.models.StdImageField(default=1, force_min_size=False, upload_to='path/to/img', variations={'medium': {'height': 300, 'width': 300}, 'small': {'height': 100, 'width': 100}}),
            preserve_default=False,
        ),
    ]
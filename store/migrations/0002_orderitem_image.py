# Generated by Django 3.2.7 on 2021-10-26 11:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='orderitem',
            name='image',
            field=models.ImageField(null=True, upload_to=''),
        ),
    ]

# Generated by Django 2.2.3 on 2019-07-14 09:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stats', '0002_remove_logindates_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='logindates',
            name='note',
            field=models.CharField(default='text', max_length=100),
        ),
    ]

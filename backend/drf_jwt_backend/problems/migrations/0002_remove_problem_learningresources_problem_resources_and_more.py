# Generated by Django 4.0.3 on 2022-04-07 18:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('problems', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='problem',
            name='resources',
        ),
        migrations.AddField(
            model_name='problem',
            name='resources',
            field=models.TextField(default='www.math.com'),
        ),
        migrations.AlterField(
            model_name='problem',
            name='answer',
            field=models.DecimalField(decimal_places=2, max_digits=24),
        ),
    ]

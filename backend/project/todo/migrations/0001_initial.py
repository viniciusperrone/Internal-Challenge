# Generated by Django 4.0.6 on 2022-08-13 23:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ToDo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=255)),
                ('status', models.CharField(max_length=50)),
                ('fromDate', models.CharField(max_length=10)),
                ('deadlineDate', models.CharField(max_length=10)),
            ],
        ),
    ]

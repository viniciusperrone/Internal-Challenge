from django.db import models
from datetime import datetime

# Create your models here.


class ToDo(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=255)
    status = models.CharField(max_length=50)
    fromDate = models.CharField(max_length=10)
    deadlineDate = models.CharField(max_length=10)

    def __str__(self) -> str:
        return self.title

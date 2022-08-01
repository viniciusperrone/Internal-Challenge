from django.db import models
from datetime import datetime

# Create your models here.

class ToDo(models.Model):
  title = models.CharField(max_length=100)
  description = models.CharField(max_length=255)
  status = models.CharField(max_length=50)
  fromDate = models.DateField(default=datetime.now())
  deadlineDate = models.DateField()

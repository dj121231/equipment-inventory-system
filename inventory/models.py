from django.db import models

class Equipment(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return self.name

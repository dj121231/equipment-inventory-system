from django.shortcuts import render
from rest_framework import viewsets
from .models import Equipment
from .serializers import EquipmentSerializer

# Create your views here.

class EquipmentViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Equipment instances.
    Provides list, create, retrieve, update, and delete actions.
    """
    queryset = Equipment.objects.all()
    serializer_class = EquipmentSerializer

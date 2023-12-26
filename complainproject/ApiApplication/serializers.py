from rest_framework import serializers


class ComplainSerializer(serializers.Serializer):
    id = serializers.IntegerField(label = "Enter Complain Id")
    title = serializers.CharField(label = "Enter Complain Title")
    description = serializers.CharField(label= "Enter Complain Description")



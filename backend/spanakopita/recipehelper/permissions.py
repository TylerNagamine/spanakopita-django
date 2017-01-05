from rest_framework import permissions

class IsOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.owner == request.user
    
class IsAdmin(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        print(request.user)
        return True
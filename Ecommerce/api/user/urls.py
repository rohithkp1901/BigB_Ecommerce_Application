from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views  import UserViewSet,UserDetails
from .import views
router = DefaultRouter()
router.register(r'',UserViewSet)

urlpatterns = [
    path('login/',views.signin,name='signin'),
    path('logout/<int:id>',views.signout,name='signout'),
    path('<int:user_id>/', UserDetails.as_view(), name='user_details'),
    path('',include(router.urls)),
]


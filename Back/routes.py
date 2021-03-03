from controllers import LoginUserControllers, registroUserControllers, LoginUserControllers2,registroUserControllers2


user = {
    "login_user": "/api/v01/user/login", "login_user_controllers": LoginUserControllers.as_view("login_api"),
    "login2_user": "/api/v01/user/login2", "login2_user_controllers": LoginUserControllers2.as_view("login2_api"),
    "registro_user": "/api/v01/user/registro", "registro_user_controllers": registroUserControllers.as_view("registro_api"),
    "registro2_user": "/api/v01/user/registro2", "registro2_user_controllers": registroUserControllers2.as_view("registro2_api")
}


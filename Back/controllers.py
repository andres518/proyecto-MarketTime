
from flask.views import MethodView
from flask import jsonify, request
import time
class registroUserControllers2(MethodView):
    """
        Example Login
    """
    def post(self):
        #simulacion de espera en el back con 1.5 segundos
        time.sleep(3)
       

         
        return jsonify({"registro": True}), 200
    

    def get():
        pass
    
    
    def put():
        pass



class LoginUserControllers(MethodView):
    """
        Example Login
    """
    def post(self):
        #simulacion de espera en el back con 1.5 segundos
        time.sleep(3)
       

         
        return jsonify({"login ok": True}), 200
    

    def get():
        pass
    
    
    def put():
        pass


class LoginUserControllers2(MethodView):
    """
        Example Login
    """
    def post(self):
        #simulacion de espera en el back con 1.5 segundos
        time.sleep(3)
        content = request.get_json()
        email = content.get("Correo")
        password = content.get("Contraseña")
        name = content.get("Nombre")
        

        return jsonify({"login ok": True, "Contraseña": password, "Correo": email}), 200
    



class registroUserControllers(MethodView):
    """
        Example register
    """
    def post(self):
        #simulacion de espera en el back con 1.5 segundos
        time.sleep(3)
        content = request.get_json()
        Nombre = content.get("Nombre")
        Correo = content.get("Correo")
        Contraseña = content.get("Contraseña")
        
    

        return jsonify({"registro": True, "Nombre": Nombre, "Correo": Correo,"Contraseña": Contraseña}), 200
    
    def get():
        pass
    
    def put():
        pass
     

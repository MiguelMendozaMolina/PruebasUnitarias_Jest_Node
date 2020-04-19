# Pruebas Unitarias con Jest en Node
Jest es una herramienta que nos permite poder realizar pruebas unitarias al codigo creado, el concepto de prueba no es revisar todas las 
lineas de codigo sino revisar los puntos criticos de la aplicacion, como puede ser las solicitud a una API. 

Por ejemplo cuando se realiza una consulta a una API y esta devuelve el resultado esperado, esta tambien nos entrega un numero http de 
respuesta el cual es el numero 200, es por medio de estas pruebas que se busca determinar si la respuesta recibida corresponde a el numero
200, en caso de que la respuesta retorne un codigo 404, por ejemplo, la prueba marcara un error debido a que no se cumple la regla de 
retorno de un codigo 200. 

# Desafío - Mi Repertorio

## Integrantes:
 * Anna Stecca
 * Mauricio Ortega

#
 ## Uso
#

Para acceder a la aplicacion se debe de ejecutar en localhost con el puerto 3005

* http//localhost:3005/

NOTA: Se hace el supuesto que no hay que modificar el frontend y por ende para el correcto funcionamiento de la aplicacion se ha de devolver desde el server el HTML en la ruta GET "/"

## Rutas

* GET / : Devuelve el archivo index.html
* POST /canciones : Recibe los datos correspondientes a una canción y la agrega al repertorio.
* GET /canciones : Devuelve un JSON con las canciones registradas en el repertorio
* PUT /canciones/:id : Recibe los datos de una canción que se desea editar y la
actualiza manipulando el JSON local.
* DELETE /canciones/:id : Recibe por queryString el id de una canción y la elimina del
repertorio.



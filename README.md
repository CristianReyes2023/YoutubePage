# USO YOUTUBE PAGE

En el siguiente programa se hizo una simulación de la pagina de Youtube funcional basandose en la información del canal de CreativeCode. Se diseño una pagina principal donde se muestran los videos del canal y una pagina adicional donde se reproducen los videos que el cliente desee. 

#### Objetivo:

Hacer uso de la información que se obtiene cuando se llama un API. 

Acontinuación se hara un descripción del respectivo funcionamiento del codigo que maneja el programa:

##### Index.html y main.Js:

Usando estos dos archivos creamos la pagina de inicio del programa (Barra de navegación,barra laterial y presentación de los videos obtenidos usando el archivo jsonVideos.json del canal CreactiveCode)



#### Funciones pertenecientes a main.js:

/*------------------IMPORT FUNCTION SEARCH-----------------*/ ==>Se importo la función SearchAll para poder hacer busquedas desde la pagina principal.

/*------------------FUNCTION SWIP SIDEBAR-------------------*/ ==> Reducción de la barra lateral.



/*-------------------------KEY FROM API----------------------*/ ==> Se presenta la clave actualizada y con capacidad para hacer las busquedas. 

CLAVE: "9c292a8e22mshc7918ad00472565p1e1b26jsn796eac206a31"

##### NOTA: Las funicones anteriores se repiten en el archivo aux-page

Para este programa se dejo asociada las funciones al API:                                                                
/*--------FUNCTION TO GENERATE VIDEOS FROM THE SEARCH ENGINE--------*/ (getAll.js)

/*----FUNCTION TO REDIRECT AND PLAY VIDEO IN AUX-INDEX ---- */ (aux-page.js)



/*----------FUNCTION TO MAKE VIDEOS IN THE MAIN PAGE--------*/ ==>Se genera los videos con los datos del jsonVideos.json

#### Funciones pertenecientes a aux-page.js:

/*----FUNCTION TO REDIRECT AND PLAY VIDEO IN AUX-INDEX ---- */ ==> Esta función obtiene el Id de los videos (pequeños) de la pagina index-playvideo.html y los reproduce en la misma pagina.

/*----------FUNCTION TO MAKE VIDEOS IN AUX INDEX--------*/ ==> Se genera los videos presentes en el jsonVideos.json

#### Funciones pertenecientes a getAll.js:

/*--------FUNCTION TO GENERATE VIDEOS FROM THE SEARCH ENGINE--------*/ ==> Se precisa el codigo y el funcionamiento de la función para la busqueda y reproducción del video seleccionado en la pagina de index-playvideo.html
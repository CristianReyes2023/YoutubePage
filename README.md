# USO YOUTUBE PAGE

En el siguiente programa se hizo una simulación de la pagina de Youtube funcional basandose en la información del canal de CreativeCode. Se diseño una pagina principal donde se muestran los videos del canal y una pagina adicional donde se reproducen los videos que el cliente desee. 

#### Objetivo:

Hacer uso de la información que se obtiene cuando se llama un API. 

Acontinuación se hara un descripción del respectivo funcionamiento del codigo que maneja el programa:


##### Index.html y main.Js:

Usando estos dos archivos creamos la pagina de inicio del programa (Barra de navegación,barra laterial y presentación de los videos obtenidos usando el archivo jsonVideos.json del canal CreactiveCode)

##### Index-playvideo.html y aux-page.Js:

Usando estos dos archivos creamos la pagina secundaria del programa (Barra de navegación,barra laterial y presentación de los videos obtenidos usando el archivo jsonVideos.json del canal CreactiveCode)

## Funciones pertenecientes a main.js:

Se importo la función SearchAll para poder hacer busquedas desde la pagina principal.

```js
/*------------------IMPORT FUNCTION SEARCH-----------------*/

import { SearchAll } from "./getAll.js";
document.querySelector("#chartSearch").addEventListener("input",(e)=>{//se puede usar input o change
    SearchAll(e.target.value)
});

```

Reducción de la barra lateral.

```js
/*------------------FUNCTION SWIP SIDEBAR-------------------*/

let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".main-container");

menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('small-sidebar')
    container.classList.toggle('large-container')
})
```



Se presenta la clave actualizada y con capacidad para hacer las busquedas. 

CLAVE: "9c292a8e22mshc7918ad00472565p1e1b26jsn796eac206a31"

```js
/*-------------------------KEY FROM API----------------------*/

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9c292a8e22mshc7918ad00472565p1e1b26jsn796eac206a31',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};
```



Se genera las miniaturas de los videos presentes en el jsonVideos.json

```js
/*----------FUNCTION TO MAKE VIDEOS IN THE MAIN PAGE--------*/

fetch("json/jsonVideos.json", options)
    .then(res => res.json())
    .then(response => {
        let selecion = document.querySelector("#myVideos");
        selecion.insertAdjacentHTML("beforeend", /*html*/`
            ${response.contents.map((video) => /*html*/`
                <div class="list-video">
                    <div class="thumbnails">
                    <a href="index-playvideo.html?videoId=${video.video.videoId}"><img src="${video.video.thumbnails[video.video.thumbnails.length - 1].url}" alt="videos" class="img-miniatura"/></a>
                    </div>
                    <div class="video-info">
                        <a href="index-playvideo.html?videoId=${video.video.videoId}">${video.video.title}</a>
                        <p>${video.video.stats.views} Views &bull; ${video.video.publishedTimeText}</p>
                    </div>
                </div>
            `).join(" ")}
        `);
    })
    .catch(err => console.log(err));
```



## Funciones pertenecientes a aux-page.js:

Se importo la función SearchAll para poder hacer busquedas desde la pagina principal.

```js
/*------------------IMPORT FUNCTION SEARCH-----------------*/

import { SearchAll } from "./getAll.js";
document.querySelector("#chartSearch").addEventListener("input",(e)=>{//We can use input or change
    SearchAll(e.target.value);
});
```

Reducción de la barra lateral.

```js
/*------------------FUNCTION SWIP SIDEBAR-------------------*/

let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".main-container");

menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('small-sidebar')
    container.classList.toggle('large-container')
})
```

La siguiente función nos permite redirigir a reproducir cualquier video que se le de click. 

```js
/*----FUNCTION TO REDIRECT AND PLAY VIDEO IN AUX-INDEX ---- */

const randomNum = Math.floor(Math.random() * 100) + 1;
const url = window.location.href;
const videoId = url.split('?')[1]?.split('=')[1];
if (videoId) {
    const videoContainer = document.querySelector("#play-video-final");
    // Hacer una solicitud a la API de YouTube Data para obtener información del video
    fetch("https://youtube138.p.rapidapi.com/channel/videos/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US",options)
    // fetch("../json/jsonVideos.json",options)
        .then(res => res.json())
        .then(response => {
            const video = response.contents.find(video => video.video.videoId === videoId);
            if (video) {
                const videoTitle = video.video.title;
                const views = video.video.stats.views;
                const timeago = video.video.publishedTimeText
                videoContainer.insertAdjacentHTML("beforeend",/*html*/`
                <a><iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowFullscreen="true"></iframe></a>
                <p class="title-video">${videoTitle}</p>
                <div class="play-video-info">
                    <div class="info-chanel">
                        <img src="images/CreativeCode.jpg" alt="">
                        <div class="name-chanel">
                            <p>CreativeCode</p>
                            <p class="subscritores">495 suscriptores</p>
                        </div>
                    </div>
                    <div class="joined">
                        <p class="unirse">Unirse</p>
                        <p class="suscribirme">Suscribirme</p>
                    </div>
                    <div class="options-video">
                        <div class="like-dislike">
                            <a href=""><img src="images/like.png" alt=""><span id="randomNumero" style="padding-left: 											1vw;">${randomNum}</span></a>
                            <a href=""><img src="images/dislike.png" alt=""></a>
                        </div>
                        <a href="" class="share"><img src="images/share.png" alt="">Compartir</a>
                        <a href="" class="download"><img src="images/descargar.png" alt="">Descargar</a>
                        <a href=""><img src="images/puntos-suspensivos-del-circulo (1).png" alt=""
                                class="more-info"></a>
                    </div>
                </div>
                <div class="views-playpage">
                    <p>${views} Views &bull; ${timeago}</p>
                </div>`)
            } else {
                console.log("Video no encontrado en el JSON.");
            }
        })
        .catch(error => {
            console.error("Error al obtener información del JSON:", error);
        });
    }
```

Se genera las miniaturas de los videos presentes en el jsonVideos.json

```js
/*----------FUNCTION TO MAKE VIDEOS IN AUX INDEX--------*/

fetch("json/jsonVideos.json", options)
.then(res => res.json())
.then(response => {
    let selecion = document.querySelector("#myPageplay");
    selecion.insertAdjacentHTML("beforeend", /*html*/`
        ${response.contents.map((video) => /*html*/`
        <div class="side-video" >
            <a href="index-playvideo.html?videoId=${video.video.videoId}" class="small-img-sidebar"><img src="${video.video.thumbnails[video.video.thumbnails.length - 1].url}" alt=""></a>
            <div class="video-side-info">
                <a href="index-playvideo.html?videoId=${video.video.videoId}" class="name-other-video">${video.video.title}</a>
                <p class="name-chanel-sidebar">CreativeCode</p>
                <p class="info-views">${video.video.stats.views} views &bull; ${video.video.publishedTimeText}</p>
            </div>
        </div>
        `).join(" ")}
    `);
})
.catch(err => console.log(err));

```

## Funciones pertenecientes a getAll.js:

Se precisa el codigo y el funcionamiento de la función para la busqueda y reproducción del video seleccionado en la pagina de index-playvideo.html

```js
/*--------FUNCTION TO GENERATE VIDEOS FROM THE SEARCH ENGINE--------*/

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '03a286676amsh3c0b5f9eb902f7cp17f84ejsne2cec7d8a062',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const SearchAll = async (searchValue) => {
    options.method = 'GET';
    const peticion = await fetch("https://youtube138.p.rapidapi.com/channel/videos/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US",options);
    // const peticion = await fetch("../json/jsonVideos.json",options);
    const json = await peticion.json();
    let cont=0;
    let h=0;

    const filteredArray = json.contents.filter((value) => {
        if (searchValue && value.video.title.toLowerCase().includes(searchValue.toLowerCase())) {
            return true;
        }
        return false;
    });

    let array = filteredArray.map((value) => {
        cont++;
        if (cont <= 10) h = 30 * cont;
        return `<li class="item-searching"><a href="index-playvideo.html?videoId=${value.video.videoId}"><img src="images/busqueda.png">${value.video.title}</a></li>`;
    });
    console.log(filteredArray)
    console.log(array)
    document.querySelector("#active").style.height = `${h}px`;
    document.querySelector("#SearchAll").innerHTML = null;
    document.querySelector("#SearchAll").insertAdjacentHTML("beforeend",array.join(" "));
}

```




#### Para este programa se dejo asociada las funciones al API:                                                                

/*--------FUNCTION TO GENERATE VIDEOS FROM THE SEARCH ENGINE--------*/ (getAll.js)

/*----FUNCTION TO REDIRECT AND PLAY VIDEO IN AUX-INDEX ---- */ (aux-page.js)
// import { SearchAll } from "../getAll.js";

// document.querySelector("#chartSearch").addEventListener("change",(e)=>{//se puede usar input o change
//     SearchAll(e.target.value)
// });
// SearchAll()

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '67bc891487msh83d7f6087e5baa4p137206jsn95c6efd2fc62',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".main-container");

menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('small-sidebar')
    container.classList.toggle('large-container')
})


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






// Generar un número aleatorio entre 1 y 100 (puedes ajustar los valores)
const randomNum = Math.floor(Math.random() * 100) + 1;
const url = window.location.href;
//Window: El metodo Window de un objeto window apunta al propio objeto de la pestaña
//Location.href = La propiedad href del metodo location, es un buscador que devuelve una cadena que contiene la URL completa y permita obtener el href
// const url = window.location.href;: Esto obtiene la URL completa de la página actual.
const videoId = url.split('?')[1].split('=')[1];
console.log(videoId);
// const videoId = url.split('?')[1]?.split('=')[1];: Esta línea divide la URL en dos partes en función del signo de interrogación ("?"). La primera parte es la parte anterior a "?", que no es relevante en este caso. La segunda parte es la parte después de "?", que contiene los parámetros de consulta. Luego, esta segunda parte se divide nuevamente usando "=" como separador para obtener el valor del parámetro "videoId".
https://www.youtube.com/watch ? v = E6WrPNFH7Nw&t = 1s&ab_channel=CreativeCode

if (videoId) {
    const videoContainer = document.querySelector("#play-video-final");

    // Hacer una solicitud a la API de YouTube Data para obtener información del video
    fetch("json/jsonVideos.json")
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
                            <a href=""><img src="images/like.png" alt=""><span id="randomNumero" style="padding-left: 1vw;">${randomNum}</span></a>
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

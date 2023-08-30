/*------------------IMPORT FUNCTION SEARCH-----------------*/

import { SearchAll } from "./getAll.js";
document.querySelector("#chartSearch").addEventListener("input",(e)=>{//se puede usar input o change
    SearchAll(e.target.value)
});


/*------------------FUNCTION SWIP SIDEBAR-------------------*/

let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".main-container");

menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('small-sidebar')
    container.classList.toggle('large-container')
})


/*-------------------------KEY FROM API----------------------*/

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2c014407bcmshb6ebf5a0e507adfp14d616jsn135730e786a0',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};


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



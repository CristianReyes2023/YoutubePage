// import { SearchAll } from "../getAll.js";

// document.querySelector("#chartSearch").addEventListener("change",(e)=>{//se puede usar input o change
//     SearchAll(e.target.value)
// });
// SearchAll()



let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".main-container");

menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('small-sidebar')
    container.classList.toggle('large-container')
})



const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '67bc891487msh83d7f6087e5baa4p137206jsn95c6efd2fc62',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

fetch("json/jsonVideos.json", options)
    .then(res => res.json())
    .then(response => {
        let selecion = document.querySelector("#myVideos");
        selecion.insertAdjacentHTML("beforeend", /*html*/`
            ${response.contents.map((video) => /*html*/`
                <div class="list-video">
                    <div class="thumbnails">
                        <a href="index-playvideo.html"><img src="${video.video.thumbnails[video.video.thumbnails.length - 1].url}" alt="videos" class="img-miniatura"/></a>
                    </div>
                    <div class="video-info">
                        <a href="index-playvideo.html">${video.video.title}</a>
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
                    <a href="" class="small-img-sidebar"><img src="${video.video.thumbnails[video.video.thumbnails.length - 1].url}" alt=""></a>
                    <div class="video-side-info">
                        <a href="" class="name-other-video">${video.video.title}</a>
                        <p class="name-chanel-sidebar">CreativeCode</p>
                        <p class="info-views">${video.video.stats.views} views &bull; ${video.video.publishedTimeText}</p>
                    </div>
                </div>
                `).join(" ")}
            `);
        })
        .catch(err => console.log(err));





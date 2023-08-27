let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".main-container");

menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('small-sidebar')
    container.classList.toggle('large-container')
})




const path = "jsonVideos";

let construirVideos = async () => {
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let selecion = document.querySelector("#myVideos");
    selecion.insertAdjacentHTML("beforeend", /*html*/`
    <div class="list-video">
    ${res.contents.map((video) => /*html*/ `
        <div class="thumbnails">
            ${video.video.thumbnails.map((thumbnail) => /*html*/ `
                <img src="${thumbnail.url}" alt="videos" class="img-miniatura"/>
            `).join(" ")}
        </div>
        <div class="video-info">
            <a href="index-playvideo.html">${video.video.title}</a>
            <p>${video.video.stats.views} Views &bull; ${video.video.publishedTimeText}</p>
        </div>
    `).join(" ")}
    </div>
    `);
}

construirVideos();

// const path = "jsonVideos";

// let construirVideos = async () => {
//     let peticion = await fetch(`${path}.json`);
//     let res = await peticion.json();
//     let selecion = document.querySelector("#myVideos");
//     selecion.insertAdjacentHTML("beforeend", `
//     <div class="list-video">
//     ${res.contents.map((video) => /*html*/ `
//         <div class="thumbnails">
//             ${video.video.thumbnails.map((thumbnail) => /*html*/ `
//                 <img src="${thumbnail.url}" alt="videos" class="img-miniatura"/>
//             `).join(" ")}
//         </div>
//         <div class="video-info">
//             <a href="index-playvideo.html">${video.video.title}</a>
//             <p>${video.video.stats.views} Views &bull; ${video.video.publishedTimeText}</p>
//         </div>
//     `).join(" ")}
//     </div>
//     `);
// }

// construirVideos();










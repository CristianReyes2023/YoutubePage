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
    ${res.contents.map((video) => /*html*/ `
    <div class="list-video">
        <div class="thumbnails">
            <img src="${video.video.thumbnails[video.video.thumbnails.length - 1].url}" alt="videos" class="img-miniatura"/>
        </div>
        <div class="video-info">
            <a href="index-playvideo.html">${video.video.title}</a>
            <p>${video.video.stats.views} Views &bull; ${video.video.publishedTimeText}</p>
        </div>
    </div>
    `).join(" ")}`);
}

construirVideos();

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '67bc891487msh83d7f6087e5baa4p137206jsn95c6efd2fc62',
// 		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
// 	}
// };
// fetch("https://youtube138.p.rapidapi.com/channel/videos/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US",options)
//     .then(res => res.json())
//     .then(response => {
//     let selecion = document.querySelector("#myVideos");
//     selecion.insertAdjacentHTML("beforeend", /*html*/`
//     ${res.contents.map((video) => /*html*/ `
//     <div class="list-video">
//         <div class="thumbnails">
//             <img src="${video.video.thumbnails[video.video.thumbnails.length - 1].url}" alt="videos" class="img-miniatura"/>
//         </div>
//         <div class="video-info">
//             <a href="index-playvideo.html">${video.video.title}</a>
//             <p>${video.video.stats.views} Views &bull; ${video.video.publishedTimeText}</p>
//         </div>
//     </div>
//     `).join(" ")}`);
//     console.log(response.contents[0].type);
//     })
//     .catch(err => console.log(err))






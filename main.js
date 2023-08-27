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
    selecion.insertAdjacentHTML("beforeend",/*html*/ `
    <div class="list-video">
    ${res.contents.videos.thumbnails.map((value) => /*html*/ `
        <a href="index-playvideo.html"><img src="${value.url}" alt="videos" class="img-miniatura"/></a>
        `).join(" ")}
        <div class="video-browser ">
            <img src="images/CreativeCode.jpg" alt="usuario"/>
            ${res.contents.videos.map((value) => /*html*/ `
                <div class="video-info">
                    <a href="index-playvideo.html">${videos.title}</a>
                    <p></p>
                    <p>${value.stats.views} Views &bull; ${value.publishedTimeText}</p>
                </div>`).join(" ")}
        </div>
    </div>`)
}
construirVideos();


// const url = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '67bc891487msh83d7f6087e5baa4p137206jsn95c6efd2fc62',
// 		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
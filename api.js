const path = "jsonVideos";

let construirVideos = async () => {
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let selecion = document.querySelector("#myVideos");
    selecion.insertAdjacentHTML("beforeend",/*html*/ `
    <div class="list-video">
    ${res.contents.videos.thumbnails.map((value) => /*html*/ `
        <a href="index-playvideo.html"><img src="${value.url}" alt="videos" class="img-miniatura"/></a>
        `).join("")}
        <div class="video-browser ">
            <img src="images/CreativeCode.jpg" alt="usuario"/>
            ${res.contents.videos.map((value) => /*html*/ `
                <div class="video-info">
                    <a href="index-playvideo.html">${value.title}</a>
                    <p></p>
                    <p>${value.stats.views} Views &bull; ${value.publishedTimeText}</p>
                </div>`).join("")}
        </div>
    </div>`)
}
construirVideos();
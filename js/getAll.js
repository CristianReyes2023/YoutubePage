
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '67bc891487msh83d7f6087e5baa4p137206jsn95c6efd2fc62',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const SearchAll = async () => {
    options.method = 'GET';
    const peticion = await fetch("../json/jsonVideos.json",options);
    const json = await peticion.json();
    let cont=0;
    let h=0;
    let array = json.contents.map((value,id)=>{
        if(value.playlist) return undefined;
        cont++;
        if(cont<=10) h = 30*cont;
        return `<li class="item-searching"><a href="https://www.youtube.com/watch?v${value.video.videoId}">${value.video.title}</a></li>`
    })
    document.querySelector("#active").style.height = `${h}px`;
    document.querySelector("#SearchAll").innerHTML = null;
    document.querySelector("#SearchAll").insertAdjacentHTML("beforeend",array.join(" "));
}


//USAMOS EL CODIGO QUE ESTÁ EN RAPIAPI DE SEARCHING

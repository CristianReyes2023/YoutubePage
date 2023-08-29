
export const SearchAll = async (p1)=> {
    const peticion = await fetch("js/ChannelSearch.json");
    // const json = await peticion.json ();
    let cont=0;
    let array = peticion.contents.map((value,id)=>{
        if(value.playlist) return undefined;
        cont++;
        if(cont<=10) h+=30*cont;
        return `<div class="result-searching"><a href="https://www.youtube.com/watch ?v${value.video.videoId}"><p>${value.video.title}</p></a></div>`
    })
    document.querySelector("#active").setAttribute("style",``)
    document.querySelector("#active").innerHTML = null;
    document.querySelector("#SearchAll").insertAdjacentElement("beforeend",array.join(" "));
}


//USAMOS EL CODIGO QUE ESTÁ EN RAPIAPI DE SEARCHING

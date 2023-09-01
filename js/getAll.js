
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




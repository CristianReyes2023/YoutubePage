const url = "https://www.youtube.com/watch?v=E6WrPNFH7Nw&t=1s&ab_channel=CreativeCode"

const videoId = url.split('?')[1].split('=')[1];
console.log(videoId);
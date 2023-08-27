let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".main-container");

menuIcon.addEventListener('click',()=>{
    sidebar.classList.toggle('small-sidebar')
    container.classList.toggle('large-container')
})

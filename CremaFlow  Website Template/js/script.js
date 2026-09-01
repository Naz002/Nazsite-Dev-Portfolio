const toggleBtn = document.querySelector(".toggle-btn");
const navMenu = document.querySelector(".nav-menu");

toggleBtn.addEventListener("click", () =>{
    navMenu.classList.toggle("active");

    if(navMenu.classList.contains("active")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark")
    }else{
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars")
    }
})
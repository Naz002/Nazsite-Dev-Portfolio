const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if(menuToggle && menu){



function closeMenu(){
    menu.classList.remove("active");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  
}

menuToggle.setAttribute("aria-expanded", "false");
menuToggle.setAttribute("aria-label", "Open navigation");

menuToggle.addEventListener("click", function(){
   const isOpen = menu.classList.toggle("active");

   menuToggle.classList.toggle("active", isOpen);

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

document.addEventListener("click", function(event){
       if(
        !menu.contains(event.target) &&
        !menuToggle.contains(event.target)
     )
        {
            closeMenu()
        };
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 1024){
        closeMenu()
    };
    
});

}

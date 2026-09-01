const slider = document.querySelector(".destination-grid");
const nextButton = document.querySelector(".button-slider");
const previousButton = document.querySelector(".previous-button");
const cards = document.querySelectorAll(".destination-grid .card");
let currentIndex = 0;
const gap = 20;


 function getVisibleCards(){
    if(window.innerWidth <= 480){
        return 1;
    }

      if(window.innerWidth <= 1024){
        return 2;
    }

    return 3;
 }


function getCardWidth(){

    const cardWidth = cards[0].getBoundingClientRect().width;

    const moveDistance = cardWidth + gap

    return moveDistance;
   
}

function getMaxIndex(){
    const visibleCards =getVisibleCards();

    return Math.max(cards.length - visibleCards, 0)
}
function updateButton(){
    const maxIndex = getMaxIndex();

    if(currentIndex === 0){
        previousButton.style.display = "none"
    }else{
        previousButton.style.display = "inline-block"
    }

    if(currentIndex === maxIndex){
        nextButton.style.display = "none"
    }else{
        nextButton.style.display = "inline-block"
    }
}

nextButton.addEventListener("click", () => {

   const maxIndex = getMaxIndex()

   if(currentIndex < maxIndex){
    currentIndex++;

    slider.style.transform = `translateX(-${currentIndex * getCardWidth()}px)`;

    updateButton();
   }



});

previousButton.addEventListener("click", () => {

    const visibleCards = getVisibleCards();
    

    if (currentIndex > 0){
        currentIndex--;
     
        slider.style.transform = `translateX(-${currentIndex *getCardWidth()}px)`;

        updateButton();

    }
});

updateButton();


window.addEventListener("resize", () =>{
  
    currentIndex = 0;

    slider.style.transform = "translateX(0)";

    updateButton()
})




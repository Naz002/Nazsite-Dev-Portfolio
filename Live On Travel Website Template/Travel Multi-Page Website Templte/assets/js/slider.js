document.addEventListener("DOMContentLoaded", () => {

    const slider = document.querySelector(".destination-grid");
    const nextButton = document.querySelector(".button-slider");
    const previousButton = document.querySelector(".previous-button");
    const cards = document.querySelectorAll(".destination-grid .card");

    // stop if this page does not havethe complete slider//
    
    if(!slider || !nextButton || !previousButton || cards.length === 0){
        return;
    }

    let currentIndex = 0;
    const gap = 20;

    function getVisibleCard(){
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
        return cardWidth +gap
    }

    function getMaxIndex(){
        const visibleCards = getVisibleCard();
        return Math.max(cards.length - visibleCards, 0);
    }

    function upDateButton(){
        const maxIndex = getMaxIndex();

        previousButton.style.display = 
        currentIndex === 0 ? "none"  : "inline-block";

        nextButton.style.display =
        currentIndex === maxIndex ? "none" : "inline-block";
    }

    nextButton.addEventListener("click", () => {

        const maxIndex = getMaxIndex();
        if(currentIndex < maxIndex){
            currentIndex++;

            slider.style.transform = `translateX(-${currentIndex * getCardWidth()}px)`;

            upDateButton();
        }
         });

        previousButton.addEventListener("click", () => {
            if (currentIndex > 0){
                currentIndex--;

                slider.style.transform =
                `translateX(-${currentIndex * getCardWidth()}px)`;

                upDateButton()
            }
        });

        upDateButton();

        window.addEventListener("resize", () =>{
            currentIndex = 0;

            slider.style.transform = "translateX(0)";

            upDateButton();
 

        });

});
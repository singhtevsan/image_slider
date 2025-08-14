const slides = document.querySelectorAll('.slide');
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    counter--;
    if(counter==-1){
        counter = 5;
    }
    slideImage();
}

const goNext = () => {
    counter++;
    if(counter == 6){
        counter = 0;
    }
    slideImage();
}

const slideImage = () => {
    slides.forEach( (slide) => {
        slide.style.transform = `translateX(-${counter * 100 }%)`;
    })
}

setInterval(goNext,5000);
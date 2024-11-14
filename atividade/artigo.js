const carouselContainer = document.querySelector('.carousel-container');
const carouselControlsContainer = document.querySelector('.carousel-controls');
const carouselControls = ['previous', 'next'];
const carouselItens = document.querySelectorAll('.carousel-item');

class Carousel {
    
    constructor(container, items, controls){
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateCarousel(){
        this.carouselArray.forEach(el =>{
            el.classList.remove('carousel-item-1');
            el.classList.remove('carousel-item-2');
            el.classList.remove('carousel-item-3');
            el.classList.remove('carousel-item-4');
            el.classList.remove('carousel-item-5');
        });
        this.carouselArray.slice(0, 5).forEach((el, i) =>{
            el.classList.add(`carousel-item-${i + 1}`);
        });
    }


    setCurrentState(direction){
        if (direction.className.includes('carousel-controls-previous')){
            this.carouselArray.unshift(this.carouselArray.pop());
        }else{
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateCarousel();
    }

    setControls(){
        this.carouselControls.forEach(control =>{
            const button = document.createElement('button');
            button.className = `carousel-controls-${control}`;
            button.innerText = control;
            carouselControlsContainer.appendChild(button);
        });
    }

        useControls(){
            const triggers = [...carouselControlsContainer.childNodes];
            triggers.forEach(control =>{
                control.addEventListener('click', e =>{
                    e.preventDefault();
                    this.setCurrentState(control)
                });
            });
        }     
}

const exampleCarousel = new Carousel(carouselContainer, carouselItens, carouselControls);

exampleCarousel.setControls();
exampleCarousel.useControls();
exampleCarousel.updateCarousel();

function toggleButtonBack(){
    window.location.href = "../resp.html";
}

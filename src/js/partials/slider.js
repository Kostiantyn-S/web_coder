class Slider {
    constructor () {
        this.index = 1;
        this.slides = document.querySelector('.slider__slides');
        this.controls = document.querySelector('.slider__controls');
        this.timerId = 0;
    };

    removeActiveClassFromButtons () {
        for (let k = 0; k < this.controls.childNodes.length; k++) {
            this.controls.childNodes[k].classList.remove('slider__button_active');
        }
    };

    scrollRight () {
        this.removeActiveClassFromButtons();
        this.slides.classList.add('slider__slides_transition');
        this.slides.style.left = `${-this.index * this.slides.clientWidth}px`;

        if (this.index < 4) {
            this.controls.childNodes[this.index].classList.add('slider__button_active');
        } else {
            this.controls.childNodes[0].classList.add('slider__button_active');
        }

        this.index++;
    };

    turnScrollRight () {
        this.timerId = setInterval(this.scrollRight.bind(this), 6000);
    };

    listenTransitionFunction () {
        if (this.index > 4) {
            this.slides.classList.remove('slider__slides_transition');
            this.index = 1;
            this.slides.style.left = `0`;
        }
    };

    listenTransition () {
        this.slides.addEventListener('transitionend', this.listenTransitionFunction.bind(this));
    };

    listenControlsFunction (event) {
        this.removeActiveClassFromButtons();

        event.currentTarget.classList.add('slider__button_active');

        for (let s = 0; s < this.controls.childNodes.length; s++) {
            if (event.currentTarget === this.controls.childNodes[s]) {
                this.index = s;
                this.slides.style.left = `${-this.index * this.slides.clientWidth}px`;
            }
        }
    };

    listenControls () {
        for (let i = 0; i < this.controls.childNodes.length; i++) {
            this.controls.childNodes[i].addEventListener('click', this.listenControlsFunction.bind(this));
        }
    };

    stopSliderFunction () {
        clearInterval(this.timerId);
    };

    stopSlider () {
        this.slides.addEventListener('mouseover', this.stopSliderFunction.bind(this));
    };

    startSliderFunction () {
        this.turnScrollRight();
    };

    startSlider () {
        this.slides.addEventListener('mouseout', this.startSliderFunction.bind(this));
    };

    turnOn () {
        this.turnScrollRight();
        this.listenTransition();
        this.listenControls();
        this.stopSlider();
        this.startSlider();
    };
}

(function turnOnSlider () {
    let slider = new Slider;
    slider.turnOn();
})();
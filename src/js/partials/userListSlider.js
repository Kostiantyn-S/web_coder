class UserSlider {
    constructor (usersSelector, rightButtonSelector, leftButtonSelector) {
        this.users = document.querySelector(usersSelector);
        this.rightButton = document.querySelector(rightButtonSelector);
        this.leftButton = document.querySelector(leftButtonSelector);
    };

    scrollRight () {
        this.users.style.transition = 'ease-out 1s';
        this.users.style.right = '160px';
    };

    scrollLeft () {
        this.users.style.transition = 'ease-out 1s';
        this.users.style.right = '0px';
    };

    refresh () {
        this.users.style.transition = '';
        this.users.style.right = '80px';
    };

    addListeners () {
        this.rightButton.addEventListener('click', this.scrollRight.bind(this));
        this.leftButton.addEventListener('click', this.scrollLeft.bind(this));
        this.users.addEventListener('transitionend', this.refresh.bind(this));
    };
}

(function () {
    let userSlider = new UserSlider ('.user-list__slider-users', '.user-list__slider-right', '.user-list__slider-left');
    userSlider.addListeners();
})();
class formValidation {
    constructor (selectors) {
        this.nameInput = document.querySelector(selectors.nameInput);
        this.nameValidImg = document.querySelector(selectors.nameImgValid);
        this.nameInvalidImg = document.querySelector(selectors.nameImgInvalid);
        this.nameInvalidPopup = document.querySelector(selectors.namePopupInvalid);
        this.ageDayInput = document.querySelector(selectors.ageInputDay);
        this.ageMonthInput = document.querySelector(selectors.ageInputMonth);
        this.ageYearInput = document.querySelector(selectors.ageInputYear);
        this.ageValidImg = document.querySelector(selectors.ageImgValid);
        this.ageInvalidImg = document.querySelector(selectors.ageImgInvalid);
        this.ageInvalidPopup = document.querySelector(selectors.agePopupInvalid);
        this.button = document.querySelector(selectors.button);
    };

    nameValidation () {
        let reg = /^[a-zа-яё]+(?: [a-zа-яё]+)?$/i;

        if (reg.test(this.nameInput.value) === true) {
            this.nameInvalidImg.classList.remove('show');
            this.nameInvalidPopup.classList.remove('show');
            this.nameValidImg.classList.add('show');
        } else {
            this.nameValidImg.classList.remove('show');
            this.nameInvalidImg.classList.add('show');
            this.nameInvalidPopup.classList.add('show');
        }
    };

    ageValidation () {
        if (this.ageDayInput.value === 'Day' || this.ageMonthInput.value === 'Month' || this.ageYearInput.value === 'Year') {
            this.ageInvalidImg.classList.add('show');
            this.ageInvalidPopup.classList.add('show');
            this.ageValidImg.classList.remove('show');
        } else {
            this.ageInvalidImg.classList.remove('show');
            this.ageInvalidPopup.classList.remove('show');
            this.ageValidImg.classList.add('show');
        }
    };

    validatingFunction () {
        this.nameValidation.call(this);
        this.ageValidation.call(this);
    }

    validating () {
        this.button.addEventListener('click', this.validatingFunction.bind(this));
    };
}

(function () {
    let name = new formValidation({
        nameInput: '.form__forms-name-input',
        nameImgValid: '#name-valid',
        nameImgInvalid: '#name-invalid',
        namePopupInvalid: '#name-invalid-popup',
        ageInputDay: '#day-select-title',
        ageInputMonth: '#month-select-title',
        ageInputYear: '#year-select-title',
        ageImgValid: '#age-valid',
        ageImgInvalid: '#age-invalid',
        agePopupInvalid: '#age-invalid-popup',
        button: '.form__button-input'
    });

    name.validating();
})();
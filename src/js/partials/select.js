class Select {
    constructor (selectSelector, titleSelector, listSelector) {
        this.element = document.querySelector(selectSelector);
        this.title = document.querySelector(titleSelector);
        this.list = document.querySelector(listSelector);
    };

    onclickFunction (event) {
        if (event.target === this.title) {
            this.list.classList.toggle('open');
        } else if (event.target.tagName === 'LI') {
            this.title.value = event.target.innerHTML;
            this.list.classList.remove('open');
        }
    };

    onclick () {
        this.element.addEventListener ('click', this.onclickFunction.bind(this));
    };
}

(function turnOnSelect () {
    let daySelect = new Select('#day-select', '#day-select-title', '#day-select-list');
    daySelect.onclick();

    let monthSelect = new Select ('#month-select', '#month-select-title', '#month-select-list');
    monthSelect.onclick();

    let yearSelect = new Select ('#year-select', '#year-select-title', '#year-select-list');
    yearSelect.onclick();

    let citySelect = new Select ('#city-select', '#city-select-title', '#city-select-list');
    citySelect.onclick();
})();
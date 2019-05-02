(function usersList () {
    document.querySelector('.user-list__progress').addEventListener('click', function (event) {
        if (event.target === document.querySelector('#users-mask')) {
            document.querySelector('.user-list__progress-active').classList.remove('progress-show');
        }

        if (event.target === document.querySelector('#active-mask')) {
            document.querySelector('.user-list__progress-active').classList.add('progress-show');
        }
    });
})();

class ProgressBar {
    constructor (selectors) {
       this.linePBar = document.querySelector(selectors.linePB);
       this.input = document.querySelector(selectors.input);
       this.lineSpan = document.querySelector(selectors.lineSpan);
       this.stepList = document.querySelector(selectors.stepList);
       this.starList = document.querySelector(selectors.starList);
    };

    lineBar () {
        this.linePBar.value = this.input.value;
        this.lineSpan.innerHTML = `${this.input.value}%`;
    };

    stepBar () {
        if (this.input.value >= 20) {
            this.stepList.childNodes[0].childNodes[0].classList.add('user-list__progress-body-line-breadcrumbs_choose');
            this.starList.childNodes[0].classList.add('user-list__progress-body-round-starbar-star_choose');
        } else {
            this.stepList.childNodes[0].childNodes[0].classList.remove('user-list__progress-body-line-breadcrumbs_choose');
            this.starList.childNodes[0].classList.remove('user-list__progress-body-round-starbar-star_choose');
        }

        if (this.input.value >= 40) {
            this.stepList.childNodes[1].childNodes[0].classList.add('user-list__progress-body-line-breadcrumbs_choose');
            this.starList.childNodes[1].classList.add('user-list__progress-body-round-starbar-star_choose');
        } else {
            this.stepList.childNodes[1].childNodes[0].classList.remove('user-list__progress-body-line-breadcrumbs_choose');
            this.starList.childNodes[1].classList.remove('user-list__progress-body-round-starbar-star_choose');
        }

        if (this.input.value >= 60) {
            this.stepList.childNodes[2].childNodes[0].classList.add('user-list__progress-body-line-breadcrumbs_choose');
            this.starList.childNodes[2].classList.add('user-list__progress-body-round-starbar-star_choose');
        } else {
            this.stepList.childNodes[2].childNodes[0].classList.remove('user-list__progress-body-line-breadcrumbs_choose');
            this.starList.childNodes[2].classList.remove('user-list__progress-body-round-starbar-star_choose');
        }

        if (this.input.value >= 80) {
            this.stepList.childNodes[3].childNodes[0].classList.add('user-list__progress-body-line-breadcrumbs_choose');
            this.starList.childNodes[3].classList.add('user-list__progress-body-round-starbar-star_choose');
        } else {
            this.stepList.childNodes[3].childNodes[0].classList.remove('user-list__progress-body-line-breadcrumbs_choose');
            this.starList.childNodes[3].classList.remove('user-list__progress-body-round-starbar-star_choose');
        }

        if (this.input.value >= 100) {
            this.stepList.childNodes[4].childNodes[0].classList.add('user-list__progress-body-line-breadcrumbs_choose');
            this.starList.childNodes[4].classList.add('user-list__progress-body-round-starbar-star_choose');
        } else {
            this.stepList.childNodes[4].childNodes[0].classList.remove('user-list__progress-body-line-breadcrumbs_choose');
            this.starList.childNodes[4].classList.remove('user-list__progress-body-round-starbar-star_choose');
        }
    };

    roundBar (percent, element) {
        let offset;
        if (percent < 50){
            offset = (360 / 100) * percent;
            element.parentNode.querySelector("#round-progressbar-section3").style.webkitTransform = "rotate(" + offset + "deg)";
            element.parentNode.querySelector("#round-progressbar-section3 .user-list__progress-body-round-progressbar-item").style.webkitTransform = "rotate(" + (180 - offset) + "deg)";
            element.parentNode.querySelector("#round-progressbar-section3").style.msTransform = "rotate(" + offset + "deg)";
            element.parentNode.querySelector("#round-progressbar-section3 .user-list__progress-body-round-progressbar-item").style.msTransform = "rotate(" + (180 - offset) + "deg)";
            element.parentNode.querySelector("#round-progressbar-section3").style.MozTransform = "rotate(" + offset + "deg)";
            element.parentNode.querySelector("#round-progressbar-section3 .user-list__progress-body-round-progressbar-item").style.MozTransform = "rotate(" + (180 - offset) + "deg)";
            element.parentNode.querySelector("#round-progressbar-section3 .user-list__progress-body-round-progressbar-item").style.backgroundColor = "#e7e8e8";
        } else {
            offset = ((360 / 100) * percent) - 180;
            element.parentNode.querySelector("#round-progressbar-section3").style.webkitTransform = "rotate(180deg)";
            element.parentNode.querySelector("#round-progressbar-section3 .user-list__progress-body-round-progressbar-item").style.webkitTransform = "rotate(" +  offset + "deg)";
            element.parentNode.querySelector("#round-progressbar-section3").style.msTransform = "rotate(180deg)";
            element.parentNode.querySelector("#round-progressbar-section3 .user-list__progress-body-round-progressbar-item").style.msTransform = "rotate(" +  offset + "deg)";
            element.parentNode.querySelector("#round-progressbar-section3").style.MozTransform = "rotate(180deg)";
            element.parentNode.querySelector("#round-progressbar-section3 .user-list__progress-body-round-progressbar-item").style.MozTransform = "rotate(" +  offset + "deg)";
            element.parentNode.querySelector("#round-progressbar-section3 .user-list__progress-body-round-progressbar-item").style.backgroundColor = "#ffa352";
        }

        element.parentNode.querySelector(".user-list__progress-body-round-progressbar-span").innerHTML = percent + "%";
    }

    addListener () {
        this.input.addEventListener('input', function () {
            this.lineBar();
            this.stepBar();
            this.roundBar(this.input.value, this.input.parentNode);
        }.bind(this));
    };
}

(function () {
    let bar = new ProgressBar({
        linePB: '.user-list__progress-body-line-bar',
        input: '.user-list__progress-body-line-input',
        lineSpan: '.user-list__progress-body-line-span',
        stepList: '.user-list__progress-body-line-breadcrumbs-list',
        starList: '.user-list__progress-body-round-starbar'
    });
    bar.roundBar(bar.input.value, bar.input.parentNode);
    bar.addListener();
})();
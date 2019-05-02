(function () {
    document.querySelector('.how-to-succeed__paragraph_more').addEventListener('click', function () {
        document.querySelector('.how-to-succeed__paragraph_more-arrow').classList.toggle('how-to-succeed__paragraph_more-arrow-rotate');
        document.querySelector('.how-to-succeed__subparagraph').classList.toggle('how-to-succeed__subparagraph_show');
    })
})();
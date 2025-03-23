const goOtherEls = document.querySelectorAll('.go-other');

goOtherEls.forEach(el => {
    el.addEventListener('click', function() {
        window.location.href = "/roba/other"
    });
});


const goHomeEls = document.querySelectorAll('.go-home');
console.log(goHomeEls);

goHomeEls.forEach(el => {
    el.addEventListener('click', function() {
        window.location.href = "/roba/"
    });
});
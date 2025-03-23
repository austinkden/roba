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


document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
    // Toggle the active class on the menu
    document.querySelector('nav section.right').classList.toggle('active');
    
    // Toggle the active class on the button itself for proper animation
    this.classList.toggle('active');
});

// Close mobile menu when clicking a navigation item
const navItems = document.querySelectorAll('nav section.right div.option, nav section.right button.sign-in');
navItems.forEach(item => {
    item.addEventListener('click', function() {
        if (window.innerWidth <= 600) {
            document.querySelector('nav section.right').classList.remove('active');
            document.querySelector('.mobile-menu-toggle').classList.remove('active');
        }
    });
}); 
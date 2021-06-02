window.onload = function() {
    document.body.querySelector('.hamburger').addEventListener("click", function() {
        let sidebar = qs('.hamburger');
        sidebar.classList.add('open');
        
        let small = document.body.querySelectorAll('.sml');
        console.log(small);
        for (let i = 0; i<small.length; i++) {
            small[i].classList.remove('sml');
        }
    });
}

function qs(name) {
    return document.body.querySelector(name);
}
// Open the navbar links menu on mobile
function navbarToggle() {
    let navbartoggle = document.querySelector('.navbar-toggle');

    if (navbartoggle.style.display === "none") {
        navbartoggle.style.display = "block";
    } else {
        navbartoggle.style.display = "none";
    }
}
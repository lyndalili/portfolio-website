const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

}


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

$(document).ready(function() {
    $('abtnDownload').click(function(e) {
        e.preventDefault();
        window.location.href - "LYNDA-HADDAD-Alternance-Développeuse-Web.pdf";
    });
});


function validateForm() {
    var name = document.forms["myForm"]["name"];
    var email = document.forms["myForm"]["email"];
    var message = document.forms["myForm"]["message"];

    if (name.value == "") {
        document.getElementById('errorname').innerHTML = "Veuillez entrez un nom valide";
        name.focus();
        return false;
    } else {
        document.getElementById('errorname').innerHTML = "";
    }

    if (email.value == "") {
        document.getElementById('erroremail').innerHTML = "Veuillez entrez une adresse mail valide";
        email.focus();
        return false;
    } else {
        document.getElementById('erroremail').innerHTML = "";
    }

    if (email.value.indexOf("@", 0) < 0) {
        document.getElementById('erroremail').innerHTML = "Veuillez entrez une adresse mail valide";
        email.focus();
        return false;
    }

    if (email.value.indexOf(".", 0) < 0) {
        document.getElementById('erroremail').innerHTML = "Veuillez entrez une adresse mail valide";
        email.focus();
        return false;
    }

    if (message.value == "") {
        document.getElementById('errormsg').innerHTML = "Veuillez entrez un message valide";
        message.focus();
        return false;
    } else {
        document.getElementById('errormsg').innerHTML = "";
    }

    return true;
}
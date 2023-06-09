// ----------------------------------- initialization -----------------------------------
let backgroundWelcomePagePath = 'src/images/screens/scary-welcome-cover.png';
let backgroundOtherPagesPath = 'src/images/screens/second_background.png';

$(document).ready(function () {
    switchPage('welcome-page', backgroundWelcomePagePath);
});

// ----------------------------------- switchPages -----------------------------------

function onlineUserCheck(pageName) {
    let user = $("#onlineUserText").text()
    if(user.length > 4) {
        // do nothing, user already logged in
    }
    else {
        switchPage(pageName, backgroundOtherPagesPath);
    }
}

function switchPage(pageName, backgroundImagePath) {
    let pageToShow = document.getElementById(pageName);
    pageToShow.classList.remove("hide");

    if (backgroundImagePath != null) {
        setBackgroundImage(backgroundImagePath);
    }
    if (pageName === "game-page") {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "black";
    }

    let pages = document.getElementsByClassName("page");
    for (let i = 0; i < pages.length; i++) {
        if (pages[i].id !== pageName) { // remove quotes around pageName variable
            pages[i].classList.add("hide");
        }
    }
}


// ----------------------------------- change background image -----------------------------------
function setBackgroundImage(src) {
    let image = new Image();
    image.addEventListener('load', () => {
        let body = document.getElementsByTagName("body")[0];
        body.style.backgroundImage = `url(${src})`;
        body.style.backgroundSize = "cover";
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundPosition = "center";
    });
    image.src = src;
}

// ----------------------------------- about popup -----------------------------------
function aboutPopup_show() {
    let aboutPopup = document.getElementById("about-popup");
    aboutPopup.style.display = "block";

    // add event listeners to close the popup
    document.addEventListener("keydown", aboutPopup_close_onEscape);
    aboutPopup.addEventListener("click", aboutPopup_close_onClickOutside);
}

function aboutPopup_close() {
    let aboutPopup = document.getElementById("about-popup");
    aboutPopup.style.display = "none";

    // remove event listeners to close the popup
    document.removeEventListener("keydown", aboutPopup_close_onEscape);
    aboutPopup.removeEventListener("click", aboutPopup_close_onClickOutside);
}

function aboutPopup_close_onEscape(event) {
    if (event.key === "Escape") {
        aboutPopup_close();
    }
}

function aboutPopup_close_onClickOutside(event) {
    if (event.target === document.getElementById("about-popup")) {
        aboutPopup_close();
    }
}
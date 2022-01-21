// Turning navigation into button
let navContainer = document.querySelector('.nav-wrapper');
let navContainer375 = '<img src="images/header/nav.png" alt="navigation button">';
let navContainerOther = navContainer.innerHTML;

let lessonsContainer = document.querySelector('.lessons-list__image-wrapper');
let lessonsContainer375 = '<img src="images/lessons/adaptive/img.png" alt="boy constructing mechanisms">';
let lessonsContainerOther = lessonsContainer.innerHTML;

window.addEventListener('resize', changePlayerImage);

function changePlayerImage() {
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if(viewportWidth <= 375) {
        lessonsContainer.innerHTML = lessonsContainer375;
        navContainer.innerHTML = navContainer375;
    } else {
        lessonsContainer.innerHTML = lessonsContainerOther;
        navContainer.innerHTML = navContainerOther;
    }
}

// console.log(lessonsContainer375);
// console.log(lessonsContainerOther);

changePlayerImage();
// Turning navigation into button
let navContainer = document.querySelector('.nav-wrapper');
let navContainer375 = '<img src="images/header/nav.png" alt="navigation button">';
let navContainerOther = navContainer.innerHTML;

// Changing image in lessons section
let lessonsContainer = document.querySelector('.lessons-list__image-wrapper');
let lessonsContainer375 = '<img src="images/lessons/adaptive/img.png" alt="boy constructing mechanisms">';
let lessonsContainerOther = lessonsContainer.innerHTML;

// Changing connecting green line in teams section
let teamContainer = document.querySelector('.team-list');
let line = document.createElement('img');
line.src = "images/team/adaptive/line.svg";
line.alt = "green line";
line.classList.add('connecting-line');

window.addEventListener('resize', changePlayerImage);

// Checking the width of the page
function changePlayerImage() {
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if(viewportWidth <= 375) {
        teamContainer.prepend(line);
        lessonsContainer.innerHTML = lessonsContainer375;
        navContainer.innerHTML = navContainer375;
    } else {
        line.remove();
        lessonsContainer.innerHTML = lessonsContainerOther;
        navContainer.innerHTML = navContainerOther;
    }
}

changePlayerImage();
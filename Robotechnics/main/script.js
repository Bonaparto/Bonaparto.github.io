// Turning navigation into button
let navContainer = document.querySelector('.nav-wrapper');
let navContainer375 = '<img src="images/hero-image/adaptive/nav.svg" alt="navigation button">';
let navContainerOther = navContainer.innerHTML;

// Changing image of player
let playerContainer = document.querySelector('.player');
let playerContainer375 = '<img src="images/registration/adaptive/player.png" alt="player image">';
let playerContainerOther = playerContainer.innerHTML;

window.addEventListener('resize', changePlayerImage);

function changePlayerImage() {
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if(viewportWidth <= 375) {
        playerContainer.innerHTML = playerContainer375;
        navContainer.innerHTML = navContainer375;
    } else {
        playerContainer.innerHTML = playerContainerOther;
        navContainer.innerHTML = navContainerOther;
    }
}

changePlayerImage();
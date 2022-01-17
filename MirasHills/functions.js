let hidden_divs = document.querySelectorAll('.pop-up > div');

for(let i = 0; i < hidden_divs.length; ++i) {
    let hidden_div = hidden_divs[i].querySelector('div');
    let img = hidden_divs[i].querySelector('img');
    img.addEventListener('mouseover', () => {
        hidden_div.classList.add("vis");
    });
    img.addEventListener('mouseout', () => {
        hidden_div.classList.remove("vis");
    })
}
    
function change_photos(n) {
    for(let i = 1; i <= 3; ++i) {
        document.getElementById("layouts__image" + i).src = "images/layouts/button" + n + '/' + i + ".png";
    }
}
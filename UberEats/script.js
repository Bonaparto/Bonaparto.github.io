let input = document.getElementById("search")
let restaurants = document.querySelectorAll(".list__item")
let restaurantsNames = document.querySelectorAll(".list__item > h2")
let mp = {}

for(let i = 0; i < restaurants.length; ++i) {
    mp[restaurants[i].innerHTML] = restaurantsNames[i].innerText.toLowerCase();
}

input.addEventListener("input", () => {
    restaurants.forEach(restaurant => {
        if(mp[restaurant.innerHTML].indexOf(input.value.toLowerCase()) !== -1) restaurant.style.display = "block";
        else restaurant.style.display = "none";
    })
}) 
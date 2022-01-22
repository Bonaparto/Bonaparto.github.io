let paginationSection = document.querySelector('.section-pagination');
let paginationNames = document.querySelectorAll('.pagination__item');
let paginationUnderline = document.querySelector('.underline_colored');

let directionContent = document.querySelector('.direction-content');
let teamsContent = document.querySelector('.teams-content');
let materialsContent = document.querySelector('.materials-content');

directionContent.style.display = "none";
// teamsContent.style.display = "none";
materialsContent.style.display = "none";

paginationNames[0].style.color = "#5BBCA1";
paginationUnderline.style.left = '0';
paginationUnderline.style.width = '35%';

paginationNames.forEach((name) => {
    name.addEventListener('click', () => {
        name.style.color = "#5BBCA1";
        directionContent.style.display = "none";
        teamsContent.style.display = "none";
        materialsContent.style.display = "none";
        if(name.innerHTML === paginationNames[0].innerHTML) {
            paginationUnderline.style.left = '0';
            paginationUnderline.style.width = '35%';
            directionContent.style.display = "initial";
        } else if(name.innerHTML === paginationNames[1].innerHTML) {
            paginationUnderline.style.left = '35%';
            paginationUnderline.style.width = '35%';
            teamsContent.style.display = "initial";
        } else {
            paginationUnderline.style.left = '65%';
            paginationUnderline.style.width = '35%';
            materialsContent.style.display = "initial";
        }
        paginationNames.forEach((name1) => {
            if(name1.innerHTML !== name.innerHTML) {
                name1.style.color = "#D7D7D7";
            }
        });
    });
});

// console.log(paginationNames[0]);
// console.log(paginationNames[1]);
// console.log(paginationNames[2]);
// console.log(paginationUnderline);

// console.log(ceil);
// console.log(directionContent);
// console.log(teamsContent);
// console.log(materialsContent);
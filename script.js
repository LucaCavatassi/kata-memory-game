// Dictionary
const elements = {
    alien: { shown: false, imgUrl: './assets/images/alien.png' },
    bug: { shown: false, imgUrl: './assets/images/bug.png' },
    duck: { shown: false, imgUrl: './assets/images/duck.png' },
    rocket: { shown: false, imgUrl: './assets/images/rocket.png' },
    spaceship: { shown: false, imgUrl: './assets/images/spaceship.png' },
    tiktac: { shown: false, imgUrl: './assets/images/tiktac.png' },
};
// Classnames to assing
const classNames = ['alien', 'bug', 'duck', 'rocket', 'spaceship', 'tiktac', 'alien', 'bug', 'duck', 'rocket', 'spaceship', 'tiktac'];
// Shuffle randomness
classNames.sort(() => Math.random() - 0.5);

let selectedItems = [];

const imgList = document.getElementById('imgList');
const listItems = imgList.querySelectorAll('li');

listItems.forEach((elem, index) => {
    const className = classNames[index]; // Get assigned class
    elem.classList.add(className) //Add class to elem

    elem.addEventListener("click", (e) => {
        let elemClass = elem.classList[0]; // Get the first class only
        const img = elem.querySelector('img'); 
        // Assign the corresponding imgUrl
        img.src = elements[elemClass].imgUrl;
        // Push the classname added to the selected items, so can track the clicks
        selectedItems.push({elem, elemClass}) 
        console.log(selectedItems);
        
        // If array has length of 2 so there are two elements 
        if (selectedItems.length === 2) {
            // Confront them if they are equal match found go on
            if (selectedItems[0].elemClass === selectedItems[1].elemClass) {
                console.log('match found');
            } else {
                selectedItems.forEach((elem) => {
                    let img = elem.elem.querySelector('img')
                    img.src = './assets/images/back.png'
                })
                selectedItems = [];
            }
        }
        
    });
});

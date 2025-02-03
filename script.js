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

// Array to compare couples
let selectedItems = [];

// Error counter and html relative
let errorCounter = 0;
let errorHtml = document.getElementById('errorNumber')
errorHtml.innerText = errorCounter;
// Pair founded counter
let pairCounter = 0;

// Img List
const imgList = document.getElementById('imgList');
// Img elements
const listItems = imgList.querySelectorAll('li');

listItems.forEach((elem, index) => {
    const className = classNames[index]; // Get assigned class
    elem.classList.add(className) //Add class to elem

    elem.addEventListener("click", (e) => {
        let elemClass = elem.classList[0]; // Get the first class only
        const img = elem.querySelector('img') //Get the image tag inside the li

        img.src = elements[elemClass].imgUrl; // Assign the corresponding imgUrl
        selectedItems.push({elem, elemClass})  // Push the classname added to the selected items, so can track the clicks
        
        if (selectedItems.length === 2) { // If array has length of 2 so there are two elements 
            if (selectedItems[0].elemClass === selectedItems[1].elemClass) { // Confront them if they are equal match found go on
                console.log('match found');
                pairCounter++
                if (pairCounter === 6) {
                    console.log('You win');
                }
                selectedItems = [];
            } else { // if not hide them after 1 second
                // Add 1 to error counter and show it
                errorCounter++
                errorHtml.innerText = errorCounter;

                setTimeout(() => {
                    selectedItems.forEach((elem) => {
                        
                        let img = elem.elem.querySelector('img') //Get the image tag inside the li
                        img.src = './assets/images/back.png' //Return to hide
                    })
                    selectedItems = []; //Empty the array
                }, 1000)
            }
        }
        
    });
});

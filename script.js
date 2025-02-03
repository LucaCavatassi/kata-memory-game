// Dictionary
const elements = {
    alien: { shown: false, imgUrl: './assets/images/alien.png' },
    bug: { shown: false, imgUrl: './assets/images/bug.png' },
    duck: { shown: false, imgUrl: './assets/images/duck.png' },
    rocket: { shown: false, imgUrl: './assets/images/rocket.png' },
    spaceship: { shown: false, imgUrl: './assets/images/spaceship.png' },
    tiktac: { shown: false, imgUrl: './assets/images/tiktac.png' },
};
// Classnames to assign
const classNames = ['alien', 'bug', 'duck', 'rocket', 'spaceship', 'tiktac', 'alien', 'bug', 'duck', 'rocket', 'spaceship', 'tiktac'];
// Shuffle randomness
classNames.sort(() => Math.random() - 0.5);

// Array to compare couples
let selectedItems = [];

// Error counter and HTML reference
let errorCounter = 0;
let errorHtml = document.getElementById('errorNumber');
errorHtml.innerText = errorCounter;

// Pair found counter
let pairCounter = 0;

// Img List
const imgList = document.getElementById('imgList');
// Img elements
const listItems = imgList.querySelectorAll('li');

listItems.forEach((elem, index) => {
    const className = classNames[index]; // Get assigned class
    elem.classList.add(className); // Add class to elem

    elem.addEventListener("click", () => {
        if (selectedItems.length === 2) return; // Prevent more than 2 selections

        let elemClass = elem.classList[0]; // Get the first class only
        const img = elem.querySelector('img'); // Get the image tag inside the li

        img.src = elements[elemClass].imgUrl; // Assign the corresponding imgUrl
        selectedItems.push({ elem, elemClass }); // Track the clicked elements

        if (selectedItems.length === 2) { // If two elements are selected
            disableClicks(); // Disable clicking

            if (selectedItems[0].elemClass === selectedItems[1].elemClass) { // If match found
                pairCounter++;
                if (pairCounter === 6) {
                    document.getElementById('grid').style.display = 'none'
                    document.getElementById('win-screen').style.display = 'block'
                }
                selectedItems = [];
                enableClicks(); // Re-enable clicking immediately
            } else { // If not a match
                errorCounter++;
                errorHtml.innerText = errorCounter;

                setTimeout(() => {
                    selectedItems.forEach(({ elem }) => {
                        let img = elem.querySelector('img'); // Get the image tag inside the li
                        img.src = './assets/images/back.png'; // Hide again
                    });
                    selectedItems = [];
                    enableClicks(); // Re-enable clicking after hiding
                }, 1000);
            }
        }
    });
});

// Function to disable clicks on all list items
function disableClicks() {
    listItems.forEach((li) => li.style.pointerEvents = "none");
}

// Function to re-enable clicks on all list items
function enableClicks() {
    listItems.forEach((li) => li.style.pointerEvents = "auto");
}

// Reload button
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("refreshBtn").addEventListener("click", () => {
        const winScreen = document.getElementById('win-screen');
        if (winScreen) {
            winScreen.style.display = 'none';
        }
        location.reload();
    });
});
const elements = {
    alien: {shown: false, imgUrl: './assets/images/alien.png'},
    back: {shown: false, imgUrl: './assets/images/alien.png'},
    bug: {shown: false, imgUrl: './assets/images/alien.png'},
    duck: {shown: false, imgUrl: './assets/images/alien.png'},
    rocket: {shown: false, imgUrl: './assets/images/alien.png'},
    spaceship: {shown: false, imgUrl: './assets/images/alien.png'},
    tiktac: {shown: false, imgUrl: './assets/images/alien.png'},
    white: {shown: false, imgUrl: './assets/images/alien.png'},
}

Object.entries(elements).forEach((element) => {
    console.log(element[1].shown)
});

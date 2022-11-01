let display = document.getElementById("randomDog");

let btn1 = document.getElementById("button_Next");
let btn2 = document.getElementById("button_clear");



function getRandom() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
            if (response.status >= 200 && response.status <= 299) {
                return response.json();
            } else {
                throw new Error(
                    `Encountered somthing unexpected: ${response.status} ${response.statusText}`
                );
            }
        })
        .then((images) => {
            let imageList = document.createElement("li");
            imageList.setAttribute("id", "imageList");
            let randomImg = document.createElement("img");
            randomImg.src = images.message;
            //randomImg.src = images.medium;
            imageList.appendChild(randomImg);
            display.insertBefore(imageList, display.firstChild);


        })
        .catch((error) => {
            console.log(error);
        });
}

getRandom();
btn1.addEventListener("click", function () {
    getRandom();
});

btn2.addEventListener("click", function () {
    let display = document.getElementById("randomDog");
    if (display.hasChildNodes()) {
        display.removeChild(display.firstChild);
    }
});
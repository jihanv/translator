require('dotenv').config()
const fromText = document.querySelector(".from-text"),
toText = document.querySelector(".to-text"),
icons = document.querySelectorAll(".row i");
translateBtn = document.querySelector("button"),


fromText.addEventListener("keyup", () => {
    if(!fromText.value) {
        toText.value = "";
    }
    console.log("hi")
});

translateBtn.addEventListener("click", () => {
    toText.textContent = ""
    let text = fromText.value.trim()
    console.log(text)
    toText.value = text
    if(!text) return;
});

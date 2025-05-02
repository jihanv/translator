const fromText = document.querySelector(".from-text"),
toText = document.querySelector(".to-text"),
icons = document.querySelectorAll(".row i");
translateBtn = document.querySelector("button"),


fromText.addEventListener("keyup", () => {
    if(!fromText.value) {
        toText.value = "";
    }
});

translateBtn.addEventListener("click", () => {
    toText.textContent = ""
    let text = fromText.value.trim()
    console.log(text)
    toText.textContent = text
    if(!text) return;
});

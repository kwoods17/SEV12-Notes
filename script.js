const button = document.querySelector("button");
const body = document.querySelector("body");
const allButtons = document.querySelectorAll("button");
const changeButton = document.getElementById("text-change")
const firstAndLast = document.getElementsByClassName("button-class");

//change size of selected buttons
for (let i = 0; i< firstAndLast.length; i++) {
    firstAndLast[i].style.width="300px"
    firstAndLast[i].style.height = "300px"

}

//Event for change button to make text orange
changeButton.addEventListener("click", () => {
    body.style.color = "orange";
})
 
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].style.backgroundColor = "red"
}
document.addEventListener("DOMContentLoaded", render);
let enterButton = document.getElementById("enter");
let userInput = document.getElementById("userInput");
let ul = document.querySelector("ul");

let tasks = [];

const handleClickAdd = () => {
  if (userInput.value === "") return null;
  tasks.push(userInput.value);
  render(tasks);
  userInput.value = "";
};

const handleClickRemove = (index) => {
  tasks.splice(index, 1);
  render(tasks);
};

function render(array) {
  ul.innerHTML = "";
  tasks.forEach((task, index) => {
    let li = document.createElement("li"); // creates an element "li"
    li.appendChild(document.createTextNode(task)); //makes text from input field the li text
    ul.appendChild(li); //adds li to ul

    // START ADD DELETE BUTTON
    let dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.onclick = () => {
      handleClickRemove(dBtn.getAttribute("index"));
    };
  });
  console.log(tasks);
}

enterButton.addEventListener("click", handleClickAdd);

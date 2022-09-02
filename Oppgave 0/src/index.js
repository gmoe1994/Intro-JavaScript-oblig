// Oppgave 1
let textToRemove = document.getElementById("remove");

let btn = document.getElementById("remove-btn");

const removeTextAbove = () => textToRemove.remove();

btn.addEventListener("click", removeTextAbove);

// Oppgave 2
let textToChange = document.getElementById("change");

let btnChange = document.getElementById("change-btn");

const changeText = () =>
  (textToChange.innerHTML = "Now the text is changed!!!");

btnChange.addEventListener("click", changeText);

// Oppgave 3
const textInput = document.getElementById("input");

let textParagraphToChange = document.getElementById("input-text");

// funker ikke
const textChanger = function () {
  textParagraphToChange.innerHTML = textInput.value;
};

textInput.addEventListener("change", textChanger);

// Oppgave 4
const ulElement = document.getElementById("ul");

const printButton = document.getElementById("write-list");

const myList = ["item one", "item two", "item three"];

const writeElements = () => {
  myList.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = item;
    ulElement.appendChild(li);
  });
};

printButton.addEventListener("click", writeElements);

// Oppgave 5
const inputBox = document.getElementById("text");
const elementType = document.getElementById("select");
const createButton = document.getElementById("create");

const createTextElement = () => {
  const textNode = document.createElement(select.value);
  textNode.innerHTML = inputBox.value;
  document.getElementById("placeholder").appendChild(textNode);
};

createButton.addEventListener("click", createTextElement);

// Oppgave 6
const ulElementB = document.querySelectorAll("#list > li");
const removeButton = document.getElementById("remove-li");

const liRemover = () => {
  console.log(ulElementB.children);
  ulElementB.forEach((element) => element.remove());
};

removeButton.addEventListener("click", liRemover);

// Oppgave 7
const textToCheck = document.getElementById("name");
const buttonDisable = document.getElementById("order");

const checkFunc = () => {
  if (textToCheck.value.length >= 5) {
    buttonDisable.disabled = true;
  }
};

buttonDisable.addEventListener("click", checkFunc);

// Oppgave 8

const liToColor = document.querySelectorAll("ul.children > li");
const colorButton = document.getElementById("color");

const liColorizer = () => {
  liToColor.forEach((element) => {
    element.style.border = "thick solid #0000FF";
  });
};

colorButton.addEventListener("click", liColorizer);

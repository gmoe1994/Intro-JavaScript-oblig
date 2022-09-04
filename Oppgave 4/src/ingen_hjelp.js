import "./styles.css";

const main = document.getElementById("main");
const sortText = document.getElementById("desc");
const numberGuess = document.getElementById("guess");
const numbers = document.getElementById("numbers");

// TODO: Bruk querySelector til å hente knappen

const btn = document.querySelector("button");

// TODO: Lag en liste med tallene som skal sorteres
const numArray = [34, 9, 11, 24, 50];
let guessArray = [];

// TODO: Lag en funksjon for å skrive ut tallene som skal sorteres
const printNumbers = () => {
  numArray.forEach((element) => {
    const LiElement2 = document.createElement("LI");
    const numberElement = document.createTextNode(element);
    LiElement2.appendChild(numberElement);
    numbers.appendChild(LiElement2);
  });
};
printNumbers();

// TODO: Lag en funksjon for å skrive ut input felter bruker kan skrive tallene i

const input = document.createElement("INPUT");
input.setAttribute("number", "Guess a number");
input.style.marginTop = "10px";
main.appendChild(input);

// TODO: Lag en funksjon for å hente ut det brukeren har skrevet inn
const getNumbers = () => {
  const element = document.querySelector("input").value;
  guessArray.push(Number(element));
  const LiElement = document.createElement("LI");
  const numberElement = document.createTextNode(element);
  LiElement.appendChild(numberElement);
  numberGuess.appendChild(LiElement);
  document.querySelector("input").value = "";
};

btn.addEventListener("click", getNumbers);

// TODO: Lag en funksjon for å sjekke om tallene er sortert riktig av bruker
const checkNumbers = () => {
  numArray.sort((a, b) => a - b);
  if (numArray[guessArray.length - 1] === guessArray[guessArray.length - 1]) {
    sortText.innerHTML = "Riktig tall";
    if (guessArray.length === numArray.length)
      sortText.innerHTML = "Du gjettet riktig på alt!";
  } else if (
    guessArray.length > numArray.length ||
    numArray[guessArray.length - 1] != guessArray[guessArray.length - 1]
  ) {
    document
      .querySelectorAll("#guess > li")
      .forEach((element) => element.remove());
    guessArray = [];
    sortText.innerHTML = "Feil, prøv igjen";
  }
};

btn.addEventListener("click", checkNumbers);

// TODO: Lag en funksjon som "lager UI" -- Ikke helt nødvendig, men praktisk å ha
// TODO: Lytt til 'click'-event og trigg funksjonen som sjekker om man har gjort riktig ved klikk

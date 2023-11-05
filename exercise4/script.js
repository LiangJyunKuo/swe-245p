const books = [
  { title: 1984, author: "George Orwell" },
  { title: "In Search of Lost Time", author: "Marcel Proust" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Moby Dick", author: "Herman Melville" },
];

function printBooksWithoutOrwell(books) {
  const filteredBooks = books.filter((book) => book.author !== "George Orwell");
  console.log(filteredBooks);
}
console.log(printBooksWithoutOrwell(books));

////////////////////////////////////////////////////

const text = document.getElementById("content");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

function changeTextColorToBlue() {
  text.style.color = "blue";
}

function updateTextContent() {
  text.innerHTML = "Bye-Bye World!";
}

// Add onclick event listener to the button elements
button1.addEventListener("click", changeTextColorToBlue);
button2.addEventListener("click", updateTextContent);

//////////////////////////////////////////////////////

let p1, p2;

function setup() {
  createCanvas(500, 500);
  p1 = new Particle(300, 300);
  p2 = new Box(300, 300);
  p3 = new Rec(300, 100);
}

function draw() {
  background(0);
  p1.update();
  p1.show();
  p2.update();
  p2.show();
  p3.show();
  p3.update();
}

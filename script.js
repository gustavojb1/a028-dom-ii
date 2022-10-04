const cor = [];
cor[1] = "#CFF";
cor[2] = "#9FF";
cor[3] = "#600";
cor[4] = "#FF0";
cor[5] = "#C69";
cor[6] = "#0F0";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
let contador;


function adicionaItem(event) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("item");
  newDiv.setAttribute("onclick", "removeItem(event)");

  //setando cor aleatória para a div
  contador = getRandomArbitrary(0, 6);
  //console.log(cor[contador.toFixed(0)]);
  newDiv.setAttribute("style", `background-color: ${cor[contador.toFixed(0)]}`);

  document
    .getElementById("container")
    .insertAdjacentElement("beforeend", newDiv);
}

function removeItem(event) {
  let div = event.target;
  div.remove();
}

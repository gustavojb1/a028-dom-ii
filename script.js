// function adicionaItem(event) {
//   const newDiv = document.createElement("div");
//   newDiv.classList.add("item");
//   newDiv.setAttribute("onclick", "removeItem(event)");

//   //setando cor aleatória para a div
//   //newDiv.setAttribute("style", `background-color: ${cor[contador.toFixed(0)]}`);

//   //newDiv.setAttribute("style", `background-color: rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`);
//   newDiv.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;

//   document
//     .getElementById("container")
//     .insertAdjacentElement("beforeend", newDiv);
// }

// function removeItem(event) {
//   let div = event.target;
//   div.remove();
// }

// debts[0] = ["alex", "blake", 2];

// debts[1] = ["blake", "alex", 2];

// debts[2] = ["casey", "alex", 5];

// debts[3] = ["blake", "casey", 7];

// debts[4] = ["alex", "blake", 4];

// debts[5] = ["alex", "casey", 4];


function debts(n) {
  let debts = new Array;

  let blakeCred = 0;
  let caseyCred = 0;
  let alexCred = 0;

  let blakeDeb = 0;
  let caseyDeb = 0;
  let alexDeb = 0;

  let finalBlake=0
  let finalCasey=0
  let finalAlex=0



  for (i = 0; i <= n; i++) {
    if (debts[i][0] == "blake") {
      blakeCred += debts[i][2];
    } else if (debts[i][0] == "alex") {
      alexCred += debts[i][2];
    } else if (debts[i][0] == "casey") {
      caseyCred += debts[i][2];
    }
  }
  console.log("blake " + blakeCred);
  console.log("alex " + alexCred);
  console.log("casey " + caseyCred);

  for (i = 0; i <= n; i++) {
    if (debts[i][1] == "blake") {
        blakeDeb += debts[i][2];
    } else if (debts[i][1] == "alex") {
        alexDeb += debts[i][2];
    } else if (debts[i][1] == "casey") {
        caseyDeb += debts[i][2];
    }
  }


  finalAlex=alexCred-alexDeb
  finalBlake=blakeCred-blakeDeb
  finalCasey=caseyCred-caseyDeb



    if(finalAlex<finalBlake && finalAlex<finalCasey){
        return "Alex"
    }
    else if(finalBlake<finalAlex && finalBlake<finalCasey){
        return "Blake"
    }
    else if(finalCasey<finalAlex&&finalCasey<finalBlake){
        return "Casey"
    }
    else if(finalCasey==finalAlex && finalCasey<finalBlake){
        return "Alex"
    }
    else if(finalCasey==finalBlake && finalCasey<finalAlex){
        return "Blake"
    }
    else if(finalAlex==finalBlake && finalAlex<finalCasey){
        return "Alex"
    }
}


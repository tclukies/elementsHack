console.log("hi from js");

let apiURL = "./waterdata.json";

fetch("./waterdata.json")
  .then(response => response.json())
  .then(addElements);

function addElements(data) {
  console.log(data);
  var calculatedTotal = document.createElement("p");

  calculatedTotal.textContent = data[0].action;

  console.log(calculatedTotal);

  document.querySelector("section").appendChild(calculatedTotal);
}

// function accessAPI() {
//   return fetch("waterdata.json")
//   .then(response => console.log(response));
//   // .then(addElements);
// }

// function addElements(response) {
//   console.log(response);
// }
// accessAPI();

// function accessAPI() {
//   const plays = [];
//   fetch("./package.json")
//     .then(response => response.json())
//     .then(data => plays.push(...data));
// }
// accessAPI();

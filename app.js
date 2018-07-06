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
}

document
  .querySelector(".submitButton")
  .addEventListener("click", getSurveyAnswers);

function getSurveyAnswers(event) {
  console.log(event);

  document.querySelector("main").removeChild(document.querySelector(".form"));

  var responseSection = document.createElement("section");
  var laundryFacts = document.createElement("p");
  var showerFacts = document.createElement("p");
  var toiletFacts = document.createElement("p");
  var dishesFacts = document.createElement("p");
  var hygieneFacts = document.createElement("p");

  laundryFacts.textContent =
    "The average person uses 42 gallons per week on laundry. You use 60 gallons";
  showerFacts.textContent =
    "The average person uses 140 gallons per week in the shower. You use 210 gallons";
  toiletFacts.textContent =
    "The average person uses 63.7 gallons per week flushing the toilet. You use 67.2 gallons";
  hygieneFacts.textContent =
    "The average person uses 19.25 gallons per week on personal hygiene. You use 21 gallons.";
  dishesFacts.textContent =
    "The average person uses 70 gallons per week handwashing dishes. You use the same! You can save water by using a dishwasher!";

  responseSection.appendChild(laundryFacts);
  responseSection.appendChild(showerFacts);
  responseSection.appendChild(toiletFacts);
  responseSection.appendChild(dishesFacts);
  responseSection.appendChild(hygieneFacts);

  document.querySelector("main").appendChild(responseSection);
}

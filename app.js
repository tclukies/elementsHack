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
  var waterUDoing = document.createElement("h1");
  var laundryFacts = document.createElement("p");
  var showerFacts = document.createElement("p");
  var toiletFacts = document.createElement("p");
  var dishesFacts = document.createElement("p");
  var hygieneFacts = document.createElement("p");

  laundryFacts.className = "black";
  showerFacts.className = "black";
  toiletFacts.className = "black";
  dishesFacts.className = "black";
  hygieneFacts.className = "black";

  var laundryFactsTwo = document.createElement("p");
  var showerFactsTwo = document.createElement("p");
  var toiletFactsTwo = document.createElement("p");
  var dishesFactsTwo = document.createElement("p");
  var hygieneFactsTwo = document.createElement("p");

  waterUDoing.textContent = "WATER U DOING?!?!?!?";
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

  laundryFactsTwo.textContent =
    "Older washers use 40 to 45 gallons of water per load.  Newer, high-efficiency washers use 14 to 25 gallons per load.  By replacing old washing machine, the average family can reduce water usage by more than 6,000 gallons per year.";
  showerFactsTwo.textContent =
    "In an average home, showers are typically the third largest water use after toilets and clothes washers.";
  toiletFactsTwo.textContent =
    "The average person flushes five times a day, which accounts for 31% of household water consumption.";
  hygieneFactsTwo.textContent =
    "62% of women wash their hands more than 10 times per day, while only 37% of men do the same.";
  dishesFactsTwo.textContent =
    "Using a dishwasher is a greener choice than hand washing your dishes. An Energy Star certified dishwasher can save almost 5,000 gallons of water per year.";

  responseSection.appendChild(waterUDoing);
  responseSection.appendChild(laundryFacts);
  responseSection.appendChild(laundryFactsTwo);

  responseSection.appendChild(showerFacts);
  responseSection.appendChild(showerFactsTwo);
  responseSection.appendChild(toiletFacts);
  responseSection.appendChild(toiletFactsTwo);
  responseSection.appendChild(dishesFacts);
  responseSection.appendChild(dishesFactsTwo);
  responseSection.appendChild(hygieneFacts);
  responseSection.appendChild(hygieneFactsTwo);

  document.querySelector("main").appendChild(responseSection);
}

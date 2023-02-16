console.log("hello world");

const content = "<h1>cso</h1";

const rootElement = document.querySelector("#root");
rootElement.innerHTML = content;

let countriesData = [];

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    countriesData = responseJson;

    for (let index = 215; index < 225; index++) {
      rootElement.insertAdjacentHTML(
        "beforeend",
        `
      <div class = "card">
      <h2>${countriesData[index].name.common}</h2>
      <h2>${countriesData[index].population}</h2>
      <h4>${countriesData[index].flag}</h4>
      </div>
      <h5>${countriesData[index].area}</h5>
      </div>
      `
      );
    }
  });

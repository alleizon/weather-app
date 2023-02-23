import API from "./requestAPI";
import Process from "./processors";
import DOM from "./DOM";

let city = "Bucharest";
let unit = "metric";

function request(newCity = city) {
  API.call(newCity, unit)
    .then(([currentResult, forecastResult]) => {
      const obj = Process.currentWeather(currentResult);
      DOM.updateCurrent(obj, unit);

      const { list } = forecastResult;
      const timezoneMS = forecastResult.city.timezone * 1000;
      const forecastInfo = Process.forecastWeather(list, timezoneMS);
      DOM.updateForecast(forecastInfo, unit);
    })
    .catch((err) => {
      if (err.cause === "http-error") {
        DOM.displayError("invalid city");
      } else DOM.displayError("network error");
    });
}

const input = document.querySelector("#search-city");
const form = document.querySelector("form#weather");
const celsiusBtn = document.querySelector("#metric");
const fahrenheitBtn = document.querySelector("#imperial");

celsiusBtn.addEventListener("click", (e) => {
  const newUnit = e.currentTarget.id;
  if (unit === newUnit) return;
  unit = newUnit;
  DOM.swapUnits(unit);
});

fahrenheitBtn.addEventListener("click", (e) => {
  const newUnit = e.currentTarget.id;
  if (unit === newUnit) return;
  unit = newUnit;
  DOM.swapUnits(unit);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newCity = input.value.trim();

  if (!form.checkValidity() || newCity === city) {
    input.value = "";
    return;
  }

  request(newCity);

  city = newCity;
  input.value = "";
});

request();

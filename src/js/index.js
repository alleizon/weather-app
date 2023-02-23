import API from "./requestAPI";
import Process from "./processors";
import DOM from "./DOM";

let city = "Bucharest";
let unit = "metric";

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

  if (!form.checkValidity()) {
    input.value = "";
    return;
  }
  API.currentCall(newCity, unit)
    .then((result) => {
      const obj = Process.currentWeather(result);
      DOM.updateCurrent(obj, unit);
      city = newCity;
    })
    .catch((err) => {
      if (err instanceof Response) {
        DOM.displayError("invalid city");
      } else DOM.displayError("network error");
    });

  API.forecastCall(newCity, unit).then((result) => {
    const { list } = result;
    const timezoneMS = result.city.timezone * 1000;
    const forecastInfo = Process.forecastWeather(list, timezoneMS);
    DOM.updateForecast(forecastInfo, unit);
  });
  input.value = "";
});

API.currentCall(city, unit)
  .then((result) => {
    const obj = Process.currentWeather(result);
    DOM.updateCurrent(obj, unit);
  })
  .catch((err) => {
    console.log(err);
    if (err instanceof Response) {
      DOM.displayError("invalid city");
    } else DOM.displayError("network error");
  });

API.forecastCall(city, unit).then((result) => {
  const { list } = result;
  const timezoneMS = result.city.timezone * 1000;
  const forecastInfo = Process.forecastWeather(list, timezoneMS);
  DOM.updateForecast(forecastInfo, unit);
});

import weatherIcons from "../assets/icons.json";

const DOM = (() => {
  const FAHRENHEIT_F = "°F";
  const CELSIUS_F = "°C";

  const invalidCity = `Can't find city. 
  <br> Please make sure you entered a valid city name. 
  <br> (e.g. "New York")`;
  const networkError = `Network error.
  Please try again later.`;

  const displayError = (msg) => {
    const error = document.querySelector(".error-msg");
    const span = document.querySelector(".error-msg > span");

    error.classList.add("active");
    span.innerHTML = msg === "invalid city" ? invalidCity : networkError;
  };

  const clearCurrent = () => {
    const current = document.querySelector("#current-weather");
    while (current.lastElementChild) current.lastElementChild.remove();
  };

  const currentIcon = (weather) => {
    const i = document.createElement("i");
    const time = weather.icon.includes("d") ? "day" : "night";

    const prefix = "wi-";
    const { id } = weather;
    let { icon } = weatherIcons[id];
    if (time === "night" && id === 800) icon = "clear";
    if (!(id > 699 && id < 800) && !(id > 899 && id < 1000)) {
      icon = `${time}-${icon}`;
    }
    icon = prefix + icon;

    i.classList.add("wi", icon);
    i.title = weather.description;
    return i;
  };

  const updateCurrent = (obj, unit) => {
    clearCurrent();
    const current = document.querySelector("#current-weather");

    const icon = currentIcon(obj.weather);
    const cityName = document.createElement("p");
    cityName.textContent = obj.name;
    const temp = document.createElement("span");
    temp.textContent = `${Math.round(obj.temp)} ${
      unit === "metric" ? CELSIUS_F : FAHRENHEIT_F
    }`;

    current.append(cityName, temp, icon);
  };

  return { updateCurrent, displayError };
})();

export default DOM;

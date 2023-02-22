import weatherIcons from "../assets/icons.json";
import Helpers from "./dateFormat";

const DOM = (() => {
  const constants = {
    FAHRENHEIT_F: "°F",
    CELSIUS_F: "°C",

    invalidCity: `Can't find city. 
    <br> Please make sure you entered a valid city name. 
    <br> (e.g. "New York")`,
    networkError: `Network error.
    Please try again later.`,
  };

  const displayError = (msg) => {
    const error = document.querySelector(".error-msg");
    const span = document.querySelector(".error-msg > span");

    error.classList.add("active");
    span.innerHTML =
      msg === "invalid city" ? constants.invalidCity : constants.networkError;
  };

  const clearCurrent = () => {
    const error = document.querySelector(".active");
    if (error) error.classList.remove("active");
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
      unit === "metric" ? constants.CELSIUS_F : constants.FAHRENHEIT_F
    }`;
    const { timezone } = obj;
    const wrapper = document.createElement("div");
    const dateInfo = Helpers.getLocalDate(timezone);
    const dayMonth = document.createElement("p");
    dayMonth.textContent = `${dateInfo[0]} ${dateInfo[1]}`;
    const time = document.createElement("p");
    time.textContent = `${dateInfo[2]} - ${dateInfo[3]}`;
    wrapper.append(cityName, temp, icon);

    current.append(wrapper, dayMonth, time);
  };

  return { updateCurrent, displayError };
})();

export default DOM;

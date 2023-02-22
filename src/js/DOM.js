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

  const clearForecast = () => {
    const error = document.querySelector(".active");
    if (error) error.classList.remove("active");
    const timestampWrapper = document.querySelector(".timestamp-wrapper");
    while (timestampWrapper.lastElementChild)
      timestampWrapper.lastElementChild.remove();
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
    const location = document.createElement("p");
    location.textContent = `${obj.name}, ${obj.countryName}`;
    const temp = document.createElement("span");
    temp.textContent = `${Math.round(obj.temp)} ${
      unit === "metric" ? constants.CELSIUS_F : constants.FAHRENHEIT_F
    }`;
    const { timezone } = obj;
    const wrapper = document.createElement("div");
    const dateObj = Helpers.getLocalDate(timezone);
    const formattedDate = Helpers.formatDate(dateObj);
    const dayMonth = document.createElement("p");
    dayMonth.textContent = `${formattedDate[0]} ${formattedDate[1]}`;
    const time = document.createElement("p");
    time.textContent = `${formattedDate[2]} - ${formattedDate[3]}`;
    wrapper.append(location, temp, icon);

    current.append(wrapper, dayMonth, time);
  };

  const updateForecast = (list, unit) => {
    clearForecast();
    const container = document.querySelector(".timestamp-wrapper");

    list.forEach((obj) => {
      const timestamp = document.createElement("div");
      const icon = currentIcon(obj.weather);
      timestamp.classList.add("timestamp");
      timestamp.innerHTML = `<p>${obj.formattedDate}</p>
      <p>${Math.round(obj.temp)} ${
        unit === "metric" ? constants.CELSIUS_F : constants.FAHRENHEIT_F
      }</p>
      ${icon.outerHTML}`;
      container.appendChild(timestamp);
    });
  };

  return { updateCurrent, updateForecast, displayError };
})();

export default DOM;

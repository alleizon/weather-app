import weatherIcons from "../assets/icons.json";
import Helpers from "./dateFormat";

const DOM = (() => {
  const constants = {
    imperial: "°F",
    metric: "°C",

    invalidCity: `Can't find city. 
    <br> Please make sure you entered a valid city name. 
    <br> (e.g. "New York")`,
    networkError: `Network error.
    Please try again later.`,
  };

  const temperatureCache = [];

  const displayError = (msg) => {
    const error = document.querySelector(".error-msg");
    const span = document.querySelector(".error-msg > span");

    error.classList.add("active");
    span.innerHTML =
      msg === "invalid city" ? constants.invalidCity : constants.networkError;
  };

  const clearForecast = () => {
    const timestampWrapper = document.querySelector(".timestamp-wrapper");
    while (timestampWrapper.lastElementChild)
      timestampWrapper.lastElementChild.remove();
  };

  const clearCurrent = () => {
    const error = document.querySelector(".error-msg.active");
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
    temperatureCache.length = 0;

    temperatureCache.push(obj.temp);
    const current = document.querySelector("#current-weather");

    const icon = currentIcon(obj.weather);

    const location = document.createElement("p");
    location.dataset.location = "";
    location.textContent = `${obj.name}, ${obj.countryName}`;

    const temp = document.createElement("span");
    temp.dataset.unit = unit;
    temp.textContent = `${Math.round(obj.temp)} ${
      unit === "metric" ? constants.metric : constants.imperial
    }`;

    const { timezone } = obj;
    const dateObj = Helpers.getLocalDate(timezone);
    const formattedDate = Helpers.formatDate(dateObj);

    const day = document.createElement("p");
    day.dataset.day = "";
    day.textContent = formattedDate[0];

    const time = document.createElement("p");
    time.dataset.datetime = "";
    time.textContent = `${formattedDate[1]} ${formattedDate[2]} ${formattedDate[3]}`;

    const wrapper = document.createElement("div");
    wrapper.append(temp, icon);

    current.append(location, day, time, wrapper);
  };

  const updateForecast = (list, unit) => {
    clearForecast();

    const container = document.querySelector(".timestamp-wrapper");

    list.forEach((obj) => {
      temperatureCache.push(obj.temp);
      const timestamp = document.createElement("div");
      const icon = currentIcon(obj.weather);

      timestamp.classList.add("timestamp");
      timestamp.innerHTML = `<p>${obj.formattedDate}</p>
      <p data-unit="${unit}">${Math.round(obj.temp)} ${
        unit === "metric" ? constants.metric : constants.imperial
      }</p>
      ${icon.outerHTML}`;
      container.appendChild(timestamp);
    });
  };

  const swapUnits = (newUnit) => {
    const oldUnit = newUnit === "imperial" ? "metric" : "imperial";
    const temps = Array.from(
      document.querySelectorAll(`[data-unit="${oldUnit}"]`)
    );

    temps.forEach((e, index) => {
      const element = e;
      const cur = temperatureCache[index];
      const newTemp =
        newUnit === "imperial" ? (cur * 9) / 5 + 32 : ((cur - 32) * 5) / 9;
      element.textContent = `${Math.round(newTemp)} ${constants[newUnit]}`;
      element.dataset.unit = newUnit;
      temperatureCache[index] = newTemp;
    });
  };

  return { updateCurrent, updateForecast, displayError, swapUnits };
})();

export default DOM;

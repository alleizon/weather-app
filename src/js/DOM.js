import weatherIcons from "../assets/icons.json";
import Helpers from "./helpers";

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
    const timestampWrapper = document.querySelector(".days-wrapper");
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
    [day.textContent] = formattedDate;

    const time = document.createElement("p");
    time.dataset.datetime = "";
    time.textContent = `${formattedDate[1]} ${formattedDate[2]} ${formattedDate[3]}`;

    const wrapper = document.createElement("div");
    wrapper.append(temp, icon);

    current.append(location, day, time, wrapper);
  };

  const updateForecast = (data, unit) => {
    clearForecast();

    console.log(data);
    const container = document.querySelector(".days-wrapper");

    data.forEach((day) => {
      const dayE = document.createElement("div");
      dayE.classList.add("day");
      const timestampContainer = document.createElement("div");
      timestampContainer.classList.add("day-expanded", "hidden");

      let lowest = Infinity;
      let highest = -Infinity;

      day.forEach((timestamp) => {
        lowest = Math.min(lowest, timestamp.temp);
        highest = Math.max(highest, timestamp.temp);

        const icon = currentIcon(timestamp.weather);

        const hiddenTimestamp = document.createElement("div");
        hiddenTimestamp.classList.add("timestamp");
        hiddenTimestamp.innerHTML = `<span data-timestamp-time>${
          timestamp.day
        } ${timestamp.time}</span>
        <span data-timestamp-temp data-unit="${unit}">${Math.round(
          timestamp.temp
        )} ${constants[unit]}</span>
        ${icon.outerHTML}`;

        timestampContainer.appendChild(hiddenTimestamp);
      });

      dayE.innerHTML = `<span data-forecast-day="${day[0].day}">${
        day[0].day
      }</span>
      <span data-forecast-min-temp>min: <span data-unit="${unit}">${Math.round(
        lowest
      )} ${constants[unit]}</span></span>
      <span data-forecast-max-temp>max: <span data-unit="${unit}">${Math.round(
        highest
      )} ${constants[unit]}</span></span>
      <button type="button" class="day-expand"><i class="fa-solid fa-angle-right"></i></button>`;

      container.append(dayE, timestampContainer);
      document
        .querySelector(
          ".days-wrapper > div.day:nth-last-child(2) > button:last-child"
        )
        .addEventListener("click", Helpers.renderTimestamps);
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

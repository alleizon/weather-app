import Helpers from "./dateFormat";

const Process = (() => {
  const currentWeather = (obj) => {
    const { name } = obj;
    const { temp } = obj.main;
    const weather = obj.weather[0];
    const { timezone } = obj;
    const { country } = obj.sys;
    const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    const countryName = regionNames.of(country);
    return { name, temp, weather, timezone, countryName };
  };

  const forecastWeather = (list, timezoneOffsetMS) => {
    const n = list.map((timestamp) => {
      const timeMS =
        timestamp.dt * 1000 + new Date().getTimezoneOffset() * 60 * 1000;
      const date = new Date(timeMS + timezoneOffsetMS);
      const formattedDate = Helpers.formatDateForecast(date);
      const { temp } = timestamp.main;
      const weather = timestamp.weather[0];
      return { formattedDate, temp, weather };
    });
    return n;
  };

  return { currentWeather, forecastWeather };
})();

export default Process;

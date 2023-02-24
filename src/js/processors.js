import Helpers from "./helpers";

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
    const uniqueDays = new Set();
    let addedDays = 1;
    const timestampsByDay = [];
    const newDay = [];

    list.forEach((timestamp, index) => {
      const timeMS =
        timestamp.dt * 1000 + new Date().getTimezoneOffset() * 60 * 1000;
      const date = new Date(timeMS + timezoneOffsetMS);
      const formattedDate = Helpers.formatDateForecast(date).split(" ");
      const [day, time] = [
        formattedDate[0],
        formattedDate[1].concat(` ${formattedDate[2]}`),
      ];
      const { temp } = timestamp.main;
      const weather = timestamp.weather[0];

      uniqueDays.add(day);
      if (index === list.length - 1) {
        timestampsByDay.push(newDay);
      }
      if (uniqueDays.size === addedDays + 1) {
        const tmp = newDay.slice();
        timestampsByDay.push(tmp);
        newDay.length = 0;
        newDay.push({ day, time, temp, weather });
        addedDays += 1;
      } else {
        newDay.push({ day, time, temp, weather });
      }
    });

    return timestampsByDay;
  };

  return { currentWeather, forecastWeather };
})();

export default Process;

import API from "./requestAPI";
import Process from "./processors";
import DOM from "./DOM";

let city = "Bucharest";
let unit = "metric";

API.currentCall(city, unit).then((result) => {
  const obj = Process.currentWeather(result);
  DOM.updateCurrent(obj);
});

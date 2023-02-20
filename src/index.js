import API from "./requestAPI";

(async () => {
  const a = await API.currentCall();
  const b = await API.forecastCall();
  console.log(a, b);
})();

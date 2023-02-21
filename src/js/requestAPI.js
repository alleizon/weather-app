const API = (() => {
  const API_KEY = "0899300cbaa38468fa1729a1906d7b78";

  const APICall = async (url) => {
    const response = await fetch(url).catch((err) => err);
    if (!response.ok) throw response;
    const obj = await response.json();
    return obj;
  };

  const currentCall = (city, unit) => {
    const CURRENT_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`;
    return APICall(CURRENT_URL);
  };

  const forecastCall = (city, unit) => {
    const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${unit}`;
    return APICall(FORECAST_URL);
  };

  return { currentCall, forecastCall };
})();

export default API;

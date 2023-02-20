const API = (() => {
  const API_KEY = "0899300cbaa38468fa1729a1906d7b78";
  const city = "Bucharest";

  const APICall = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`${response.status}`);
      const obj = await response.json();
      return obj;
    } catch (err) {
      return console.error(err);
    }
  };

  const currentCall = (city, unit) => {
    const CURRENT_URL = `https://api.openweathermap.org/data/2.5/weather?q=Bucharest&appid=${API_KEY}&units=${unit}`;
    return APICall(CURRENT_URL);
  };

  const forecastCall = (city, unit) => {
    const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?q=Bucharest&appid=${API_KEY}&units=${unit}`;
    return APICall(FORECAST_URL);
  };

  return { currentCall, forecastCall };
})();

export default API;

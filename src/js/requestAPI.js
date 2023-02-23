const API = (() => {
  const API_KEY = "0899300cbaa38468fa1729a1906d7b78";

  const call = async (city, unit) => {
    const CURRENT_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`;
    const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${unit}`;

    const responses = await Promise.all([
      fetch(CURRENT_URL),
      fetch(FORECAST_URL),
    ]).catch((err) => {
      throw new Error(err, { cause: "network-error" });
    });
    const data = await Promise.all(
      responses.map((resp) => {
        if (!resp.ok)
          throw new Error(`Error: ${resp.status}`, { cause: "http-error" });
        return resp.json();
      })
    );
    return data;
  };

  return { call };
})();

export default API;

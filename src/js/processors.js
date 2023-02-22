const Process = (() => {
  const currentWeather = (obj) => {
    const { name } = obj;
    const { temp } = obj.main;
    const weather = obj.weather[0];
    const { timezone } = obj;
    return { name, temp, weather, timezone };
  };

  return { currentWeather };
})();

export default Process;

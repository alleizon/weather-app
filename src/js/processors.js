const Process = (() => {
  const currentWeather = (obj) => {
    const { name } = obj;
    const { temp } = obj.main;
    const weather = obj.weather[0];
    return { name, temp, weather };
  };

  return { currentWeather };
})();

export default Process;

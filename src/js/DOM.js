import weatherIcons from "../assets/icons.json";

const DOM = (() => {
  const currentIcon = (weather) => {
    console.log(weather);
  };

  const updateCurrent = (obj) => {
    console.log(obj);
    currentIcon(obj.weather);
  };

  return { updateCurrent };
})();

export default DOM;

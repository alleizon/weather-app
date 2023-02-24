import { format } from "date-fns";

const Helpers = (() => {
  const formatDateForecast = (date) => format(date, "EEEE h aaa");

  const formatDate = (date) => format(date, "EEEE dd LLL HH:mm").split(" ");

  const getLocalDate = (timezoneOffset) => {
    const now = new Date();
    const nowUTC = new Date(
      now.getTime() + now.getTimezoneOffset() * 60 * 1000
    );

    const timeZoneDifference = timezoneOffset * 1000;
    const localDate = new Date(nowUTC.getTime() + timeZoneDifference);

    return localDate;
  };

  const removeTimestamps = () => {
    const timestamps = document.querySelector(
      ".days-wrapper > .day-expanded.active"
    );
    timestamps.classList.remove("active");
    timestamps.classList.add("hidden");
    document.querySelector("i.fa-left-long").classList.add("hidden");

    const days = Array.from(document.querySelectorAll(".days-wrapper > .day"));
    days.forEach((dayDiv) => {
      dayDiv.classList.remove("hidden");
    });
  };

  const renderTimestamps = (e) => {
    const selectedDay = e.currentTarget.parentElement;
    const timestamps = selectedDay.nextElementSibling;
    document.querySelector("i.fa-left-long").classList.remove("hidden");

    const days = Array.from(document.querySelectorAll(".days-wrapper > .day"));
    days.forEach((dayDiv) => {
      dayDiv.classList.add("hidden");
    });

    timestamps.classList.remove("hidden");
    timestamps.classList.add("active");
  };

  return {
    getLocalDate,
    formatDate,
    formatDateForecast,
    renderTimestamps,
    removeTimestamps,
  };
})();

export default Helpers;

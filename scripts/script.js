let elements = {
  seconds: document.querySelector("#seconds"),
  minutes: document.querySelector("#minutes"),
  hours: document.querySelector("#hours"),
  days: document.querySelector("#days"),
};

const countDownDate = new Date("Dec 31, 2022 22:59:59").getTime();

const updateCountDownDate = setInterval(() => {
  let now = new Date().getTime();

  let distanceBetweenDates = countDownDate - now;

  let days = Math.floor(distanceBetweenDates / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (distanceBetweenDates % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor(
    (distanceBetweenDates % (1000 * 60 * 60)) / (1000 * 60)
  );
  let seconds = Math.floor((distanceBetweenDates % (1000 * 60)) / 1000);

  const formattedDays = days.toString().padStart(2, "0");
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  elements.seconds.innerHTML = formattedSeconds;
  elements.minutes.innerHTML = formattedMinutes;
  elements.hours.innerHTML = formattedHours;
  elements.days.innerHTML = formattedDays;

  if (distanceBetweenDates < 0) {
    clearInterval(updateCountDownDate);

    elements.seconds.innerHTML = "00";
    elements.minutes.innerHTML = "00";
    elements.hours.innerHTML = "00";
    elements.days.innerHTML = "00";
  }
}, 1000);

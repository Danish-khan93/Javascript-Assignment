const hoursEl = document.querySelector(".hours");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
function updateClock() {
  const currentDate = new Date();
  //   setTimeout(updateClock, 1000);
  const hours = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();
  const hoursDeg = (hours / 12) * 360;
  hoursEl.style.transform = `rotate(${hoursDeg}deg)`;
  const minuteDeg = (minute / 60) * 360;
  minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
  const secondDeg = (second / 60) * 360;
  secondEl.style.transform = `rotate(${secondDeg}deg)`;
}
setInterval(updateClock, 1000);

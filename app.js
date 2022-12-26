let seconds = document.getElementById("seconds");
let minutes = document.getElementById("minutes");
let hours = document.getElementById("hours");
let weeks = document.getElementById("weeks");
let years = document.getElementById("years");

function showTime() {
  const date = new Date();
  let s = formatTime(date.getSeconds());
  let m = formatTime(date.getMinutes());
  let h = formatTime(date.getHours());

  setTimeout(showTime, 1000);

  // if (s < 10) {
  //   s = "0" + s;
  // }

  // if (m < 10) {
  //   m = "0" + m;
  // }

  // if (h < 10) {
  //   h = "0" + h;
  // }

  function formatTime(time) {
    if (time < 10) {
      return "0" + time;
    }
    return time;
  }

  seconds.innerText = s;
  minutes.innerText = m;
  hours.innerText = h;
}

showTime();

let seconds = document.getElementById("seconds");
let minutes = document.getElementById("minutes");
let hours = document.getElementById("hours");
let days = document.getElementById("days");
let weekdays = document.getElementById("weekdays");
let months = document.getElementById("months");
let years = document.getElementById("years");

function showTime() {
  const date = new Date();
  let second = formatTime(date.getSeconds());
  let minute = formatTime(date.getMinutes());
  let hour = formatTime(date.getHours());
  let day = formatTime(date.getDate());
  let weekday = date.getDay();
  let month = formatTime(date.getMonth() + 1);
  let year = formatTime(date.getFullYear());

  setTimeout(showTime, 1000);

  function formatTime(time) {
    if (time < 10) {
      return "0" + time;
    }
    return time;
  }

  switch (weekday) {
    case 1:
      weekdays.innerText = "Monday";
      break;

    case 2:
      weekdays.innerText = "Tuesday";
      break;

    case 3:
      weekdays.innerText = "Wednesday";
      break;

    case 4:
      weekdays.innerText = "Thursday";
      break;

    case 5:
      weekdays.innerText = "Friday";
      break;

    case 6:
      weekdays.innerText = "Saturday";
      break;

    case 7:
      weekdays.innerText = "Sunday";
      break;
  }

  seconds.innerText = second;
  minutes.innerText = minute;
  hours.innerText = hour;
  days.innerText = day;
  months.innerText = month;
  years.innerText = year;
}

showTime();

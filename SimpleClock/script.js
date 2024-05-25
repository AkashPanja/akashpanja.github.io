for (i = 0; i <= 60; i++) {
  $('.points').append('<span class="point point' + i + '"></span>');
}

const secondSelector = document.querySelector('.seconds');
const minuteSelector = document.querySelector('.minutes');
const hourSelector = document.querySelector('.hours');
const pointsMask = document.querySelector('.points-mask');
const timerMinutes = document.querySelector('.timer-minutes');
const timerHours = document.querySelector('.timer-hours');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  //$(timerMinutes).html(now.getMinutes());
  //$(timerHours).html(now.getHours());

  const getSecondsDegrees = seconds / 60 * 360;
  const getMinutesDegrees = minutes / 60 * 360;
  const getHoursDegrees = hours / 12 * 360;

  secondSelector.style.transform = `rotate(${getSecondsDegrees}deg)`;
  minuteSelector.style.transform = `rotate(${getMinutesDegrees}deg)`;
  hourSelector.style.transform = `rotate(${getHoursDegrees}deg)`;
  pointsMask.style.transform = `rotate(${getSecondsDegrees}deg)`;

  $('.point').removeClass('active');
  $('.point' + seconds).addClass('active');
}



setInterval(setDate, 1000);
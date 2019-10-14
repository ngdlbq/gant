export function getDuration(value) {
  let seconds = parseInt(value / 1000); // 需要转换的时间秒
  let minutes = 0; // 分
  let hours = 0; // 小时
  let days = 0; // 天
  if (seconds > 60) {
    minutes = parseInt(seconds / 60);
    seconds = parseInt(seconds % 60);
    if (minutes > 60) {
      hours = parseInt(minutes / 60);
      minutes = parseInt(minutes % 60);
      if (hours > 24) {
        //大于24小时
        days = parseInt(hours / 24);
        hours = parseInt(hours % 24);
      }
    }
  }
  // hours = hours < 10 ? `0${hours}` : hours;
  // minutes = minutes < 10 ? `0${minutes}` : minutes;
  // seconds = seconds < 10 ? `0${seconds}` : seconds;
  return { days, hours, minutes, seconds };
}

export function formateTime(formate, timeData) {
  if (formate.includes('HH')) {
    formate = formate.replace('HH', addZero(timeData.hours));
  }
  if (formate.includes('mm')) {
    formate = formate.replace('mm', addZero(timeData.minutes));
  }
  if (formate.includes('ss')) {
    formate = formate.replace('ss', addZero(timeData.seconds));
  }
  if (formate.includes('DD')) {
    formate = formate.replace('DD', addZero(timeData.days));
  }
  if (formate.includes('dd')) {
    formate = formate.replace('dd', addZero(timeData.hours));
  }
  return formate;
}

export function addZero(num, targetLength = 2) {
  num = num + '';
  while(num.length < targetLength) {
    num = '0' + num;
  }
  return num;
}
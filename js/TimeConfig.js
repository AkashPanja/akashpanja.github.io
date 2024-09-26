const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function updateClock() {
    now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();
    miliseconds = now.getMilliseconds();
    date = now.getDate();
    let tday = weekday[now.getDay()];
    let tmonth = month[now.getMonth()];
    ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    document.getElementById('Hour').textContent = `${String(hours).padStart(2, '0')}`;
    document.getElementById('Minutes').textContent = `${String(minutes).padStart(2, '0')}`;
    // document.getElementById('Seconds').textContent = `${String(seconds).padStart(2, '0')}`;
    // document.getElementById('tt').textContent = ampm;
    // document.getElementById('HourHand').style.transform=`rotate(${hours * 30 + minutes*0.5+"deg"})`;
    // document.getElementById('MinuteHand').style.transform=`rotate(${minutes * 6+"deg"})`;
    // document.getElementById('SecondHand').style.transform=`rotate(${0.006*(seconds*1000+miliseconds)+"deg"})`;
    document.getElementById('Date').textContent = `${String(date).padStart(2, '0')}`;
    document.getElementById('Day').textContent = `${String(tday).slice(0,3)}`;
    document.getElementById('Month').textContent = `${tmonth}`;
}
setInterval(updateClock, 1);
updateClock();
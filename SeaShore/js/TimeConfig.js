function updateClock() {
    now = new Date();
    hours = String(now.getHours()).padStart(2, '0');
    minutes = String(now.getMinutes()).padStart(2, '0');
    seconds = String(now.getSeconds()).padStart(2, '0');
    miliseconds = now.getMilliseconds();
    ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    document.getElementById('Hour').textContent = `${hours}`;
    document.getElementById('Minutes').textContent = `${minutes}`;
    document.getElementById('Seconds').textContent = `${seconds}`;
    document.getElementById('tt').textContent = ampm;
    document.getElementById('HourHand').style.transform=`rotate(${hours * 30 + minutes*0.5+"deg"})`;
    document.getElementById('MinuteHand').style.transform=`rotate(${minutes * 6+"deg"})`;
    document.getElementById('SecondHand').style.transform=`rotate(${0.006*(seconds*1000+miliseconds)+"deg"})`;
}
setInterval(updateClock, 1);
updateClock();
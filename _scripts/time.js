function startTime() {
    var today = new Date();
    document.getElementById('date').innerHTML = today.toLocaleString([], { month: '2-digit', day: '2-digit' });
    document.getElementById('time').innerHTML = today.toLocaleString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    var t = setTimeout(startTime, 500);
}
startTime();

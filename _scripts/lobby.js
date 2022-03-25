function startTime() {
    var today = new Date();
    $('#time').text(today.toLocaleString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    var t = setTimeout(startTime, 500);
}

$(function () {
    startTime();
});

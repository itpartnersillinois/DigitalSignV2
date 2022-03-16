function triggerMenu() {
    $('.main-section').css("filter", "blur(10px)");
    window.location.href = '/home/menu';
}

function startTime() {
    var today = new Date();
    $('#time').text(today.toLocaleString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    var t = setTimeout(startTime, 500);
}

$(function () {
    $('body').click(triggerMenu);
    startTime();
});

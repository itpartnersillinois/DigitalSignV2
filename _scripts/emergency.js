let timeoutValue = '';
$(document).ready(function () {
    setInterval(function () { checkEmergency(); }, 6000);
    setInterval(function () { checkTimeout(); }, 30000);
});

function checkEmergency() {
    $.ajax({
        url: 'https://digitalsigneditor.itpartners.illinois.edu/emergency/get',
        type: 'GET',
        success: function (data) {
            if (data === '') {
                $('.emergencyMessage').hide();
                $('.emergencyMessage .title').text('');
                $('.emergencyMessage .body').text('');
                $('.emergencyMessage .time').text('');
            } else {
                $('.emergencyMessage').show();
                $('.emergencyMessage .title').text(data.title);
                $('.emergencyMessage .body').text(data.description);
                $('.emergencyMessage .time').text(data.time);
            }
        }
    });
}

function checkTimeout() {
    const dateNow = new Date();
    if (dateNow.getHours() == 5 && dateNow.getMinutes() > 10) {
        location.reload();
    }
    $.ajax({
        url: '/json/timeout.json',
        type: 'GET',
        success: function (data) {
            console.log(timeoutValue + ' vs ' + data.time);
            if (timeoutValue == '') {
                timeoutValue = data.time;
            }
            if (timeoutValue != data.time) {
                location.reload();
            } 
        }
    });
}
$(document).ready(function () {
    checkCalendar();
    setInterval(function () { checkCalendar(); }, 3600000);
});

function checkCalendar() {
    if ($('div.calendar-items').length > 0) {
        $('div.calendar-items').each(function(i, obj) {
            $.ajax({
                url: 'https://digitalsigneditor.itpartners.illinois.edu/api/data/calendar/' + obj.getAttribute('data-calendarid'),
                type: 'GET',
                success: function (data) {
                    var html = '';
                    for (var j = 0; j < data.length; j++) {
                        if (data[j].isLong) {
                            html += '<p class="title long">' + data[j].subject + '</p><p class="date">' + data[j].dateString + '</p>';
                        } else {
                            html += '<p class="title">' + data[j].subject + '</p><p class="date">' + data[j].dateString + '</p>';
                        }
                    }
                    obj.innerHTML = html;
                }
            });
        });
    }
}
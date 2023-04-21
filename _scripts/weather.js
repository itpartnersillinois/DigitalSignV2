$(document).ready(function () {
    checkWeather();
    setInterval(function () { checkWeather(); }, 1000000);
});

function checkWeather() {
    if ($('div.weather').length > 0) {
        $.ajax({
            url: 'https://digitalsigneditor.itpartners.illinois.edu/api/data/weather',
            type: 'GET',
            success: function (data) {
                var html = '<div class="text"><div class="weatherblock"><h2>' + data.day1.title + '</h2>';
                html += '<p class="weatherheader">' + data.day1.summary + '</p>';
                html += '<p>Temperature: ' + data.day1.temperature + 'F</p>';
                if (data.day1.precipitation != '') html += '<p>' + data.day1.precipitation + '</p>';
                if (data.day1.wind != '') html += '<p>' + data.day1.wind + '</p>';
                html += '</div>';
                html += '<div class="weatherblock"><h2>' + data.day2.title + '</h2>';
                html += '<p>Temperature: ' + data.day2.temperature + 'F</p>';
                if (data.day2.precipitation != '') html += '<p>' + data.day2.precipitation + '</p>';
                if (data.day2.wind != '') html += '<p>' + data.day2.wind + '</p>';
                html += '</div>';
                html += '<div class="weatherblock"><h2>' + data.day3.title + '</h2>';
                html += '<p class="weatherheader">' + data.day3.summary + '</p>';
                html += '<p>Temperature: ' + data.day3.temperature + 'F</p>';
                if (data.day3.precipitation != '') html += '<p>' + data.day3.precipitation + '</p>';
                if (data.day3.wind != '') html += '<p>' + data.day3.wind + '</p>';
                html += '</div>';
                $('div.weather').each(function(i, obj) {
                    obj.innerHTML = html;
                    obj.classList.add(data.icon);
                });
            }
        });
    }
}
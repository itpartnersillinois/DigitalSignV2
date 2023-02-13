$(document).ready(function () {
    checkWeather();
    setInterval(function () { checkWeather(); }, 5640000);
});

function checkWeather() {
    if ($('div.weather').length > 0) {
        $.ajax({
            url: 'https://digitalsigneditor.itpartners.illinois.edu/api/data/weather',
            type: 'GET',
            success: function (data) {
                var html = '<div class="text"><div class="weatherblock"><h2>' + data.day1.title + '</h2>';
                html += '<p class="weatherheader">' + data.day1.summary + '</p>';
                html += '<p>High of ' + data.day1.temperatureHigh + 'F (feels like ' + data.day1.temperatureHighFeelsLike + 'F)</p>';
                html += '<p>Low of ' + data.day1.temperatureLow + 'F (feels like ' + data.day1.temperatureLowFeelsLike + 'F)</p>';
                html += '<p>' + data.day1.precipitation + '</p></div>';
                html += '<div class="weatherblock"><h2>' + data.day2.title + '</h2>';
                html += '<p class="weatherheader">' + data.day2.summary + '</p>';
                html += '<p>High of ' + data.day2.temperatureHigh + 'F (feels like ' + data.day2.temperatureHighFeelsLike + 'F)</p>';
                html += '<p>Low of ' + data.day2.temperatureLow + 'F (feels like ' + data.day2.temperatureLowFeelsLike + 'F)</p>';
                html += '<p>' + data.day2.precipitation + '</p></div>';
                html += '<div class="weatherblock"><h2>' + data.day3.title + '</h2>';
                html += '<p class="weatherheader">' + data.day3.summary + '</p>';
                html += '<p>High of ' + data.day3.temperatureHigh + 'F (feels like ' + data.day3.temperatureHighFeelsLike + 'F)</p>';
                html += '<p>Low of ' + data.day3.temperatureLow + 'F (feels like ' + data.day3.temperatureLowFeelsLike + 'F)</p>';
                html += '<p>' + data.day3.precipitation + '</p></div></div>';

                $('div.weather').each(function(i, obj) {
                    obj.innerHTML = html;
                    obj.classList.add(data.icon);
                });
            }
        });
    }
}
$(document).ready(function () {
    checkWeather();
    setInterval(function () { checkWeather(); }, 5640000);
});

function checkWeather() {
    if ($('div.weather').length > 0) {
        $.ajax({
            url: 'https://jonker.web.illinois.edu/json/weather.json',
            type: 'GET',
            success: function (data) {
                var html = '<div class="text"><div class="weatherblock"><h2>Today</h2>';
                html += '<p class="weatherheader">Clear throughout the day.</p>';
                html += '<p>Clear throughout the day.</p>';
                html += '<p>Clear throughout the day.</p></div>';
                html += '<div class="weatherblock"><h2>Tomorrow</h2>';
                html += '<p class="weatherheader">Clear throughout the day.</p>';
                html += '<p>Clear throughout the day.</p>';
                html += '<p>Clear throughout the day.</p></div>';
                html += '<div class="weatherblock"><h2>Friday</h2>';
                html += '<p class="weatherheader">Clear throughout the day.</p>';
                html += '<p>Clear throughout the day.</p>';
                html += '<p>Clear throughout the day.</p></div></div>';

                $('div.weather').each(function(i, obj) {
                    obj.innerHTML = html;
                    obj.classList.add('clear-day');
                });
            }
        });
    }
}
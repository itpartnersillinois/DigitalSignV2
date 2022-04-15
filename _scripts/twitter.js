var twitterRotations = 0;
$(document).ready(function () {
    addTwitterSlides();
});

function addTwitterSlides() {
    $.ajax({
        url: twitterUrl,
        type: 'GET',
        success: function (data) {
            var html = "";
            for (var i = 0; i < data.length; i++) {
                html += `<div class="twitter-body"><div class="heading"><img src='${data[i].userImage}' class='user-image' alt=''>${data[i].username} <span class="screenname">@${data[i].handle}</span></div>`;
                html += `<p class="tweet">${data[i].text}</p>`;
                if (data[i].image != null && data[i].image != '') {
                    html += `<img src='${data[i].image}' class='tweet-image' alt=''>`;
                }
                html += '</div>';
            }
            $('.twitter-slider').append(html);

            $('.twitter-slider').slick({
                dots: false,
                arrows: false,
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 8000,
                speed: 500,
                cssEase: 'linear',
                vertical: true
            });

            twitterRotations = 0;
            $('.twitter-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
                if (currentSlide === 0 && twitterRotations >= 5) {
                    addTwitterSlides();
                }
                else if (currentSlide === 0) {
                    twitterRotations = twitterRotations + 1;
                }
            });
        }
    });
}

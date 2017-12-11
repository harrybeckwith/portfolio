$(function () {
    var data = {
        rss_url: 'https://medium.com/feed/@harrybeckwith'
    };
    $.get('https://api.rss2json.com/v1/api.json', data, function (response) {
        console.log(response);
        for (var i = 0; i <= response.items.length; i++) {
            var blog = response.items[i];
            var blogHTML = '\n        <div class=\'blog__post\'>\n                    <h5 class=\'blog__date\'>' + blog.pubDate + '</h5>\n                    <h3 class=\'blog__title\'>' + blog.title + '</h3>\n                                      <p class="blog__link"><a href="' + blog.link + '">read more</a></p>\n                </div>';
            $('.blog').append(blogHTML);
        }
    });
});
var gifURL = "https://api.giphy.com/v1/gifs/search?q=dogs&api_key=dc6zaTOxFJmzC";
$.get(gifURL)

    .done(function(data) {
        console.log("success!");
        console.dir(data);

        var myHTML = "";

        for (var i = 1; i < 10; i++) {
            console.log("src: " + data.data[i].embed_url);
            myHTML += '<div class="gifbox"><iframe class="gifs" src="' + data.data[i].embed_url + '" width="700" height="700" frameborder="0" class="giphy-embed" allowfullscreen></iframe></div>' + '<p><a href="">DOGS</a></p>';
        }
        $('body').append(myHTML);
    });

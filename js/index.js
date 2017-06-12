'use strict';

$(document).ready(function () {
    $("#new-quote-btn").click(function () {
        $.ajax({
                url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
                type: "GET",
                headers: {
                    "X-Mashape-Key": config.API_KEY,
                    "Accept": "application/json"
                }
            })
            // Code to run if the request succeeds (is done);
            // The response is passed to the function
            .done(function (json) {
                $(".quote-author, .quote-text").fadeOut(500, function () {
                    $(".quote-text").text(json.quote).fadeIn(500);
                    $(".quote-author").html('<i class="fa fa-pencil" aria-hidden="true">').fadeIn(500);
                    $(".quote-author").append(json.author).fadeIn(500);
                });
            })
            // Code to run if the request fails; the raw request and
            // status codes are passed to the function
            .fail(function (xhr, status, errorThrown) {
                alert("Sorry, there was a problem!");
                console.log("Error: " + errorThrown);
                console.log("Status: " + status);
                console.dir(xhr);
            });
    });
});
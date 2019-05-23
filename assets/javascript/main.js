$(document).ready(function () {

    //Variable of Topics.
    var topics = ["Jeep Wrangler", "Chevrolet", "Ford", "Nissan", "Honda"];

    function showButtons() {

        $("#buttons-view").empty();

        for (var i = 0; i < topics.length; i++) {

            var topicButton = $("<button>");
            topicButton.addClass("btn-btn-info");
            topicButton.attr("data-name", topics[i]);
            topicButton.text(topics[i]);
            $("#buttons-view").append(topicButton);

        }
        $("#gifs").empty();
    }
    // Add your vehicle
    $("#add-Vehicle").on("click", function (event) {

        event.preventDefault();

        var topic = $("#vehicle-input").val().trim();
        $("#vehicle-input").val("");
        topics.push(topic);

        showButtons();
    });
})

//User clicks buttons to generate gifs.
$("button").on("click", function () {

    var topic = $(this).data("vehicle");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=tvPQjKn3MnAfxOxO9lle4f3V9XjJSm8q&limit=10";

    //AJAX call function.
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {

        for (var i = 0; i < response.data.length; i++) {
            var vehicleDiv = $("<div>");

            //Rating setup
            var p = $("<p>").text("Rating: " + response.data[i].rating);
            var vehicleImage = $("<img>");

            //Image still
            vehicleImage.attr("data-still", response.data[i].images.fixed_height_still.url);
            vehicleImage.attr("data-state", "still");

            //Image animate
            vehicleImage.attr("src", response.data[i].images.fixed_height_still.url);
            vehicleImage.attr("data-animate", response.data[i].images.fixed_height.url);

            vehicleDiv.append(p);
            vehicleDiv.append(vehicleImage);
            $("#gifArea").prepend(vehicleDiv);

        }
    })
})


$(document).on("click", "img", moveGif);
//Create an IF statement for still.
function moveGif() {
    var state = $(this).attr('data-state');
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    }
    else if (state === "animate") {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }

}

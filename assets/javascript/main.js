$(document).ready(function() {

//Variable of Topics.

var topics = ["Jeep Wrangler", "Chevrolet", "Ford", "Nissan", "Honda"];

//User clicks buttons to generate gifs.

$("button").on("click", function(){

    var x = $(this).data("vehicle");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=dc6zaTOxFJmzC&limit=10";

//AJAX call function.
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response){

    for(var i = 0; i<response.data.length; i++) {
            var vehicleDiv = $("<div>");

//Rating setup
    var p = $("<p>").text("Rating: "+response.data[i].rating);
    var vehicleImage = $("<img>");
    var vehicleStill = 

//Image animate

    vehicleImage.attr("src", response.data[i].images.fixed_height.url);

//Image still

    vehicleStill.attr("src", response.data[i].images.fixed_height_still.url);

    vehicleDiv.prepend(p);
    vehicleDiv.prepend(vehicleImage);
    $("#gifArea").prepend(vehicleDiv); 
    console.log(response);
    }
})

//Create an IF statement for still.

$("<img>").on("click", function() {
    var state = $(this).attr("data-state");
      
//Check if the variable state is equal to still

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    }
    else if (state === "animate") {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }

    })
})

});

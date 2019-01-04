$(document).ready(function() {

//Variable of Topics.

var topics = ["Jeep Wrangler", "Chevrolet", "Ford", "Nissan", "Honda"];

// addVehicle button event

$("#add-Vehicle").on("click", function(){

// grabs the user vehicle input
    var topics = $("#vehicle-input").val().trim();
    
// that input is now added to the array
    topics.push(x);
    
// the makeButtons function is called, which makes buttons for vehicles.
	makeButtons();
})

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

//Image animate
    vehicleImage.attr("src", response.data[i].images.fixed_height.url);
    vehicleImage.attr("data-animate", response.data[i].images.fixed_height.url);

//Image still
    vehicleImage.attr("data-still", response.data[i].images.fixed_height_still.url);
    vehicleImage.attr("data-state", "still");


    vehicleDiv.append(p);
    vehicleDiv.append(vehicleImage);
    $("#gifArea").prepend(vehicleDiv); 

    }
    })
})
//Create an IF statement for still.

$("<img>").on("click", function() {

    var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
    }
        else if (state === "animate") {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
    }

    })

});
 
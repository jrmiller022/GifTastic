$(document).ready(function() {

//Variable of Topics.

var topics = ["Jeep Wrangler", "Chevrolet", "Ford", "Nissan", "Honda"];

//User clicks buttons to generate gifs.
$("button").on("click", function(){

    var topic = $(this).data("vehicle");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";

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

//Image still
    vehicleImage.attr("data-still", response.data[i].images.fixed_height_still.url);
    vehicleImage.attr("data-state", "still");
    
//Image animate
    vehicleImage.attr("src", response.data[i].images.fixed_height.url);
    vehicleImage.attr("data-animate", response.data[i].images.fixed_height.url);

    vehicleDiv.append(p);
    vehicleDiv.append(vehicleImage);
    $("#gifArea").prepend(vehicleDiv); 

    }
    })
})

// Add your vehicle
$("#add-vehicle").on("click", function(event){
        
    event.preventDefault();

    var topic = $("#vehicle-input").val().trim();
    $("#add-vehicle").val("");
    topics.push(topic);

    showButtons();
});

$(document).on("click", "#gifArea", pauseGif);

//Create an IF statement for still.
function pauseGif() {

        if (state === "still") {
            console.log(state);
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
    }
        else if (state === "animate") {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
    }

    }

});
 
//Variable of Topics.
var topics = ["Jeep Wrangler", "Chevrolet", "Ford", "Nissan", "Honda"];

//User clicks buttons to generate gifs.
$("button").on("click", function(){
    var x = $(this).data("vehicle");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    x + "&api_key=dc6zaTOxFJmzC&limit=10";

//AJAX call function.
    $.ajax({url:queryURL,method:"GET"})
        .done(function(response){
        for(var i = 0; i<response.data.length; i++){
            var vehicleDiv = $("<div>");
            var p = $("<p>").text("Rating: "+response.data[i].rating);
            var vehicleImage = $("<img>");
            vehicleImage.attr("src", response.data[i].images.fixed_height.url);
            vehicleDiv.prepend(p);
            vehicleDiv.prepend(vehicleImage);
            $("#gifArea").prepend(vehicleDiv); 
    }
})

//Create an IF statement for still.
$("<img>").on("click", function() {
    var state = $(this).attr("data-state");
    console.log(this);
      
//Check if the variable state is equal to still
    if (state === "still") {
      var urlForAnimatedImage = $(this).attr("data-animate");
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    }
    else if (state === "animate") {
        var urlForStillImage = $(this).attr("data-still");
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
    })
})


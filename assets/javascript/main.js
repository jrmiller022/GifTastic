//Variable of Topics.
var topics = ["Jeep Wrangler", "Chevrolet", "Ford", "Nissan", "Honda"];

//User clicks buttons to generate gifs.
$("button").on("click", function(){
    var x = $(this).data("vehical");
    console.log(x);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    x + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({url:queryURL,method:"GET"})
        .done(function(response){
        for(var i = 0; i<response.data.length; i++){
            var vehicalDiv = $("<div>");
            var p = $("<p>").text("Rating: "+response.data[i].rating);
            var vechalImage = $("<img>");
            vechalImage.attr("src", response.data[i].images.fixed_height.url);
            vehicalDiv.prepend(p);
            vehicalDiv.prepend(vechalImage);
            $("#gifArea").prepend(vehicalDiv); 
        }
    })
})
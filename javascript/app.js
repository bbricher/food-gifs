// create variables
var foods = ["apples", "bananas", "bacon", "roasted turkey", "beans", "avocado", "eggs", "bagels", "hamburger", "cheese", "kung pao", "peanuts", "grapes", "salad", "pizza", "sandwich", "meatball", "onions", "artichoke", "candy", "kiwi", "butter", "eggplant", "peach", "doughnut", "sausage", "waffles", "pancakes", "cereal", "parfeit", "yogurt", "chicken nuggets", "bagel bites", "egg rolls", "chow mein", "lo mein", "spring roll", "wings", "curly fries", "tacos", "carne asada"]
// create a function for rendering buttons
function renderButton () {
    $("#buttonDisplay").empty();
    for (var i = 0; i < foods.length; i++) {
        var button = $("<button>");
        button.addClass("food");
        button.attr("data-food", foods[i]);
        button.text(foods[i]);
        $("#buttonDisplay").append(button);
    }
};


// create an event listener for adding button
$("#add-food").on("click", function(event) {
    event.preventDefault();
    var food = $("#food-input").val().trim();
    foods.push(food);
    renderButton();
    console.log(food);
});
renderButton();
    // create a function for displaying gifs
$("button").on("click", function displayFoods() {
    var foodAction = $(this).attr("data-food");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + foodAction + "&api_key=VOwdS4DfDPmkK8HVFkduE2dmQit9cnH4&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(foodAction);
            console.log(queryURL);
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var pRating = $("<p>").text("Rating: " + rating);
                var foodImage = $("<img>");
                foodImage.attr("src", results[i].images.fixed_height.url);
                gifDiv.append(pRating);
                gifDiv.append(foodImage);
                $("#gifDisplay").prepend(gifDiv);
            }
        }
    })
});

// create an event listener for rendering gif
// call renderButtons



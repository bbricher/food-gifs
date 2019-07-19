// create variables
var foods = ["apples", "bananas", "bacon", "roasted turkey", "beans", "avocado", "eggs", "bagels", "hamburger", "cheese", "kung pao", "peanuts", "grapes", "salad", "pizza"]

// create a function for displaying gifs
$("#button").on("click", function() {

    


})
// create a function for rendering buttons
function renderButton () {
    $("#buttonDisplay").empty();
    for (var i = 0; i < foods.length; i++) {
        var button = $("<button>");
        button.addClass("food");
        button.attr("data-name", foods[i]);
        button.text(foods[i]);
        $("#buttonDisplay").append(button);
    }
}
// create an event listener for adding button
$("#add-food").on("click", function(event) {
    event.preventDefault();
    var food = $("#food-input").val().trim();
    foods.push(food);
    renderButton();
});
// create an event listener for rendering gif
// call renderButtons
renderButton();


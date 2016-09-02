// Backsies

function Pizza(parameterSizePie, parameterToppingOne, parameterToppingTwo) {
  this.sizePie = parameterSizePie;
  this.toppingOne = parameterToppingOne;
  this.toppingTwo = parameterToppingTwo;
}

Pizza.prototype.userOrder = function() {
  return "You ordered a " + this.sizePie + " with " + this.toppingOne + " and " +this.toppingTwo + ".";
}

Pizza.prototype.pizzaCost = function() {
  return "$12";
}


$(document).ready(function() {
  $("form#pizzaInput").submit(function(event) {
    event.preventDefault();

    var sizePie = $("input:radio[name=selectSize]:checked").val();
    var userToppingOne = $("input:radio[name=selTopOne]:checked").val();
    var userToppingTwo = $("input:radio[name=selTopTwo]:checked").val();
    var userPizza = new Pizza(sizePie, userToppingOne, userToppingTwo);
    var kylePizza = new Pizza("large", "pepperoni", "peppers");

// alerts are not smart enough to show objects. It will show you object [object]
// this was causing an error because newPizza isn't defined. Don't forget to look at errors in your console if things are not working.
// alert(newPizza);

debugger;


  // $("#outputPizza").append("Diane's Pizza is: " + dianePizza.sizePie + "<br>");
  // $("#outputPizza").append("Kyle's Pizza is:" + kylePizza.sizePie + "<br>");
  // $("#outputPizza").append("Kyle's first topping is:" + kylePizza.toppingOne + "<br>");
  // $("#outputPizza").append("Diane's first topping is:" + dianePizza.toppingOne + "<br>");
  $("#outputPizza").append("User's pizza size is:" + userPizza.sizePie + "<br>");
  $("#outputPizza").append("User's first topping is:" + userPizza.toppingOne + "<br>");
  $("#outputPizza").append("User's second topping is:" + userPizza.toppingTwo + "<br>");

  var outputOrder = userPizza.userOrder();
  $("#outputPizza").append(outputOrder);
  var finalCost = userPizza.pizzaCost();
  $("#outputPizza").append(finalCost);

  $("#outputPizza").append(userPizza.userOrder());



  });
});

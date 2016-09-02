// Backsies

function Pizza(parameterSizePie, parameterToppingOne, parameterToppingTwo) {
  this.sizePie = parameterSizePie;
  this.toppingOne = parameterToppingOne;
  this.toppingTwo = parameterToppingTwo;
}

Pizza.prototype.userOrder = function() {
  return "You ordered a " + this.sizePie + " with " + this.toppingOne + " and " +this.toppingTwo + ".";
}

Pizza.prototype.pizzaCost = function(sizePie, toppingOne, toppingTwo) {
  var priceTotal = 0;
  var toppingsLoop = ["pepperoni", "veggies", "olives", "sausage", "mushroom"];

  for (i = 0; i < toppingsLoop.length; i++) {
    if (toppingOne === toppingsLoop[i]) {
      priceTotal += 2; }
    if (toppingTwo === toppingsLoop[i]) {
      priceTotal += 2; }
  }

  if (sizePie === "medium") {
    priceTotal += 12
  } else if (sizePie === "large") {
    priceTotal += 14
  } else if (sizePie === "small") {
    priceTotal += 10
  } else {
    alert("Please, select a pizza size from above.");
  }
  return priceTotal;

  if (userPizza.toppingOne === undefined && userPizza.toppingTwo === undefined) {
    $("outputPizza").append("If no toppings are selected, the price below reflects that of a plain cheese pizza.");
  }
};

$(document).ready(function() {
  $("form#pizzaInput").submit(function(event) {
    event.preventDefault();

    var sizePie = $("input:radio[name=selectSize]:checked").val();
    var userToppingOne = $("input:radio[name=selTopOne]:checked").val();
    var userToppingTwo = $("input:radio[name=selTopTwo]:checked").val();
    var userPizza = new Pizza(sizePie, userToppingOne, userToppingTwo);
    var kylePizza = new Pizza("large", "pepperoni", "peppers");

  $("#outputPizza").text("");
  var outputOrder = userPizza.userOrder();
  $("#outputPizza").append(outputOrder);
  var finalCost = userPizza.pizzaCost(sizePie, userToppingOne, userToppingTwo);
  $("#outputPizza").append("Your total is $" + finalCost + ".");
  });
});

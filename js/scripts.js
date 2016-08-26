// Backsies

function Pizza(sizePie, toppingOne, toppingTwo) {
  this.sizePie = sizePie;
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
}

function Delivery(street, city, state) {
  this.street = userStreet;
  this.city = userCity;
  this.state = userState;
  this.addresses = [];
}

Pizza.prototype.userOrder = function() {
  return this.sizePie + this.toppingOne + this.toppingTwo;
}

Delivery.prototype.userAddress = function() {
  return this.userStreet + " " + this.userCity + ", " + this.userState;
}

$(document).ready(function() {
  $("form#pizzaInput").submit(function(event) {
    event.preventDefault();

  $("#addDelivery").click(function() {
    $("#outputAddress").append('<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street" placeholder="ex. 950 Ivy Drive">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city" placeholder="ex. New York">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state" placeholder="ex. NY">' +
                                 '</div>' +
                               '</div>');
  });

    var userSize = $("input:radio[name=selectSize]:checked").val();
    var userToppingOne = $("input:radio[name=selTopOne]:checked").val();
    var userToppingTwo = $("input:radio[name=selTopTwo]:checked").val();
    var userPizza = new Pizza(userSize, userToppingOne, userToppingTwo);

alert(newPizza);

debugger;

  $("#deliveryInput").each(function() {
    var userStreet = $(this).find("input#userStreet").val();
    var userCity = $(this).find("input#userCity").val();
    var userState = $(this).find("input#userState").val();
    var newDelivery = new Delivery(userStreet, userCity, userState);
  });

  $("#outputAddress").text(Delivery.newAddress);
  $("#outputPizza").text(Pizza.newPizza);
  alert(this.Pizza);
  alert(this.Delivery);
  alert(Pizza.newPizza);
  alert(Delivery.addresses);

  });
});

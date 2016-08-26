// Backsies

function Pizza(size, toppingOne, toppingTwo, delivery) {
  this.size = size;
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
  this.delivery = Delivery;
}

function Delivery(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}



$(document).ready(function() {
  $("form#new-locale").submit(function(event) {
    event.preventDefault();

  });
});

console.log('#pizzaInfo');

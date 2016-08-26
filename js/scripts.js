// Backsies

function Pizza(size, toppingOne, toppingTwo, toppingThree) {
  this.size = size;
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
  this.toppingThree = toppingThree;
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

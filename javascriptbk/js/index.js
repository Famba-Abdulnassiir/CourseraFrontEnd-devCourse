console.log("It works fine");
let today = new Date();
console.log(today);
document.write('<h3>' + today +'</h3>');

var total;
var price;
var quantity;

price = 5;
quantity = 20
total = price * quantity;

var ans = document.getElementById("cost");
ans.textContent = total + ' Ugx';

var hotel = { 
    name: 'Quay', 
    rooms: 40, 
    booked: 25,
    checkAvailability: function()
        { return this.rooms - this.booked; } 
    } ; 
var elName = document.getElementById('hotelName');
elName.textContent =hotel.name; 
var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability(); 

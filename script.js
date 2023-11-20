//Today's exercise: calculating the price of the train ticket
// js-train-ticket/repo folder
// The program will have to ask the user the number of kilometers he wants to travel and the age of the passenger.
// Based on this information you will have to calculate the total price of the trip, according to these rules:
// the ticket price is defined based on km (€0.21 per km)
// a 20% discount applies for minors
// a 40% discount applies for those over 65.
// The output of the final price must be put out in human form (with a maximum of two decimals, to indicate cents on the price).
// This will require a little research.

let age = prompt ("How old are you?");
age = parseInt(age);
console.log("User's age is:" + age);

let kilometers = prompt ("How many kilometers are you travelling?");
kilometers = parseFloat(kilometers);
console.log ("The journey's length is:" + kilometers);


const ticketCalculator = (kilometers, age) => {
    let ticketPrice = kilometers * 0.21


    if (age < 18){
      const discountMinors = (ticketPrice / 100) * 0.2;
      ticketPrice = ticketPrice - discountMinors;
    }

    if (age > 65){
        const discountElder = (ticketPrice/100)*0.4
        ticketPrice = ticketPrice - discountElder;
    }

    return ticketPrice.toFixed(2);
}

console.log("Your final ticket price is:" + ticketCalculator(kilometers, age));

const finalTicketPrice = ticketCalculator(kilometers, age);

let priceElement = document.getElementById("ticketprice");
priceElement.textContent = "Hello, this is your final ticket price: $" + finalTicketPrice;



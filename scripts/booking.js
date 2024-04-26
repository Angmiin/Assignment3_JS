/********* create variables *********/
var perDayRate = 35;
var day_counter = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
var day_buttons = document.querySelectorAll('.day-selector li');
day_buttons.forEach(function(day_button) {
    day_button.addEventListener('click', function() {
        if (!day_button.classList.contains('clicked')) {
            day_button.classList.add('clicked');
            day_counter++;
        }
        recalculateCost();
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
var clear_button = document.getElementById('clear-button');
clear_button.addEventListener('click', function() {
    day_buttons.forEach(function(day_button) {
        day_button.classList.remove('clicked');
    });
    day_counter = 0;
    recalculateCost();
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
var half_day_button = document.getElementById('half');
half_day_button.addEventListener('click', function() {
    half_day_button.classList.add('clicked');
    full_day_button.classList.remove('clicked');
    perDayRate = 20;
    recalculateCost();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
var full_day_button = document.getElementById('full');
full_day_button.addEventListener('click', function() {
    full_day_button.classList.add('clicked');
    half_day_button.classList.remove('clicked');
    perDayRate = 35;
    recalculateCost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
var calculatedCost = document.getElementById('calculated-cost');
function recalculateCost() {
    var total_cost = perDayRate * day_counter;
    calculatedCost.textContent = total_cost;
}

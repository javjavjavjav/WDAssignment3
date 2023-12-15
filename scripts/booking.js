document.addEventListener('DOMContentLoaded', function() {
    let dailyRate = 35;
    let selectedDays = new Set();

    const dayButtons = document.querySelectorAll('.flex day-selector li');
    const clearButton = document.getElementById('clear-button');
    const halfDayButton = document.getElementById('half');
    const fullDayButton = document.getElementById('full');
    const calculatedCostElement = document.getElementById('calculated-cost');

    // Update total cost calc
    function updateTotalCost() {
        const totalCost = dailyRate * selectedDays.size;
        calculatedCostElement.innerHTML = totalCost;
    }

    // Colour change for days of the week


    // Clear days
    clearButton.addEventListener('click', function() {
        dayButtons.forEach(dayButtons, function(button) {
            button.classList.remove('clicked');
        selectedDays.clear();
        updateTotalCost();
    });

    // Change rate to half-day
    halfDayButton.addEventListener('click', function() {
        dailyRate = 20;
        this.classList.add('clicked');
        fullDayButton.classList.remove('clicked');
        updateTotalCost();
    });

    // Change rate to full-day
    fullDayButton.addEventListener('click', function() {
        dailyRate = 35;
        this.classList.add('clicked');
        halfDayButton.classList.remove('clicked');
        updateTotalCost();
    });
    });
});
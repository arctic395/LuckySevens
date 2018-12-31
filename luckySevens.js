function play() {
    // Get user input
    var startingBet = Number(document.forms["luckySevensForm"]["startingBet"].value);

    // Validate user input and display error message
    if (startingBet <= 0) {
        alert("Sorry, the starting bet must be greater than 0.");

        // Don't continue playing the game
        return true;
    }

    // Continue playing the game
    var currentCash = startingBet;
    var numberOfRolls = 0;
    var highestRolls = 0;
    var highestHeld = 0;

    // Keep playing while balance is positive
    while(currentCash > 0) {
        // Roll the 2 dice
        var dice1 = rollDice();
        var dice2 = rollDice();

        // Increase roll counter
        numberOfRolls++;

        // Calculate wins and losses
        if(dice1 + dice2 == 7) {
            // Add $4 to current balance
            currentCash += 4;
        }
        else {
            // Deduct $1 from current balance
            currentCash -= 1;
        }

        // Track highest balance and rolls at that time
        if(currentCash > highestHeld) {
            highestHeld = currentCash;
            highestRolls = numberOfRolls;
        }
    }

    // Update results
    document.getElementById('startingBet').innerText = startingBet.toFixed(2);
    document.getElementById('numberOfRolls').innerText = numberOfRolls;
    document.getElementById('highestHeld').innerText = highestHeld.toFixed(2);
    document.getElementById('highestRolls').innerText = highestRolls;


    // Display results
    document.getElementById('luckySevensResult').style.display = 'block';

    // Prevent page from refreshing
    return false;
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

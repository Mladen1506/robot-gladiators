// var playerName = 'Maka Kaka";

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAtack = 10;
var playerMoney = 10;

console.log(playerName, " Atack " + playerAtack, " Health " + playerHealth);

var enemyNames = ["Roki", "Amy Android", "Boki Glavanjoti"];
var enemyHealth = 50;
var enemyAttack = 12;
//console.log(enemyNames);
//console.log(enemyNames[0]);
//console.log(enemyNames[1]);
//console.log(enemyNames[2]);
//console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index")
}

// fight function
var fight = function(enemyName) {
    // Alert the players that they starting the round
    window.alert("Welcome to Robot Gladiators!")

    // Ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to proceed.');

    // if player choose to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemy's health by subtracting the amount set in the playerAtack variable
        enemyHealth = enemyHealth - playerAtack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining"
    );

        //check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left." );
    }
        // remove players's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
            console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
        // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
        //if player chooses to skip
    }else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit the game?");

        //if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this game. Goodbye!")
            // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
        }
        // if no (false), ask question again by running fight() again
    else {
        fight();
    }
        //if player did not choose 1 or 2 in prompt
    } else {
        window.alert("You need to pick a valid option. Try again!");
    
    }
};
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
fight();


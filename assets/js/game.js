// var playerName = 'Maka Kaka";

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAtack = 10;

console.log(playerName, " Atack " + playerAtack, " Health " + playerHealth);

var enemyName = "Roki";
var enemyHealth = 50;
var enemyAtack = 12;

// fight function
var fight = function() {
    // Alert the players that they starting the round
    window.alert("Welcome to Robot Gladiators!")

    // Ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to proceed.');

    // if player choose to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemy's health by subtracting the amount set in the playerAtack variable
        enemyHealth = enemyHealth - playerAtack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining");
        
    }
}
fight();


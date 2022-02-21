var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//console.log(playerMoney);

// You can also log multiple values at once like this
//console.log(playerName, playerHealth);

var enemyNames = ["DingBot", "Flobot", "Carl"];
var enemyHealth = 50;
var enemyAttack = 12;

//console.log(enemyNames);
var fight = function(enemyName) {

    while(enemyHealth > 0){
// Alert players that they are starting the round
    //window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  
// if player choses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {

// remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
        
// check enemy's health
                if (enemyHealth <= 0) {
                    window.alert(enemyName + " has died!");
                } else {
                    window.alert(enemyName + " still has " + enemyHealth + " health left.");
                }
        
// remove player's health by subtracting the amount set in the enemyAttack variable
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
 // if player chooses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP"){

// confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to skip this fight? " + playerName + " will be fined $2 if they choose to skip!");
                
// if yes, leave the fight
            if(confirmSkip){
                window.alert(playerName + " has decided to skip the fight!");

                // subtract money for skipping
                playerMoney = playerMoney - 2;

// alert player of remaining money
            window.alert(playerName + " has " + playerMoney + " remaining.");

            } else {
                window.alert("You need to choose a valid option. Try again!");
            }
        }
    }
};


var startGame = function() {
// reset player's stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++){
    
        if(playerHealth > 0){

            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyName = enemyNames[i];

            enemyHealth = 50;

            fight(pickedEnemyName);

            if(playerHealth > 0 && i < enemyNames.length - 1){

//confirm player wants to enter the shop prior to next round

                var confirmShop = window.confirm("Do you wish to enter the shop before your next round?");
                if(confirmShop){
                    shop();
                }
              
            }

        }
        // else{
        // //     window.alert("You have lost your robot in battle! Game Over!");
        // // }
    
    }
// end of loop, player is either dead or has killed all enemy robots.
    endGame();
};

var endGame = function(){
    
// if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } 
    else {
        window.alert("You've lost your robot in battle.");
    }
// ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
// restart the game
        startGame();
    } 
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function() {
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");


switch(shopOptionPrompt) {

    case "REFILL":
    case "refill":
        if(playerMoney >= 7){
            window.alert("Refilling player's health by 20 for $7 dollars");
// increase health and decrease money
            playerHealth = playerMoney + 20;
            playerMoney = playerMoney - 7;
        }else{
            window.alert("Insufficient funds for health refill.")
        }
    break;

    case "UPGRADE":
    case "upgrade":
        if(playerMoney >= 7){
        window.alert("Upgrade player's attack by 6 for $7 dollars");
// increase attack and decrease money
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
        }else{
            window.alert("Insufficient funds for attack upgrade.")
        }
    break;

    case "LEAVE":
    case "leave": 
        window.alert("Leaving the shop.");
// do nothing so the function will end.
    break;

    default:
        window.alert("Entry invalid. Try again.")
// call shop again to give player the option
        shop();
    break; 
  }
};
startGame();






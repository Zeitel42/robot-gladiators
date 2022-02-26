
var fight = function(enemy) {

    while(enemy.health > 0){
// Alert players that they are starting the round
    //window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  
// if player choses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {

// generate random damage value based on player's attack power
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);  

// remove enemy's health by subtracting the amount set in the playerInfo.attack variable
            enemy.health = Math.max(0, enemy.health - damage);
            console.log(
                playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
            );
        
// check enemy's health
                if (enemy.health <= 0) {
                    window.alert(enemy.name + " has died!");
                    endGame();
                } else {
                    window.alert(enemy.name + " still has " + enemy.health + " health left.");
                }
// generate random damage value based on enemy's attack power
                var damage = randomNumber(enemy.attack - 3, enemy.attack);   

// remove player's health by subtracting the amount set in the enemy.attack variable
                playerInfo.health = Math.max(0, playerInfo.health - damage);
                console.log(
                    enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
                );
        
// check player's health
                if (playerInfo.health <= 0) {
                    window.alert(playerInfo.name + " has died!");
                    endGame();
                } else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
                }

 // if player chooses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP"){

// confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to skip this fight? " + playerInfo.name + " will be fined $2 if they choose to skip!");
                
// if yes, leave the fight
            if(confirmSkip){
                window.alert(playerInfo.name + " has decided to skip the fight!");

                // subtract money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);

// alert player of remaining money
            window.alert(playerInfo.name + " has " + playerInfo.money + " remaining.");

            } else {
                window.alert("You need to choose a valid option. Try again!");
            }
        }
    }
};

// random number function
var randomNumber = function(min, max){
    var value = Math.floor(Math.random() * max - min + 1) + min;

    return value;
}

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
        console.log(this);
      }, // comma!
      refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
          } 
          else {
            window.alert("You don't have enough money!");
          }
      }, // comma!
      upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
          } 
          else {
            window.alert("You don't have enough money!");
          }
      }
  };
//console.log(playerMoney);

// You can also log multiple values at once like this
//console.log(playerInfo.name, playerInfo.health);

var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10, 14)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10, 14)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10, 14)
    }
  ];

var startGame = function() {
 // reset player stats

 playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++){
    
        if(playerInfo.health > 0){

            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyObj = enemyInfo[i];

            pickedEnemyObj.health = randomNumber(40, 60);

            fight(pickedEnemyObj);

            if(playerInfo.health > 0 && i < enemyInfo.length - 1){

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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
    playerInfo.refillHealth();
    break;

    case "UPGRADE":
    case "upgrade":
    playerInfo.upgradeAttack();
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






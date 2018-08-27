var inquirer = require("inquirer");
var hero;
var weapons = {
    bearHands: {},
    machete: {}, shotgun: {}, pistol: {}, machineGun: {}, sniper: {}, rpg: {}
}
var zombies = {
    zombie1: {},
    zombie2: {}, zombie3: {}, zombie4: {}, zombie5: {}
}
var livingZombies;

function initGame() {
    hero = {
        health: 100,
        agility: 40
    }

    weapons.bearHands = {
        //number of zombies affected
        reach: 1,
        //Range of possible damage
        attack: [5, 5],
        //Chance of taking damge back (%)
        risk: 95,
        //chance of landing damage (%)
        reliability: 90,
        //"health" of gun
        uses: 1000000000000000
    }

    weapons.machete = {
        //number of zombies affected
        reach: 1,
        //Range of possible damage
        attack: [40, 60],
        //Chance of taking damge back (%)
        risk: 80,
        //chance of landing damage (%)
        reliability: 90,
        //"health" of gun
        uses: 0
    }

    weapons.shotgun = {
        //number of zombies affected
        reach: 2,
        //Range of possible damage
        attack: [30, 50],
        //Chance of taking damge back (%)
        risk: 65,
        reliability: 80,
        //"health" of gun
        uses: 5
    }

    weapons.pistol = {
        //number of zombies affected
        reach: 2,
        //Range of possible damage
        attack: [25, 40],
        //Chance of taking damge back (%)
        risk: 50,
        reliability: 75,
        //"health" of gun
        uses: 5
    }

    weapons.machineGun = {
        //number of zombies affected
        reach: 3,
        //Range of possible damage
        attack: [15, 30],
        //Chance of taking damge back (%)
        risk: 30,
        reliability: 65,
        //"health" of gun
        uses: 5
    }

    weapons.sniper = {
        //number of zombies affected
        reach: 1,
        //Range of possible damage
        attack: [40, 60],
        //Chance of taking damge back (%)
        risk: 50,
        reliability: 10,
        //"health" of gun
        uses: 5
    }

    weapons.rpg = {
        //number of zombies affected
        reach: 4,
        //Range of possible damage
        attack: [40, 60],
        //Chance of taking damge back (%)
        risk: 95,
        reliability: 40,
        //"health" of gun
        uses: 5
    }

    zombies.zombie1 = {
        health: 100,
        attack: [0, 5],
        //Chance of dodging (%)
        agility: 15
    }

    zombies.zombie2 = {
        health: 90,
        attack: [1, 6],
        //Chance of dodging (%)
        agility: 18
    }

    zombies.zombie3 = {
        health: 85,
        attack: [2, 4],
        //Chance of dodging (%)
        agility: 20
    }


    zombies.zombie4 = {
        health: 80,
        attack: [2, 5],
        //Chance of dodging (%)
        agility: 22
    }


    zombies.zombie5 = {
        health: 60,
        attack: [7, 10],
        //Chance of dodging (%)
        agility: 10
    }

    weaponChoice();
}

function weaponChoice() {
    inquirer.prompt([{
        type: "list",
        message: "Choose a weapon",
        choices: Object.keys(weapons),
        name: "weapon",

    }]).then(function (response) {
        var weapon = weapons[response.weapon];
        if (weapon.uses > 0) {
            weapon.uses--;
            gunDamage = randRange(weapon.attack[0], weapon.attack[1]);
            gunHit = percentage() <= weapon.reliability;

            checkLivingDead();
            inquirer.prompt([{
                type: "list",
                message: "Pick a zombie to attack",
                choices: livingZombies,
                name: "zombie"
            }]).then(function (response) {
                var zombie = zombies[response.zombie];
                if (gunHit) {
                    if (percentage() >= zombie.agility) {
                        zombie.health -= gunDamage;
                        console.log("You hit the zombie! They took " + gunDamage + " damage.");
                        console.log("The zombies health is now at " + zombie.health);
                    }

                    livingZombies.splice(livingZombies.indexOf(response.zombie), 1);
                    for (var i = weapon.reach - 1; i > 0; i--) {
                        //logic for reach here...
                        if (livingZombies.length > 0) {
                            var nextHit = livingZombies.splice(randRange(0, livingZombies.length - 1), 1);
                            zombies[nextHit].health -= gunDamage;
                            console.log("You hit another zombie! They also took " + gunDamage + " damage.");
                            console.log("The zombies health is now at " + zombies[nextHit].health);
                        }
                    }
                }

                if (percentage() <= weapon.risk) {
                    checkLivingDead();
                    for (var i = 0; i < livingZombies.length; i++) {
                        var zombieAttack = randRange(zombies[livingZombies[i]].attack[0], zombies[livingZombies[i]].attack[1]);
                        hero.health -= zombieAttack;
                        console.log("You got hit by " + livingZombies[i] + " and took " + zombieAttack + " damage");
                    }
                    console.log("Your health is now at " + hero.health);
                }
                checkLivingDead();
                if (hero.health <= 0) {
                    console.log("Game Over, The Zombies got you!");
                }
                else if(livingZombies.length === 0){
                    console.log("Game Over, You got all the zombies!");
                }
                else {
                    weaponChoice();
                }

            })
        }
        else {
            console.log("That weapon is out of uses!");
            weaponChoice();
        }
    })
}


function checkLivingDead() {
    var allZombies = Object.keys(zombies);
    livingZombies = [];
    for (var i = 0; i < allZombies.length; i++) {
        if (zombies[allZombies[i]].health > 0) {
            livingZombies.push(allZombies[i]);
        }
    }
}

function percentage() {
    return Math.floor(Math.random() * 100) + 1;
}

function randRange(num1, num2) {
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}
initGame();
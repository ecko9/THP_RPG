

class Game {
  constructor(turnLeft = 10, state = "In Progress") {
    this.turnLeft = turnLeft;
    this.state = state;
    this.createPlayers();
    this.launchGame();
  }

  launchGame() {
    this.welcomeRules();

    for (this.turnLeft; this.turnLeft > 0; this.turnLeft--) {

      console.log(`Tour numéro: ${11 - this.turnLeft}`);
      console.log("Appuyez sur 'ENTER' pour commencer le tour");
      let input = prompt();
      new Turn();

      if (this.turnLeft === 1) {
        console.log("Partie Terminée");
        this.scoreBoard();
        this.state = "End"
      }
    }
  }

  welcomeRules() {
    console.log("BIENVENUE + REGLES DU JEU");
  }

  chooseClass() {

    console.log("Veuillez choisir une classe: (DEFAULT: [Assassin])");
    console.log("[1]: Assassin");
    console.log("[2]: Berzerker");
    console.log("[3]: Fighter");
    console.log("[4]: Monk");
    console.log("[5]: Paladin");
    let input = prompt();
    input = parseInt(input, 10);
    console.log("Veuillez choisir un nom:");
    let input2 = prompt();

    if (input === 1) {
      new Assassin(input2, false);
    } else if (input === 2) {
      new Berzerker(input2, false);
    } else if (input === 3) {
      new Fighter(input2, false);
    } else if (input === 4) {
      new Monk(input2, false);
    } else if (input === 5) {
      new Paladin(input2, false);
    } else {
      new Assassin(input2, false);
    }

  }

  createPlayers() {
    Character.listOfDeadPlayers = [];
    Character.listOfPlayers = [];
    this.chooseClass();
    new Assassin("Assassin");
    new Berzerker("Berzerker");
    new Fighter("Fighter");
    new Monk("Monk");
    new Paladin("Paladin");
  }

  watchStats() {
    console.table(Character.listOfPlayers);
  }

  scoreBoard() {
    Character.listOfPlayers.forEach(player => {
      console.log(`${player.name} termine la partie avec ${player.hp} !`);
      player.status = "winner";
    });
  }
}

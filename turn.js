
class Turn {
  constructor() {
    const playerOrder = this.orderPlayerTurn(Character.listOfPlayers);
    this.playTurn(playerOrder);
  }

  orderPlayerTurn(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  turnStatus() {
    console.log(`< JOUEURS EN VIE >`);
    Character.listOfPlayers.forEach(player => {
      console.log(`${player.name} (joueur numéro ${player.number}): HP [${player.hp}] | MANA [${player.mana}]`);
    });

    if (Character.listOfDeadPlayers[0]) {
      console.log('');
      console.log(`< JOUEURS MORTS >`);
      Character.listOfDeadPlayers.forEach(player => {
        console.log(`${player.name} (joueur numéro ${player.number}): HP [${player.hp}] | MANA [${player.mana}]`);
      });
    }
  }

  chooseDamage(player, target) {

    if (player instanceof Assassin) {
      player.chooseDmgAss(target);
    }

    if (player instanceof Berzerker) {
      player.chooseDmgBrz(target);
    }

    if (player instanceof Fighter) {
      player.chooseDmgFgt(target);
    }

    if (player instanceof Paladin) {
      player.chooseDmgPal(target);
    }

    if (player instanceof Monk) {
      player.chooseDmgMnk(target);
    }
  }

  deadMan(player, index, killer) {
    console.log(`${player.name} (joueur numéro ${player.number}) à été éliminé !`);
    player.status = "looser";
    Character.listOfDeadPlayers.push(player);
    Character.listOfPlayers.splice(index, 1);

    killer.mana += 20;
    console.log(`${killer.name} (joueur numéro ${killer.number}) gagne [20] MANA !`);
  }

  takeInputTarget(playerOrder) {
    let i = 0;
    while (i < 1) {
      let inputRaw = prompt();
      inputRaw = parseInt(inputRaw, 10);

      if (isNaN(inputRaw) || inputRaw < 1 || inputRaw > playerOrder.length || !playerOrder.find(element => element.number === inputRaw)) {
        console.log(`mauvais choix (${inputRaw})`);
      } else {
        i = 1;
        return inputRaw;
      }
    }
  }

  playTurn(playerOrder) {
    playerOrder.forEach(player => {

      if (player.hp > 0) {

        let input;

        this.turnStatus();
        console.log('');

        if (player.bot === false) {
          console.log(`Joueur numéro ${player.number}, tappez le numéro du joueur à attaquer...`);
          input = this.takeInputTarget(playerOrder);
        } else {
          input = player.chooseBotTar();
        }

        console.log(`Vous avez choisi le joueur numéro ${input}`);
        let target = playerOrder.find(element => element.number === input);

        this.chooseDamage(player, target);

        if (target.hp <= 0) {
          let targetIndex = playerOrder.findIndex(element => element === target);
          this.deadMan(target, targetIndex, player);
        }
      }
    });
  }
}


class Character {

  constructor(name, bot = true, hp, dmg, mana) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.bot = bot;
    this.status = "playing";
    Character.listOfPlayers.push(this);
    this.number = Character.listOfPlayers.length;
  }

  dealDamage(target) {
    console.log("");
    console.log(`${this.name} inflige ${this.dmg} dégats avec [Attaque]`);
    target.takeDamage(this.dmg);
    console.log("");
  }

  takeDamage(dmg) {
    if (this instanceof Fighter) {
      this.takeDmgFgt(dmg);
    }
    else if (this instanceof Assassin) {
      this.takeDmgAss(dmg)
    } else {
      console.log(`${this.name} recoit ${dmg} dégats`);
      this.hp -= dmg;
    }
  }

  chooseBotTar() {
    let targetArray = [];
    Character.listOfPlayers.forEach(player => {
      if (this.number !== player.number) {
        if (this.dmg >= player.hp) {
          return player.number;
        } else if (this.specialDmg && this.specialDmg >= player.hp && this.mana >= this.specialMana) {
          return player.number;
        } else {
          targetArray.push(player);
        }
      }
    });
    return targetArray[Math.floor(Math.random() * targetArray.length)].number;
  }

  chooseBotAtq(target) {

    if (this.dmg >= target.hp) {
      return 0;
    } else if (this.specialDmg && this.specialDmg >= target.hp && this.mana >= this.specialMana) {
      return 1;
    } else if (this.mana >= this.specialMana) {
      return 1;
    } else {
      return 0;
    }

  }

}
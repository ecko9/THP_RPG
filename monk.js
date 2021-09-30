class Monk extends Character {
  constructor(name, bot, hp = 80, dmg = 2, mana = 200, specialMana = 25) {
    super(name, bot, hp, dmg, mana);
    this.specialMana = specialMana;
  }

  healAtq() {
    console.log("");
    console.log(`${this.name} se soigne de [10] HP avec la capacité [Heal]`);
    this.mana -= this.specialMana;
    this.hp += 10;
    console.log("");
  }

  chooseDmgMnk(target) {
    console.log(`Votre [Attaque Spéciale]: [Heal] MANA COST [${this.specialMana}]: `);
    console.log(`<>> Vous soigne de [10] HP !`);
    console.log("");

    let inputAtq;

    if (this.bot === false) {
      inputAtq = prompt();
      inputAtq = parseInt(inputAtq, 10);
    } else {
      inputAtq = this.chooseBotAtq(target);
    }

    if (inputAtq === 1 && (this.mana >= this.specialMana)) {
      console.log("[Attaque Spéciale]");
      this.healAtq();
    } else {
      this.dealDamage(target);
    }
  }
}
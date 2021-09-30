class Fighter extends Character {
  constructor(name, bot, hp = 120, dmg = 4, mana = 40, specialDmg = 5, darkVision = false, specialMana = 20) {
    super(name, bot, hp, dmg, mana);
    this.specialDmg = specialDmg;
    this.darkVision = darkVision;
    this.specialMana = specialMana;
  }

  darkVisionAtq(target) {
    console.log("");
    console.log(`${this.name} inflige ${this.specialDmg} dégats avec la capacité [DarkVision]`);
    this.darkVision = true;
    console.log(`${this.name} bénéficie d'une réduction de dégats de [2] jusqu'à son prochain tour avec la capacité [DarkVision]`);
    this.mana -= this.specialMana;
    target.takeDamage(this.specialDmg);
    console.log("");
  }

  chooseDmgFgt(target) {
    console.log(`Votre [Attaque Spéciale]: [DarkVision] MANA COST [${this.specialMana}]: `);
    console.log(`<>> Inflige ${this.specialDmg} Points de Dégats. Vous bénéficiez d'une réduction de dégats de [2] jusqu'à votre prochain tour!`);
    console.log("");
    if (this.darkVision === true) {
      this.darkVision = false;
    }
    let inputAtq;

    if (this.bot === false) {
      inputAtq = prompt();
      inputAtq = parseInt(inputAtq, 10);
    } else {
      inputAtq = this.chooseBotAtq(target);
    }

    if (inputAtq === 1 && (this.mana >= this.specialMana)) {
      console.log("[Attaque Spéciale]");
      this.darkVisionAtq(target);
    } else {
      this.dealDamage(target);
    }
  }

  takeDmgFgt(dmg) {
    if (this.darkVision === true) {
      console.log("[DarkVision] vous fait bénéficier d'un réduction de [2] aux dégats que vous auriez du recevoir !");
      console.log(`${this.name} recoit ${dmg - 2} dégats`);
      this.hp -= (dmg - 2);
    } else {
      console.log(`${this.name} recoit ${dmg} dégats`);
      this.hp -= dmg;
    }
  }

}
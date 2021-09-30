class Berzerker extends Character {
  constructor(name, bot, hp = 80, dmg = 4, mana = 0, rage = 0) {
    super(name, bot, hp, dmg, mana);
    this.rage = rage;
  }

  rageAtq(target) {
    this.rage += 1;
    this.hp -= 2;
    this.dmg += this.rage;
    console.log("");
    console.log(`${this.name} s'enrage et inflige ${this.dmg} + ${this.rage} dégats avec la capacité [Rage]`);
    console.log(`la capacité [Rage] s'améliore et confère maintenant +${this.rage} points de dégats supplémentaires à chaque [Attaque]`);
    target.takeDamage(this.dmg + this.rage);
    console.log("");
  }

  chooseDmgBrz(target) {
    console.log(`Votre [Attaque Spéciale]: [Rage] MANA COST [0]: `);
    console.log(`<>> Augmente les dégats de votre [Attaque] de base de 1 à chaque utilisation mais vous fait perdre [2] HP`);
    console.log("");

    let inputAtq;

    if (this.bot === false) {
      inputAtq = prompt();
      inputAtq = parseInt(inputAtq, 10);
    } else {
      inputAtq = this.chooseBotAtq(target);
    }

    if (inputAtq === 1) {
      console.log("[Attaque Spéciale]")
      this.rageAtq(target);
    } else {
      this.dealDamage(target);
    }
  }
}
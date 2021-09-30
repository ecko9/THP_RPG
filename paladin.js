class Paladin extends Character {
  constructor(name, bot, hp = 160, dmg = 3, mana = 160, specialDmg = 4, specialMana = 40) {
    super(name, bot, hp, dmg, mana);
    this.specialDmg = specialDmg;
    this.specialMana = specialMana;
  }

  healingLightingAtq(target) {
    console.log("");
    console.log(`${this.name} inflige ${this.specialDmg} dégats avec la capacité [HealingLighting]`);
    console.log(`${this.name} se soigne de [5] HP avec la capacité [HealingLighting]`);
    this.mana -= this.specialMana;
    this.hp += 5;
    target.takeDamage(this.specialDmg);
    console.log("");
  }

  chooseDmgPal(target) {
    console.log(`Votre [Attaque Spéciale]: [HealingLighting] MANA COST [${this.specialMana}]: `);
    console.log(`<>> Inflige ${this.specialDmg} Points de Dégats. Vous soigne de [5] HP !`);
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
      this.healingLightingAtq(target);
    } else {
      this.dealDamage(target);
    }
  }
}
class Assassin extends Character {
  constructor(name, bot, hp = 60, dmg = 6, mana = 20, specialDmg = 7, shadowHit = false, specialMana = 20) {
    super(name, bot, hp, dmg, mana);
    this.specialDmg = specialDmg;
    this.shadowHit = shadowHit;
    this.specialMana = specialMana;
  }

  shadowHitAtq(target) {
    console.log("");
    console.log(`${this.name} inflige ${this.specialDmg} dégats avec la capacité [ShadowHit]`);
    this.shadowHit = true;
    console.log(`${this.name} est insensible au prochain tour avec la capacité [ShadowHit]`);
    this.mana -= this.specialMana;
    target.takeDamage(this.specialDmg);
    console.log("");
  }

  chooseDmgAss(target) {



    if (this.shadowHit === true) {
      this.shadowHit = false;
    }
    let inputAtq;

    if (this.bot === false) {
      console.log(`${this.name} (joueur numéro ${this.number}): HP [${this.hp}] | MANA [${this.mana}], veuillez choisir une attaque:`);
      console.log(``);
      console.log(`Tappez 'ENTER' pour lancer une [Attaque] de base, ou tappez "1" pour lancer une [Attaque Spéciale]`);
      console.log(``);
      console.log(`Votre [Attaque Spéciale]: [ShadowHit] MANA COST [${this.specialMana}]: `);
      console.log(`<>> Inflige ${this.specialDmg} Points de Dégats. Vous êtes insensible aux Dégats jusqu'à votre prochain tour!`);
      console.log("");
      inputAtq = prompt();
      inputAtq = parseInt(inputAtq, 10);
    } else {
      inputAtq = this.chooseBotAtq(target);
    }

    if (inputAtq === 1 && this.mana >= this.specialMana) {
      console.log("[Attaque Spéciale]")
      this.shadowHitAtq(target);
    } else {
      this.dealDamage(target);
    }
  }

  takeDmgAss(dmg) {
    if (this.shadowHit === true) {
      console.log("[ShadowHit] vous rend insensible aux dégats que vous auriez du recevoir !");
    } else {
      console.log(`${this.name} recoit ${dmg} dégats`);
      this.hp -= dmg;
    }
  }

}
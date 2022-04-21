export const abilityModifier = (ability) => {
  if (ability < 3) {
    throw new Error('Ability scores must be at least 3');
  } else if (ability > 18) {
    throw new Error('Ability scores can be at most 18');
  }
  return Math.floor((ability - 10) / 2);
};

export class Character {
  static rollAbility() {
    let sum = 0;
    let min = Infinity;
    for (let i = 0; i < 4; i++) {
      let roll = Math.floor(Math.random() * 6) + 1;
      if (roll < min) {
        min = roll;
      }
      sum += roll;
    }
    return sum - min;
  }

  constructor() {
    this._strength = Character.rollAbility();
    this._dexterity = Character.rollAbility();
    this._constitution = Character.rollAbility();
    this._intelligence = Character.rollAbility();
    this._wisdom = Character.rollAbility();
    this._charisma = Character.rollAbility();
    this._hitpoints = Math.round(10 + abilityModifier(this.constitution));
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get constitution() {
    return this._constitution;
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
    return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  get hitpoints() {
    return this._hitpoints;
  }
}
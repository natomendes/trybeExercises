const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => (
  Math.floor(Math.random() * (dragon.strength - 15) + 15)
);

const warriorDamage = () => (
  Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - 15) + 15)
);

const mageDamage = () => (
  mage.mana < 15
    ? {
      damage: 'Não possui mana suficiente',
      manaComsumption: 0,
    }
    : {
      damage: Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence),
      manaComsumption: 15,
    }
)

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (func) => {
    const turnDamage = func();
    dragon.healthPoints -= turnDamage;
    warrior.damage = turnDamage;
  },
  mageTurn: (func) => {
    const turnDamage = func();
    if (isNaN(turnDamage.damage)) {
      console.log(turnDamage.damage)
    } else {
      dragon.healthPoints -= turnDamage.damage;
      mage.mana -= turnDamage.manaComsumption;
      mage.damage = turnDamage.damage;
    }
  },
  dragonTurn: (func) => {
    const turnDamage = func();
    warrior.healthPoints -= turnDamage;
    mage.healthPoints -= turnDamage;
    dragon.damage = turnDamage;
  },
  fetchTurnResult: () => console.log(battleMembers),
};
let counter = 1;
do {
  gameActions.warriorTurn(warriorDamage);
  gameActions.mageTurn(mageDamage);
  gameActions.dragonTurn(dragonDamage);
  console.log(`-----------Turno ${counter}-------------`);
  gameActions.fetchTurnResult();
  counter += 1;
} while (mage.healthPoints > 0 && warrior.healthPoints > 0 && dragon.healthPoints > 0)

import { Component, For } from 'solid-js';
import UnitCard from './components/unit-card/UnitCard';

const units = [
  {
    name: "Archer",
    "cost": 12,
    "power": 4,
    "flamingPower": 4.6,
    "defense": 4.5,
    "speed": 9,
    "canDig": true,
    "requires": ["1 bow"],
    "image": "archer.png"
  },
  {
    name: "Spearman",
    "cost": 8,
    "power": 5,
    "defense": 5,
    "speed": 6,
    "canDig": true,
    "requires": ["1 spear"],
    "image": "spearman.png"
  },
  {
    name: "Maceman",
    "cost": 20,
    "power": 7.5,
    "defense": 7,
    "speed": 8.5,
    "canDig": true,
    "requires": ["1 mace", "1 leather armor"],
    "image": "maceman.png"
  },
  {
    name: "Crossbowman",
    "cost": 20,
    "power": 7,
    "defense": 7.5,
    "speed": 5.5,
    "canDig": false,
    "requires": ["1 crossbow", "1 leather armor"],
    "image": "crossbowman.png"
  },
  {
    name: "Pikeman",
    "cost": 20,
    "power": 7.6,
    "defense": 7.7,
    "speed": 6,
    "canDig": true,
    "requires": ["1 pike", "1 metal armor"],
    "image": "pikeman.png"
  },
  {
    name: "Swordsman",
    "cost": 40,
    "power": 9.4,
    "defense": 9.4,
    "speed": 4,
    "canDig": false,
    "requires": ["1 sword", "1 metal armor"],
    "image": "swordsman.png"
  },
  {
    name: "Knights",
    "cost": 40,
    "power": 9.4,
    "defense": 9,
    "speed": 9.5,
    "canDig": false,
    "requires": ["1 sword", "1 metal armor", "1 horse"],
    "image": ""
  },
  {
    name: "Arabian Archer",
    "cost": 75,
    "power": 4.5,
    "flamingPower": 4.6,
    "defense": 4.5,
    "speed": 9,
    "canDig": false,
    "requires": [],
    "image": "arabarcher.png"
  },
  {
    name: "Slave",
    "cost": 5,
    "power": 1,
    "defense": 2,
    "speed": 9,
    "canDig": true,
    "requires": [],
    "image": "slave.png"
  },
  {
    name: "Slinger",
    "cost": 12,
    "power": 3.6,
    "defense": 2,
    "speed": 9,
    "canDig": false,
    "requires": [],
    "image": "slinger.png"
  },
  {
    name: "Horse Archer",
    "cost": 80,
    "power": 5,
    "defense": 5.5,
    "speed": 9.5,
    "canDig": false,
    "requires": [],
    "image": "horsearcher.png"
  },
   {
    name: "Arabian Swordsman",
    "cost": 80,
    "power": 8.8,
    "defense": 8.8,
    "speed": 4,
    "canDig": false,
    "requires": [],
    "image": "arabswordsman.png"
  },
  {
    name: "Assassin",
    "cost": 60,
    "power": 7.6,
    "defense": 7.3,
    "speed": 6.7,
    "canDig": false,
    "requires": [],
    "image": "assassin.png"
  },
  {
    name: "Fire Thrower",
    "cost": 100,
    "power": 8.4,
    "defense": 6,
    "speed": 6,
    "canDig": false,
    "requires": [],
    "image": "firethrower.png"
  },
  
  


]


const App: Component = () => {
  return (
    <main>
      <For each={units}>
        {(unit) => (
          <UnitCard 
            name={unit.name} 
            cost={unit.cost}
            power={unit.power}
            flamingPower={unit.flamingPower}
            defense={unit.defense}
            speed={unit.speed}
            canDig={unit.canDig}
            requires={unit.requires}
            image={unit.image}
          />
        )}
      </For>    
    </main>
  );
};

export default App;

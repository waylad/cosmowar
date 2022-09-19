import { State } from "./stateTypes";

export let state: State = {
  paused: false,
  playerMaxHealth: 30,
  playerStartingHealth: 30,
  playerHealth: 0,
  playerThrust: 0,
  playerWeaponPower: 0,
  enemyHealth: 0,
  enemyThrust: 0,
  enemyWeaponPower: 0,
  spaceShipsContract: '0xaa71521B33f97CF7466519025BC6d60F55B9dD44',
  spaceCoinsContract: '0x43a4394Aa97Dd5962653886aeD985247d79706cb',
  ownedShips: [],
  currentShip: {
    tokenId: 0,
    shipCode: '0000',
  },
  currentLevelIndex: 0,
  levelHistory: [],
  spaceCoinsBalance: 0,
  inventory: [],
  shopInventory: [
    'itemCabin0',
    'itemCabin1',
    'itemCabin2',
    'itemCabin3',
    'itemWeapon0',
    'itemWeapon1',
    'itemWeapon2',
    'itemWeapon3',
    'itemWing0',
    'itemWing1',
    'itemWing2',
    'itemWing3',
    'itemEngine0',
    'itemEngine1',
    'itemEngine2',
    'itemEngine3',
  ],
  shipSize: 60,
  itemSize: 50,
}
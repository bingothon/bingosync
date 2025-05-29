var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var thisVersion = "Non-Lockout Patch 4.1 - Last updated: May 18th, 2025";

var bingoList = [
[
{ "name": "15 Blue Coins from M Graffiti" },
{ "name": "3 Fruit Lady Blue Coins" },
{ "name": "3 Red Coin Shines" },
{ "name": "15 Ricco Blue Coins" },
{ "name": "Pianta 100 Coin Shine" },
{ "name": "5 Linked Blue Coin Pairs" }
],
[
{ "name": "16 Gelato Blue Coins" },
{ "name": "16 Bianco Blue Coins" },
{ "name": "12 Delfino Blue Coins" },
{ "name": "50 Yellow Coins from 3 Levels OR 150 Delfino Yellow Coins" },
{ "name": "100 Coin Shine from a Boss Episode" },
{ "name": "100 Coin Shine in a Secret" }
],
[
{ "name": "4 Fruit Lady Blue Coins" },
{ "name": "Bianco 4 Hoverless" },
{ "name": "1 Bianco Hidden Shine" },
{ "name": "2 Hidden Shines from 1 Level (No Gelato)" },
{ "name": "Ricco 3 from the Top (Spray Nozzle Only)" },
{ "name": "21 Blue Coins from M Graffiti" }
],
[
{ "name": "5 Blue Bird Blue Coins" },
{ "name": "15 Delfino Blue Coins" },
{ "name": "2 Rocket Nozzle Unlocks" },
{ "name": "5 Bianco Shines" },
{ "name": "1 Ricco Hidden Shine" },
{ "name": "4 Gelato Shines" }
],
[
{ "name": "Box Game 3" },
{ "name": "4 Red Coin Shines" },
{ "name": "16 Pinna Blue Coins" },
{ "name": "2 Gelato Hidden Shines" },
{ "name": "7 Blue Bird Blue Coins" },
{ "name": "Pianta 3 Damageless" }
],
[
{ "name": "24 Ricco Blue Coins" },
{ "name": "Wiggler Shine" },
{ "name": "Bianco 100 Coin Shine" },
{ "name": "6 NPC Blue Coins (No Pianta 6)" },
{ "name": "2 Secret Shines from 1 Level" },
{ "name": "4 Nozzle Unlocks" }
],
[
{ "name": "16 Noki Blue Coins" },
{ "name": "Sirena 100 Coin Shine" },
{ "name": "Gelato 100 Coin Shine" },
{ "name": "Ricco 100 Coin Shine" },
{ "name": "Both Gold Bird Shines" }
],
[
{ "name": "4 Secret Shines" },
{ "name": "4 Shines from Cannon Mole Episodes" },
{ "name": "4 Boss Shines" },
{ "name": "1 Pinna Hidden Shine" },
{ "name": "100 Coin Shine from an Episode 2" },
{ "name": "Pinna 100 Coin Shine" }
],
[
{ "name": "5 Blue Coins from Enemies" },
{ "name": "5 Blue Coins from Enemies (No Ricco)" },
{ "name": "4 Unique Boss Shines" },
{ "name": "20 Lives" },
{ "name": "25 Lives" },
{ "name": "30 Lives" }
],
[
{ "name": "40 Total Blue Coins" },
{ "name": "45 Total Blue Coins" },
{ "name": "50 Total Blue Coins" },
{ "name": "15 Blue Coins from 3 Worlds" },
{ "name": "20 Blue Coins from 2 Levels" }
],
[
{ "name": "6 Pianta Shines" },
{ "name": "8 Blue Coins from Enemies" },
{ "name": "8 Linked Blue Coin Pairs" },
{ "name": "6 Delfino Shines" },
{ "name": "12 Sirena Blue Coins" },
{ "name": "25 Pinna Blue Coins" }
],
[
{ "name": "5 Boss Shines" },
{ "name": "4 Hidden Shines" },
{ "name": "1 Sirena Hidden Shine" },
{ "name": "Ride Yoshi in Pianta" },
{ "name": "2 Hidden Reds Hoverless" },
{ "name": "Ride Yoshi in 3 Worlds" }
],
[
{ "name": "5 Red Coin Shines" },
{ "name": "6 Red Coin Shines" },
{ "name": "2 Ricco Hidden Shines" },
{ "name": "2 Shines from 5 Levels" },
{ "name": "1 Shine from Each Level" },
{ "name": "Pinna 5 from the Back Hoverless" }
],
[
{ "name": "12 Blue Coins from 5 Worlds" },
{ "name": "20 Blue Coins from 3 Levels" },
{ "name": "60 Total Blue Coins" },
{ "name": "65 Total Blue Coins" },
{ "name": "70 Total Blue Coins" },
{ "name": "75 Total Blue Coins" }
], 
[
{ "name": "King Boo Shine" },
{ "name": "23 Bianco Blue Coins" },
{ "name": "5 Hidden Shines" },
{ "name": "5 Secret Shines" },
{ "name": "6 Secret Shines" },
{ "name": "1 Pianta Hidden Shine" }
],
[
{ "name": "24 Gelato Blue Coins" },
{ "name": "16 Pianta Blue Coins" },
{ "name": "Pianta Shadow Mario" },
{ "name": "20 Sirena Blue Coins" },
{ "name": "Ricco Shadow Mario" },
{ "name": "2 Bianco Hidden Shines" }
],
[
{ "name": "3 Rocket Nozzle Unlocks" },
{ "name": "12 Delfino Shines (With Blue Trades)" },
{ "name": "14 Delfino Shines (With Blue Trades)" },
{ "name": "Bianco 8 Shine" },
{ "name": "Defeat All 3 Gooper Blooper Bosses" },
{ "name": "Noki 100 Coin Shine" }
],
[
{ "name": "9 Delfino Shines" },
{ "name": "Ricco 8 Shine" },
{ "name": "Sand Bird Shine" },
{ "name": "7 Shines Inside Secrets" },
{ "name": "7 Red Coin Shines" },
{ "name": "2 Turbo Nozzle Unlocks" }
],
[
{ "name": "2 Shadow Mario Shines" },
{ "name": "Three 100 Coin Shines" },
{ "name": "2 Piantissimo Shines" },
{ "name": "5 Shines from 3 Levels" },
{ "name": "5 Sirena Shines" },
{ "name": "Pinna Shadow Mario" }
],
[
{ "name": "Pianta 8 Shine" },
{ "name": "6 Shines from 2 Worlds" },
{ "name": "8 Shines from 2 Levels" },
{ "name": "Enter 6 Pipes AND Collect their Shines" },
{ "name": "Enter 9 Pipes AND Collect their Shines" },
{ "name": "Sirena 3 Shine (No Clipping)" }
],
[
{ "name": "3 Red Coin Episode Shines" },
{ "name": "7 Pinna Shines" },
{ "name": "Bianco Shadow Mario" },
{ "name": "Ride Yoshi in Bianco" },
{ "name": "Both Bell Shines OR Lighthouse Shine" },
{ "name": "Lily Pad Shine (No Fruit Clipping)" }
],
[
{ "name": "2 Sirena Hidden Shines" },
{ "name": "2 Pinna Hidden Shines" },
{ "name": "2 Circle Linked Blue Coin Pairs" },
{ "name": "4 Noki Shines" },
{ "name": "6 Shines from NPCs" },
{ "name": "1 Insect Blue Coin from 2 Levels" }
],
[
{ "name": "Pinna 8 Shine" },
{ "name": "10 Shines from 1 Level" },
{ "name": "9 NPC Blue Coins" },
{ "name": "2 Pianta Hidden Shines" },
{ "name": "Noki Turbo Nozzle OR Delfino Rocket Nozzle" },
{ "name": "All Sirena Casino Blues" }
],
[
{ "name": "Sirena Shadow Mario" },
{ "name": "25 Pianta Blue Coins" },
{ "name": "28 Shines" },
{ "name": "5 Buttons in Unique Locations" },
{ "name": "Gelato Shadow Mario OR Noki 6 Shine" },
{ "name": "5 Unique Boss Shines" }
],
[
{ "name": "Eel Shine" },
{ "name": "Ride Yoshi in Gelato" },
{ "name": "6 Boss Shines" },
{ "name": "All 30 Blue Coins from a Single Level" },
{ "name": "25 Noki Blue Coins" }
]
];

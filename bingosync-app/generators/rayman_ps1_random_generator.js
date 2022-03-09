bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    "Grimace 69 times on 1 screen",
    "Lose 8 lives in 1 screen without having a game over screen",
    "Successfully finish 6 magicians",
    "Superboost off of any ring",
    "Get the running powerup without having any cages collected",
    "Get the helicopter powerup while having exactly 4 cages in total",
    "Hit all 6 cages in 3 different levels",
    "7 unique World map cage medallions",
    "Zip 4 times",
    "Kill 7 unique Greenbois",
    "Get 2 lives from 1 Magician",
    "Reach 30 Lives",
    "Break 40 cages",
    "Get all cages in Blue Mountains",
    "Do 2 superjumps in a row in Picture city",
    "Touch all 15 fairies in Picture City",
    "Touch all 13 fairies in Band land",
    "Take all 7 Photographers in Band Land",
    "Take all 3 Photographers in Forest",
    "Take all 5 Photographers in Blue Mountains",
    "Take all 9 Photographers in Picture City",
    "Take all 4 Photographers in Caves",
    "Get exactly 1 cage in every level except for the caves levels",
    "Max% Pink Plant Woods",
    "Kill 6 unique tall living stones in PPW without using punch and without taking damage in between",
    "Beat the 2nd PPW Magician under 27 seconds on your first visit to the level",
    "Beat the PPW2 Magician under 8 seconds",
    "Get all cages in AL without leaving the level",
    "Enter AL for the first time with 13 lives and 5 cages",
    "Beat Bzzit with a gold stage 2 speedfist and 0 tings collected",
    "Beat both Bzzit & Moskito without using Jump and without taking damage",
    "AL Screen 3 Max% and damageless (autoscroller)",
    "Get all Swamps cages in reverse order",
    "In Swamps screen 3, go from the bottom to top without taking damage and without using helicopter",
    "Clip 6 times in the Swamps screen 1",
    "Beat the Swamps Magician under 17 seconds without using helicopter and run",
    "Max% The Swamps of Forgetfulness",
    "Beat Moskito after beating Mr. Sax",
    "Max% Moskito's Nest",
    "Get all 3 MN screen 1 cages without using speed storage",
    "Beat Moskito's Nest by only using 1 punch",
    "Kill all enemies in MN screen 1 without getting hit (kill all piranha's once)",
    "Get the Bongo hills dark screen cage without using helicopter, tethering and speedlocking",
    "Beat Bongo hills after collecting all cages in Swamps",
    "Beat the BH4 Magician under 23 seconds without using helicopter and run",
    "Get all 6 1ups in Bongo Hills",
    "Beat Bongo hills without dying and without taking damage while getting all cages",
    "Beat the dark screen of bongo hills without collecting anything and without getting hit",
    "Max% Allegro Presto",
    "Beat Allegro screen 1 while collecting 4 tings or less",
    "Beat Allegro Presto after collecting all cages in Anguish Lagoon",
    "Do Allegro clip twice within 5 tries",
    "Beat Allegro Presto without having the ring grab powerup",
    "Collect 5 cages in TG without getting hit",
    "Get all cages in TG without using helicopter or superjumps",
    "Beat TG screen 2 without taking a hit",
    "Perform Double golem jump in TG",
    "Damageless Hard Rocks",
    "Beat Hard Rocks while having exactly 20 cages",
    "Touch all the endsigns of Hard Rocks and SMC",
    "Beat the final screen of Hard rocks while only allowed to touch 4 unique clouds",
    "Get all 7 1ups in Hard Rocks",
    "Collect all 51 tings in MSP1 and reach the endsign without taking a hit",
    "Hit Mr. Stone 6 times while having atleast 3 dogs alive all the time",
    "Punch Mr. Stone off the screen",
    "in MSP2, Take dmg by 1 of the rock arrows after cutting down the ropes",
    "Beat Mr. Stone Peaks after getting 4 cages in Hard Rocks",
    "Beat Gong Heights screen 2 without letting go of right and without crawling",
    "Get all Gong Heights cages in reverse order",
    "Beat Gong Heights screen 1 while only touching one bongo",
    "Beat Gong Heights without using helicopter and run",
    "Enter Mr Sax fight (chase screen) while having exactly 69 tings",
    "Beat mr sax using only 12 punches and without getting hit",
    "Beat the first screen of Mr. Sax as small rayman",
    "Clip 5 times in Mr. Sax without pressing down",
    "Get all 7 1ups in EP",
    "Grab 2 lives as small rayman on EP2",
    "Beat the EP 3 Magician under 27 seconds",
    "Beat EP without using helicopter and run",
    "Beat Viking Mama with a Stage 2 goldfist and 5 health",
    "Beat Viking Mama twice in a row with only taking 1 damage boost to do so",
    "Damageless EP",
    "Beat the first screen of PP as small rayman",
    "Perform the -EZ Jump-",
    "Beat PP without using helicopter and run in screens 1 and 3",
    "in PP, Get 7 Unique fist powerups without picking up P orbs or 1ups",
    "in PP2, Collect all 60 tings & reach the endsign without taking a hit",
    "Beat the final screen of PP with the speedstorage strat on the sharpeners",
    "Beat viking mama while having exactly 20 lives",
    "Get to the left side of the return sign in SMC1",
    "Reach the top SMC1 end sign without touching any sharpeners and without taking damage",
    "Get all 8 1ups in SMC",
    "Beat SMC screen 2 without using red rings",
    "Beat Space Mama while having exactly 19 cages",
    "Perform The Squeeze",
    "Beat Space Mama after beating sax",
    "Get all CP cages in reverse order},
    "Complete CP1 whilst collecting 12 tings or less",
    "Max% and Damageless Crystal Palace",
    "Beat the CP Magician under 20 seconds",
    "Get all 7 1ups in EAJ",
    "Damageless EAJ",
    "Get all tings, 1ups & powerups on EaJ screen 1 without taking damage",
    "Get hit by all Fish on EaJ screen 5 without dying",
    "Kill all enemies on EaJ screen 2 without taking damage",
    "Beat Skops without using punch",
    "Beat Skops screen 1 without standing on a surface apart from the start and 3 red platforms",
    "In Skops, get from the photographer to the end sign while only using 1 punch",
    "Take the Skops photographer, then get all cages in reverse order without leaving the screen"
];

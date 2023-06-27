var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = []
bingoList[1] = [{'name': 'Defeat an enemy using only Shields', 'types': ['Combat']},
  {'name': 'Archaic Legwear', 'types': ['Armor', 'GSI']},
  {'name': 'Archaic Warm Greaves', 'types': ['Armor', 'GSI']},
  {'name': 'Archaic Tunic', 'types': ['Armor', 'GSI']},
  {'name': 'Get a Rupee from a Blupee', 'types': ['Caves']}],
bingoList[2] = [{'name': 'Defeat an enemy using only Recall', 'types': ['Combat']},
  {'name': 'Obtain the Camera', 'types': ['SideAdventures', 'LookoutLanding']},
  {'name': 'Hyrule Field Tower', 'types': ['Tower', 'HyruleField']},
  {'name': 'Collect 50 arrows', 'types': ['Weapons']},
  {'name': 'Nostalgic Fabric ', 'types': ['Fabrics', 'HyruleField']},
  {'name': 'Cook Copious Mushroom Skewers', 'types': ['Recipes']},
  {'name': 'Cook Copious Seafood Skewers', 'types': ['Recipes']},
  {'name': 'Hylian Shield', 'types': ['Weapons']},
  {'name': 'Distract an enemy with meat during combat', 'types': ['Combat']},
  {'name': 'An Uninvited Guest SQ',
   'types': ['SideQuests', 'Combat', 'Stables', 'SahasraSlope']}],
bingoList[3] = [{'name': 'Defeat a Wizzrobe of any kind', 'types': ['Combat']},
  {'name': 'Defeat a Captain Construct of any kind', 'types': ['Combat']},
  {'name': "Obtain 1 Sage's Will", 'types': ['Sky']},
  {'name': 'Obtain Dusk Bow', 'types': ['Weapons']},
  {'name': 'Game Over from Cuccos', 'types': ['GameOver']},
  {'name': 'Game Over from Gloom', 'types': ['GameOver']},
  {'name': 'Make a Hard-Boiled Egg', 'types': ['Recipes']},
  {'name': 'Cook Level 2 Sticky Elixir', 'types': ['Recipes']},
  {'name': 'Cook Level 2 Bright Elixir', 'types': ['Recipes']},
  {'name': "Hestu's Concerns SA", 'types': ['SideQuests', 'Koroks']},
  {'name': 'Exchange Poes with a Bargainer Statue', 'types': ['Depths']},
  {'name': 'Horse-Drawn Dreams SQ',
   'types': ['SideQuests', 'Stables', "Lindor'sBrow"]},
  {'name': 'Feathered Fugitives SQ',
   'types': ['SideQuests', 'Stables', 'HyruleField']}],
bingoList[4] = [{'name': 'The Hunt for Bubbul Gems! Side Adventure',
   'types': ['Caves', 'Koltin', 'SideQuests']},
  {'name': 'Defeat a Talus of any kind', 'types': ['Combat', 'Talus']},
  {'name': 'Sneakstrike an enemy in a Puffshroom cloud',
   'types': ['Combat', 'Depths']},
  {'name': 'Rospro Pass Tower', 'types': ['Tower', 'RosproPass', 'Hebra']},
  {'name': 'Gerudo Canyon Tower',
   'types': ['Tower', 'GerudoCanyon', 'Gerudo']},
  {'name': 'Popla Foothills Tower', 'types': ['Tower', 'PoplaFoothills']},
  {'name': 'Rabella Wetlands Tower', 'types': ['Tower', 'RabellaWetlands']},
  {'name': '5 Lookout Landing Korok Seeds',
   'types': ['LookoutLanding', 'Koroks']},
  {'name': 'Game Over from a Lightning Strike', 'types': ['GameOver']},
  {'name': 'Royal Hyrulean Fabric', 'types': ['Fabrics', 'LookingLanding']},
  {'name': 'Horse-God Fabric ', 'types': ['Fabrics', 'Stables']},
  {'name': 'Cook Deep-Fried Drumstick', 'types': ['Recipes']},
  {'name': 'Defeat an enemy using an Ancient Blade', 'types': ['Combat']},
  {'name': 'Ride a Stalhorse', 'types': ['Depths']},
  {'name': 'Retain a Pristine Weapon', 'types': ['Depths', 'Weapons']},
  {'name': 'Fall through any sand or water whirlpool',
   'types': ['GerudoCanyon', 'UplandZorana']},
  {'name': 'Unfuse an equipment in Tarrey Town', 'types': ['UlriMountain']},
  {'name': "Hestu's Concerns SA", 'types': ['Koroks']},
  {'name': 'Use a Royal Guard’s weapon at low durability',
   'types': ['Combat']},
  {'name': 'Complete 1 Sand Seal Plushie Minigame', 'types': ['Minigames']},
  {'name': '300+ meters in the Ultra Ball Haul Minigame',
   'types': ['Minigames', "Lindor'sBrow"]},
  {'name': 'Keys Born of Water Shrine Quest',
   'types': ['Shrines', 'PoplaFoothills']},
  {'name': 'Legend of the Soaring Spear Shrine Quest',
   'types': ['Shrines', 'PoplaFoothills']},
  {'name': 'Dyeing to Find It Shrine Quest',
   'types': ['Shrines', 'SahasraSlope']}],
bingoList[5] = [{'name': 'Confuse 3 enemies with one Muddle Bud', 'types': ['Combat']},
  {'name': 'Defeat a Hinox of any kind', 'types': ['Combat']},
  {'name': 'Defeat a Flux Construct of any kind', 'types': ['Combat', 'Sky']},
  {'name': 'Pikida Stonegrove Tower',
   'types': ['Tower', 'PikidaStonegrove', 'Hebra']},
  {'name': 'Upland Zorana Tower', 'types': ['Tower', 'UplandZorana']},
  {'name': '5 Hyrule Field Korok Seeds', 'types': ['HyruleField', 'Koroks']},
  {'name': 'Report 5 Wells to Fera', 'types': ['Stables']},
  {'name': 'Champion’s Leathers', 'types': ['Armor']},
  {'name': 'Complete Test of Strength Minigame', 'types': ['Minigames']},
  {'name': 'A Letter to Koyin SA',
   'types': ['SideAdventures', 'MountLanayru']},
  {'name': 'Follow the Cuccos SQ', 'types': ['SideQuests', 'SahasraSlope']},
  {'name': 'Decorate with Passion SQ',
   'types': ['SideQuests', 'GerudoCanyon']},
  {'name': 'Obtain All 4 Chuchu Jellies', 'types': ['Combat']},
  {'name': 'Discover a Secret Hot Spring', 'types': ['RosproPass']},
  {'name': 'Well-Worn Hair Band', 'types': ['Armor', 'MountLanayru']},
  {'name': 'Give Beedle a Beetle', 'types': ['Stables']},
  {'name': 'Ride the Giant Horse Shrine Quest',
   'types': ['Shrines', 'PoplaFoothills']},
  {'name': 'Attempt to dye undyable armor',
   'types': ['Armor', 'MountLanayru']}],
bingoList[6] = [{'name': 'Defeat an Armored Enemy', 'types': ['Combat']},
  {'name': 'Feed a Bomb to a Frox', 'types': ['Combat', 'Depths']},
  {'name': 'Defeat a Boss Bokoblin', 'types': ['Combat']},
  {'name': 'Obtain an item from a Dondon', 'types': ['PoplaFoothills']},
  {'name': 'Obtain Autobuild', 'types': ['Depths']},
  {'name': "Lindor's Brow Tower", 'types': ['Tower', "Lindor'sBrow"]},
  {'name': 'Sahasra Slope Tower', 'types': ['Tower', 'SahasraSlope', 'Caves']},
  {'name': 'Eldin Canyon Tower', 'types': ['Tower', 'EldinCanyon']},
  {'name': 'Ulri Mountain Tower', 'types': ['Tower', 'UlriMountain']},
  {'name': '4 Lookout Landing Shrines',
   'types': ['LookoutLanding', 'Shrines']},
  {'name': '4 Hyrule Field Shrines', 'types': ['HyruleField', 'Shrines']},
  {'name': 'Cook Level 3 Sticky Elixir', 'types': ['Recipes']},
  {'name': 'Cook Level 3 Bright Elixir', 'types': ['Recipes']},
  {'name': '4 Blessing Shrines', 'types': ['Shrines', 'Travel']},
  {'name': 'Take a Selfie with a Frox', 'types': ['Camera', 'Depths', 'Frox']},
  {'name': 'Complete the Horse Towing Minigame',
   'types': ['Minigames', 'PoplaFoothills']},
  {'name': 'A New Signature Food SA',
   'types': ['SideAdventures', 'MountLanayru']},
  {'name': 'The Great Tumbleweed Purge SQ',
   'types': ['SideQuests', 'GerudoCanyon']},
  {'name': '3 Dog Treasure Chests', 'types': ['Stables', 'Travel']},
  {'name': 'The High Spring and the Light Rings Shrine Quest',
   'types': ['Shrines', 'MountLanayru']},
  {'name': 'Offer Fruit at 2 Cherry Blossom Trees',
   'types': ['CherryBlossom', 'Travel']},
  {'name': 'Dark Tunic', 'types': ['Depths', 'Armor']}],
bingoList[7] = [{'name': 'Defeat a Gibdo using Dazzle Fruit', 'types': ['Combat']},
  {'name': 'Defeat a Lynel of any kind', 'types': ['Combat']},
  {'name': 'Defeat a Battle Talus', 'types': ['Combat', 'Talus']},
  {'name': 'Defeat a Frox of any kind', 'types': ['Combat', 'Depths']},
  {'name': 'Defeat 2 Minibosses', 'types': ['Combat']},
  {'name': 'Obtain 3 Old Maps', 'types': ['Sky']},
  {'name': 'Mount Lanayru Tower', 'types': ['Tower', 'MountLanayru']},
  {'name': 'Thyphlo Ruins Tower', 'types': ['Tower', 'ThyphloRuins']},
  {'name': '5 Rospro Pass Korok Seeds', 'types': ['RosproPass', 'Koroks']},
  {'name': '5 Gerudo Canyon Korok Seeds', 'types': ['GerudoCanyon', 'Koroks']},
  {'name': '5 Popla Foothills Korok Seeds',
   'types': ['PoplaFoothills', 'Koroks']},
  {'name': '5 Rabella Wetlands Korok Seeds',
   'types': ['RabellaWetlands', 'Koroks']},
  {'name': 'Complete 5 Unique Types of Koroks', 'types': ['Koroks']},
  {'name': 'Help Addison 5 times', 'types': ['Addison', 'Travel']},
  {'name': 'Defeat Kohga Once', 'types': ['Combat', 'Depths']},
  {'name': '3 Shrine Quests', 'types': ['Shrines']},
  {'name': "Steal a Yiga's Ride", 'types': ['Combat', 'Depths']},
  {'name': 'Glide Shirt', 'types': ['Sky', 'Armor']},
  {'name': 'Take a selfie with a dog', 'types': ['Camera', 'Stables']},
  {'name': 'Take a Selfie with Master Kohga', 'types': ['Camera', 'Depths']},
  {'name': 'Complete 2 Sand Seal Plushie Minigames',
   'types': ['Minigames', 'Travel']},
  {'name': 'White Goats Gone Missing SA',
   'types': ['SideAdventures', 'Penn', "Lindor'sBrow", 'Stables']},
  {'name': 'An Eerie Voice SA',
   'types': ['SideAdventures',
    'Penn',
    "Lindor'sBrow",
    'Stables',
    'PoplaFoothills']},
  {'name': "Reede's Secret SA", 'types': ['SideAdventures', 'MountLanayru']},
  {'name': "Cece's Secret SA", 'types': ['SideAdventures', 'MountLanayru']},
  {'name': "Genli's Home Cooking SQ", 'types': ['SideQuests', 'RosproPass']},
  {'name': 'Open the Door SQ', 'types': ['SideQuests', 'RosproPass']},
  {'name': 'Gloom-Borne Illness SQ', 'types': ['SideQuests', 'SahasraSlope']},
  {'name': 'A Bottle Cry for Help SQ', 'types': ['SideQuests']}],
bingoList[8] = [{'name': '5 Bubbul Gems', 'types': ['Caves', 'Koltin']},
  {'name': 'Defeat a Captain Construct III', 'types': ['Combat']},
  {'name': '8 Shrines', 'types': ['Shrines']},
  {'name': '5 Pikida Stonegrove Korok Seeds',
   'types': ['PikidaStonegrove', 'Koroks']},
  {'name': '5 Upland Zorana Korok Seeds', 'types': ['UplandZorana', 'Koroks']},
  {'name': '5 Backpack Korok Seeds', 'types': ['Koroks']},
  {'name': '4 Rospro Pass Shrines', 'types': ['RosproPass', 'Shrines']},
  {'name': '4 Gerudo Canyon Shrines', 'types': ['GerudoCanyon', 'Shrines']},
  {'name': '4 Popla Foothills Shrines',
   'types': ['PoplaFoothills', 'Shrines']},
  {'name': '4 Rabella Wetlands Shrines',
   'types': ['RabellaWetlands', 'Shrines']},
  {'name': 'Game Over while skydiving (in mid-air)', 'types': ['GameOver']},
  {'name': 'Sleep in a Malanya Bed (7 Pony Points)',
   'types': ['Stables', 'Travel']},
  {'name': 'Complete 5 Side Quests/Adventures', 'types': ['SideQuests']},
  {'name': 'Open 3 Enemy Camp Chests', 'types': ['Combat', 'Travel']},
  {'name': 'The Search for Koltin SA', 'types': ['Koltin', 'EldinCanyon']},
  {'name': 'Team Cece or Team Reede? SA',
   'types': ['SideAdventures', 'MountLanayru']},
  {'name': 'Fish for Fletching SQ', 'types': ['SideQuests', 'RosproPass']},
  {'name': "Misko's Cave of Chests SQ", 'types': ['SideQuests', 'Stables']},
  {'name': 'Teach Me a Lesson I SQ', 'types': ['SideQuests', 'Camera']},
  {'name': 'The Iceless Icehouse SQ', 'types': ['SideQuests', 'Gerudo']},
  {'name': 'Full Royal Guard Set', 'types': ['Armor', 'LookoutLanding']}],
bingoList[9] = [{'name': 'Find an Old Map and its Treasure', 'types': ['Sky', 'Depths']},
  {'name': 'Gerudo Highlands Tower',
   'types': ['Tower', 'GerudoHighlands', 'Gerudo']},
  {'name': "5 Lindor's Brow Korok Seeds", 'types': ["Lindor'sBrow", 'Koroks']},
  {'name': '5 Sahasra Slope Korok Seeds', 'types': ['SahasraSlope', 'Koroks']},
  {'name': '5 Eldin Canyon Korok Seeds', 'types': ['EldinCanyon', 'Koroks']},
  {'name': '5 Ulri Mountain Korok Seeds', 'types': ['UlriMountain', 'Koroks']},
  {'name': '5 Autobuild Schematics', 'types': ['Depths', 'Travel']},
  {'name': 'Stand in Gerudo Jail', 'types': ['Gerudo']},
  {'name': 'Ascend out of the Depths', 'types': ['Depths']},
  {'name': 'Take a Selfie on the Throne in Sanctum',
   'types': ['Camera', 'LookoutLanding']},
  {'name': 'Distract a Yiga with a banana during combat', 'types': ['Combat']},
  {'name': 'Bring Peace to Hyrule Field! SA',
   'types': ['Combat', 'HyruleField']},
  {'name': 'Gourmets Gone Missing SA',
   'types': ['SideAdventures',
    'Penn',
    "Lindor'sBrow",
    'Stables',
    'LookoutLanding']},
  {'name': 'The Beast and the Princess SA',
   'types': ['SideAdventures',
    'Penn',
    "Lindor'sBrow",
    'Stables',
    'PoplaFoothills']},
  {'name': 'The Missing Farm Tools SA',
   'types': ['SideAdventures',
    'Penn',
    "Lindor'sBrow",
    'Stables',
    'SahasraSlope']},
  {'name': 'Meat for Meat SQ', 'types': ['SideQuests']},
  {'name': "Shoot a Beam Emitter from Vah Medoh's Perch",
   'types': ['RosproPass']},
  {'name': 'Use all 3 Device Dispensers on the Surface',
   'types': ['HyruleField', 'SahasraSlope', 'UlriMountain']}],
bingoList[10] = [{'name': 'Defeat 4 Minibosses', 'types': ['Combat']},
  {'name': 'Activate 5 Lightroots', 'types': ['Depths']},
  {'name': '5 Mount Lanayru Korok Seeds', 'types': ['MountLanayru', 'Koroks']},
  {'name': '5 Thyphlo Ruins Korok Seeds', 'types': ['ThyphloRuins', 'Koroks']},
  {'name': 'Use 4 Fairies', 'types': ['Fairies']},
  {'name': '4 Pikida Stonegrove Shrines',
   'types': ['PikidaStonegrove', 'Shrines']},
  {'name': '4 Upland Zorana Shrines', 'types': ['UplandZorana', 'Shrines']},
  {'name': '8 Shrines in the Sky', 'types': ['Sky', 'Shrines']},
  {'name': 'Defeat a Phantom Ganon', 'types': ['Combat', 'PhantomGanon']},
  {'name': 'Cook Nutcake', 'types': ['Recipes']},
  {'name': 'Take a Selfie on a Pirate Ship', 'types': ['Camera']},
  {'name': 'Bring Peace to Necluda! SA', 'types': ['Combat', 'SahasraSlope']},
  {'name': "Zelda's Golden Horse SA",
   'types': ['SideAdventures',
    'Penn',
    "Lindor'sBrow",
    'Stables',
    'PikidaStonegrove']},
  {'name': 'The All-Clucking Cucco SA',
   'types': ['SideAdventures',
    'Penn',
    "Lindor'sBrow",
    'Stables',
    'UlriMountain',
    'Combat']},
  {'name': 'Princess Zelda Kidnapped?! SA',
   'types': ['SideAdventures',
    'Penn',
    "Lindor'sBrow",
    'Stables',
    'SahasraSlope',
    'Combat']},
  {'name': 'The Blocked Well SA',
   'types': ['SideAdventures',
    'Penn',
    "Lindor'sBrow",
    'Stables',
    'GerudoCanyon',
    'Combat']},
  {'name': 'All 3 Ring the Bell Koroks ', 'types': ['Koroks', 'Travel']},
  {'name': 'Simmerstone Springs SQ', 'types': ['SideQuests']},
  {'name': 'Disaster in Gerudo Canyon SQ',
   'types': ['SideQuests', 'GerudoCanyon']},
  {'name': "Recover Tulin's Bow", 'types': ['Temples', 'Combat']},
  {'name': 'Report 10 Wells to Fera', 'types': ['LookoutLanding']},
  {'name': "3 Misko's Treasures", 'types': ['Armor', 'Caves']}],
bingoList[11] = [{'name': 'Defeat a Flux Construct III', 'types': ['Combat']},
  {'name': '5 Shrine Quests', 'types': ['Shrines']},
  {'name': 'Cook Monster Rice Balls', 'types': ['Recipes']},
  {'name': 'Retain 10 Unique Zonai Devices', 'types': ['Sky']},
  {'name': 'Discover Meda Lavafalls', 'types': ['Lavafalls', 'Hateno']},
  {'name': 'Glide Mask', 'types': ['Sky', 'Armor']},
  {'name': 'Take a Selfie with a Gleeok', 'types': ['Camera', 'Gleeok']},
  {'name': 'A Monsterous Collection I SA', 'types': ['Koltin', 'Camera']},
  {'name': 'Bring Peace to Eldin! SA', 'types': ['Combat', 'EldinCanyon']},
  {'name': 'Bring Peace to Akkala! SA', 'types': ['Combat', 'UlriMountain']},
  {'name': 'Bring Peace to Faron! SA', 'types': ['Combat', 'PoplaFoothills']},
  {'name': 'The Beckoning Woman SA',
   'types': ['SideAdventures',
    'Penn',
    "Lindor'sBrow",
    'Stables',
    'HyruleField']},
  {'name': 'A Trip through History SQ',
   'types': ['SideQuests', 'SahasraSlope']},
  {'name': 'Defeat Yunobo', 'types': ['Temples', 'Combat']}],
bingoList[12] = [{'name': 'Upgrade A Horse', 'types': ['Stables']},
  {'name': '12 Shrines', 'types': ['Shrines']},
  {'name': 'Collect 3 Dragon Tear Memories',
   'types': ["Lindor'sBrow", 'Tears']},
  {'name': "Mattison's Independence SA",
   'types': ['SideAdventures', 'UlriMountain']},
  {'name': '15 Korok Seeds', 'types': ['Koroks']},
  {'name': '5 Gerudo Highlands Korok Seeds',
   'types': ['GerudoHighlands', 'Koroks']},
  {'name': "4 Lindor's Brow Shrines", 'types': ["Lindor'sBrow", 'Shrines']},
  {'name': '4 Sahasra Slope Shrines', 'types': ['SahasraSlope', 'Shrines']},
  {'name': '4 Eldin Canyon Shrines', 'types': ['EldinCanyon', 'Shrines']},
  {'name': '4 Ulri Mountain Shrines', 'types': ['UlriMountain', 'Shrines']},
  {'name': 'Cook Hylian Tomato Pizza', 'types': ['Recipes', 'MountLanayru']},
  {'name': '4 Proving Ground Shrines', 'types': ['Shrines', 'Travel']},
  {'name': 'Tunic of the Depths', 'types': ['Depths', 'Armor']},
  {'name': 'Glide Tights', 'types': ['Sky', 'Armor']},
  {'name': 'Bring Peace to Hebra! SA',
   'types': ['Combat', 'PikidaStonegrove']},
  {'name': 'Complete Shield Surfing Minigame', 'types': ['Minigames']},
  {'name': 'Amber Dealer SQ', 'types': ['SideQuests']},
  {'name': "Eldin's Colossal Fossil SQ", 'types': ['SideQuests']},
  {'name': 'Defend Kara Kara Bazaar', 'types': ['Temples', 'Combat']},
  {'name': 'Defeat Sludge Like', 'types': ['Temples', 'Combat']},
  {'name': 'Obtain All 4 Like Stones', 'types': ['Combat']},
  {'name': '6 Dog Treasure Chests', 'types': ['Stables', 'Travel']}],
bingoList[13] = [{'name': 'Defeat a Stalnox', 'types': ['Combat', 'Night']},
  {'name': 'Ruffian-Infested Village SA',
   'types': ['Combat', 'SideAdventures', 'RabellaWetlands']},
  {'name': 'Open 6 Enemy Camp Chests', 'types': ['Combat', 'Travel']},
  {'name': 'Buy a piece of armor from Gerudo Secret Club', 'types': ['Armor']},
  {'name': '4 Shrine + Lightroot Pairs', 'types': ['Shrines', 'Depths']},
  {'name': 'Create a weapon with a base attack power of 50',
   'types': ['Weapons']},
  {'name': 'Take a Selfie with a Dragon', 'types': ['Camera', 'Sky']},
  {'name': 'A Monsterous Collection II SA',
   'types': ['Koltin', 'Camera', 'Caves']},
  {'name': '15 points in the Ball Returning Minigame ',
   'types': ['Minigames', "Lindor'sBrow"]},
  {'name': 'Complete 3 Sand Seal Plushie Minigames',
   'types': ['Minigames', 'Travel']},
  {'name': 'For Our Princess! SA',
   'types': ['SideAdventures',
    'Penn',
    "Lindor'sBrow",
    'Stables',
    'EldinCanyon',
    'Combat']},
  {'name': 'Complete 3 Stable Picture Side Quests',
   'types': ['SideQuests', 'Stables', 'Camera', 'Travel']},
  {'name': 'Korok Fabric', 'types': ['Fabrics', 'Combat', 'ThyphloRuins']},
  {'name': 'The Gathering Pirates SQ',
   'types': ['SideQuests', 'Stables', 'Combat']}],
bingoList[14] = [{'name': 'Defeat a Molduga', 'types': ['Combat', 'Gerudo', 'Molduga']},
  {'name': 'Defeat 6 Minibosses', 'types': ['Combat']},
  {'name': 'Complete 10 Unique Types of Koroks', 'types': ['Koroks']},
  {'name': 'Retain 4 Fairies', 'types': ['Fairies']},
  {'name': '4 Mount Lanayru Shrines', 'types': ['MountLanayru', 'Shrines']},
  {'name': '4 Thyphlo Ruins Shrines', 'types': ['ThyphloRuins', 'Shrines']},
  {'name': 'Help Addison 10 times', 'types': ['Addison', 'Travel']},
  {'name': 'Cook Noble Pursuit', 'types': ['Recipes', 'GerudoCanyon']},
  {'name': '6 Energy Wells', 'types': ['Depths']},
  {'name': 'Serenade to a Great Fairy SA (Woodland)',
   'types': ['EldinCanyon', 'Stables', 'SideAdventures']},
  {'name': 'The Mayoral Election SA',
   'types': ['SideAdventures', 'MountLanayru']},
  {'name': 'The Abandoned Laborer SQ', 'types': ['SideQuests', 'EldinCanyon']},
  {'name': "The Fort at Ja'Abu Ridge SQ",
   'types': ['SideQuests', 'Combat', 'UplandZorana']},
  {'name': 'Offer Fruit at 4 Cherry Blossom Trees',
   'types': ['CherryBlossom', 'Travel']},
  {'name': "Full Soldier's Set", 'types': ['Armor', 'LookoutLanding']}],
bingoList[15] = [{'name': 'Serenade to Cotera SA (Dueling Peaks)',
   'types': ['SahasraSlope', 'Stables', 'SideAdventures']},
  {'name': '10 Bubbul Gems', 'types': ['Caves', 'Koltin']},
  {'name': 'Obtain 8 Character Profiles ', 'types': ['Temples']},
  {'name': 'Seeking the Pirate Hideout SQ',
   'types': ['SideQuests', 'Combat', 'RabellaWetlands']},
  {'name': 'Report 15 Wells to Fera', 'types': ['Stables']},
  {'name': "Restyle a Horse's Mane (16 Pony Points)",
   'types': ['Stables', 'Travel']},
  {'name': '4 Shrines in Caves', 'types': ['Caves', 'Shrines', 'Combat']},
  {'name': 'Complete 5 Stable Picture Side Quests',
   'types': ['SideQuests', 'Stables', 'Camera', 'Travel']},
  {'name': 'Build a Dream Home with 3 Rooms', 'types': ['SideQuests']},
  {'name': 'The Moonlit Princess SQ',
   'types': ['SideQuests', 'Camera', 'UplandZorana']}],
bingoList[16] = [{'name': 'Serenade to Mija SA (Hebra)',
   'types': ['PikidaStonegrove', 'Stables', 'SideAdventures']},
  {'name': 'Serenade to Kaysa SA (Outskirt)',
   'types': ['HyruleField', 'Stables', 'SideAdventures']},
  {'name': '16 Shrines', 'types': ['Shrines']},
  {'name': '10 Shrine Quests', 'types': ['Shrines']},
  {'name': '5 Fabrics from Sayge',
   'types': ['Fabrics', 'MountLanayru', 'Camera']},
  {'name': 'Cook Dark Stew', 'types': ['Recipes']},
  {'name': 'Mystic Robes', 'types': ['Armor']},
  {'name': 'Retain 15 Unique Zonai Devices', 'types': ['Sky']},
  {'name': 'A Monsterous Collection III SA',
   'types': ['Koltin', 'Camera', 'Talus']},
  {'name': "Hebra's Colossal Fossil SQ",
   'types': ['SideQuests', 'RosproPass']},
  {'name': 'Ousting the Giants SQ',
   'types': ['SideQuests', 'Combat', 'PoplaFoothills']}],
bingoList[17] = [{'name': 'Defeat a Frost and Igneo Talus',
   'types': ['Combat', 'Hebra', 'Eldin', 'Talus']},
  {'name': 'Defeat a Blue and Black Hinox', 'types': ['Combat']},
  {'name': 'Defeat Kohga Twice', 'types': ['Combat', 'Depths']},
  {'name': "Obtain Biggoron's Sword ",
   'types': ['Combat', 'Depths', 'Weapons']},
  {'name': 'Full Awakening Set',
   'types': ['Armor', 'HyruleField', "Lindor'sBrow"]},
  {'name': 'Complete 10 Side Quests/Adventures', 'types': ['SideQuests']},
  {'name': "Discover Goflam's Lavafalls", 'types': ['Lavafalls', 'Hebra']},
  {'name': 'Discover Sturnida Lavafalls', 'types': ['Lavafalls', 'Hebra']},
  {'name': 'Complete 7 Stable Picture Side Quests',
   'types': ['SideQuests', 'Stables', 'Camera', 'Travel']},
  {'name': 'The Missing Owner SQ',
   'types': ['SideQuests', 'Combat', 'GerudoCanyon']}],
bingoList[18] = [{'name': 'Defeat an Armored Lynel', 'types': ['Combat']},
  {'name': 'Defeat a Molduga while riding a Sand Seal ',
   'types': ['Combat', 'GerudoCanyon', 'Molduga']},
  {'name': 'Defeat a Flame Gleeok', 'types': ['Combat', 'Gleeok']},
  {'name': 'Activate 10 Lightroots', 'types': ['Depths']},
  {'name': 'Collect 5 Dragon Tear Memories',
   'types': ["Lindor'sBrow", 'Tears']},
  {'name': '4 Gerudo Highlands Shrines',
   'types': ['GerudoHighlands', 'Shrines']},
  {'name': "Obtain Fierce Deity's Sword",
   'types': ['Armor',
    'Weapons',
    'UlriMountain',
    'LookoutLanding',
    'EldinCanyon']},
  {'name': "Discover Sherfin's Lavafalls", 'types': ['Lavafalls', 'Hebra']},
  {'name': 'A Monsterous Collection IV SA',
   'types': ['Koltin', 'Camera', 'Frox', 'Depths']},
  {'name': 'Whirly Swirly Things SQ',
   'types': ['SideQuests', 'Camera', 'ThyphloRuins', 'Combat']}],
bingoList[19] = [{'name': 'Defeat a Thunder Gleeok', 'types': ['Combat', 'Gleeok']},
  {'name': 'Complete a Depths Colosseum', 'types': ['Combat', 'Depths']},
  {'name': 'Obtain a Gloom Club', 'types': ['Combat', 'PhantomGanon']},
  {'name': 'Obtain 14 Character Profiles', 'types': ['Temples']},
  {'name': '15 Shrine Quests', 'types': ['Shrines']},
  {'name': 'Create a weapon with a base attack power of 90',
   'types': ['Weapons', 'Combat']}],
bingoList[20] = [{'name': '10 Autobuild Schematics', 'types': ['Depths', 'Travel']},
  {'name': '15 Bubbul Gems', 'types': ['Caves', 'Koltin']},
  {'name': 'Defeat a Frost Gleeok', 'types': ['Combat', 'Gleeok']},
  {'name': 'Lurelin Village Restoration Project SA',
   'types': ['SideAdventures', 'RabellaWetlands']},
  {'name': 'Complete the Advanced Course in Tarrey Town',
   'types': ['UlriMountain']},
  {'name': '12 Shrines in the Sky', 'types': ['Sky', 'Shrines']}],
bingoList[21] = [{'name': '9 Energy Wells', 'types': ['Depths']},
  {'name': 'Help Addison 15 times', 'types': ['Addison', 'Travel']},
  {'name': 'Deliver Mineru’s Mask to the Construct Factory',
   'types': ['Temples', 'Depths', 'Sky']},
  {'name': 'Obtain White Sword of the Sky',
   'types': ['SideQuests', 'Weapons', 'Sky']},
  {'name': "Gerudo's Colossal Fossil SQ", 'types': ['SideQuests']},
  {'name': "Knight's Saddle & Bridle (23 Pony Points)",
   'types': ['Stables', 'Travel']}],
bingoList[22] = [{'name': "Obtain 8 Sage's Wills", 'types': ['Sky', 'Travel']},
  {'name': 'Obtain the Evil Spirit Chestpiece',
   'types': ['Sky', 'Depths', 'Combat', 'Labyrinth', 'UlriMountain']},
  {'name': 'Obtain the Evil Spirit Greaves',
   'types': ['Sky', 'Depths', 'Combat', 'Labyrinth', 'Hebra']},
  {'name': 'Obtain the Evil Spirit Mask',
   'types': ['Sky', 'Depths', 'Combat', 'Labyrinth', 'Gerudo']},
  {'name': '10 Fabrics from Sayge',
   'types': ['Fabrics', 'MountLanayru', 'Camera']},
  {'name': 'Retain 25 Unique Zonai Devices', 'types': ['Sky']},
  {'name': 'Talk to the 4 Sage Descendants',
   'types': ['RosproPass', 'EldinCanyon', 'GerudoCanyon', 'UplandZorana']}],
bingoList[23] = [{'name': "Obtain a Sage's Vow ", 'types': ['Temples', 'Combat']},
  {'name': "Majora's Mask", 'types': ['Combat', 'Depths', 'Armor']},
  {'name': 'Defeat a King Gleeok', 'types': ['Combat', 'Gleeok']},
  {'name': 'Complete 3 Depths Colosseum', 'types': ['Combat', 'Depths']},
  {'name': 'Lightning Helm ',
   'types': ['Armor', 'GerudoHighlands', 'HyruleField']},
  {'name': 'Defeat an enemy with Earthwake',
   'types': ['GerudoHighlands', 'HyruleField']},
  {'name': 'Defeat Kohga Three Times', 'types': ['Combat', 'Depths']},
  {'name': 'Complete 15 Side Quests/Adventures', 'types': ['SideQuests']},
  {'name': 'Tunic of Memories', 'types': ['Depths', 'Armor']},
  {'name': 'A Monsterous Collection V SA',
   'types': ['Koltin', 'Camera', 'Gleeok']}],
bingoList[24] = [{'name': 'Defeat Wind Temple Boss by only Skydiving',
   'types': ['Combat', 'Temples', 'RosproPass']},
  {'name': "Defeat Fire Temple Boss without Yunobo's Ability",
   'types': ['Combat', 'Temples', 'EldinCanyon']},
  {'name': "Defeat Water Temple Boss without Sidon's Ability",
   'types': ['Combat', 'Temples', 'UplandZorana']},
  {'name': 'Complete Lightning Temple without using Ascend',
   'types': ['Combat', 'Temples', 'GerudoCanyon']},
  {'name': "Obtain a Champion's Weapon", 'types': ['Weapons', 'Temples']},
  {'name': 'The Owl Protected by Dragons SA',
   'types': ['Temples', 'RosproPass']},
  {'name': 'The Corridor between Two Dragons SA',
   'types': ['Temples', 'EldinCanyon']},
  {'name': 'The Six Dragons SA', 'types': ['Temples', 'UplandZorana']},
  {'name': 'The Long Dragon SA', 'types': ['Temples', 'GerudoCanyon']}],
bingoList[25] = [{'name': 'Obtain a Solemn Vow', 'types': ['Temples', 'Sky']},
  {'name': 'Activate 20 Lightroots', 'types': ['Depths']},
  {'name': 'Collect 12 Dragon Tear Memories',
   'types': ["Lindor'sBrow", 'Tears']},
  {'name': 'Defeat Kohga Four Times', 'types': ['Combat', 'Depths']},
  {'name': 'Obtain the Master Sword ', 'types': ['Shrines', 'Weapons']},
  {'name': 'Presenting: Sensor +! SA',
   'types': ['SideAdventures', 'Camera', 'Temples', 'Travel']},
  {'name': 'Obtain Travel Medallion', 'types': ['Temples', 'MountLanayru']},
  {'name': "Grab Zelda's Hand", 'types': ['Combat']}]
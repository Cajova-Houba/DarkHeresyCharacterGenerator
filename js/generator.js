/**
 * This script contains all logic behind generating the character and displaying the data on the page.
 */

/**
 * n-sided dice.
 *
 * @param sides
 */
function dn(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

/**
 * 100-sided dice.
 */
function d100() {
    return dn(100);
}

/**
 * 10-sided dice.
 */
function d10() {
    return dn(10);
}

/**
 * 5-sided dice.
 */
function d5() {
    return dn(5);
}

/**
 * World names.
 *
 * @type {{Feral: string, Hive: string, Imperial: string, VoidBorn: string}}
 */
const Worlds = {
    Feral: 'Feral World',
    Hive: 'Hive World',
    Imperial: 'Imperial World',
    VoidBorn: 'Void Born'
};

const Genders = {
    Male: 'Male',
    Female: 'Female'
};

function _namesByGender() {
    const names = {};
    names[Genders.Male] = maleNames;
    names[Genders.Female] = femaleNames;
    return names;
}
const Names = _namesByGender();

/**
 * Possible career paths.
 * @type {{Adept: string, Arbitrator: string, Assassin: string, Cleric: string, Guardsman: string, ImperialPsyker: string, Scum: string, TechPriest: string}}
 */
const CareerPathNames = {
    Adept: 'Adept',
    Arbitrator: 'Arbitrator',
    Assassin: 'Assassin',
    Cleric: 'Cleric',
    Guardsman: 'Guardsman',
    ImperialPsyker: 'Imperial Psyker',
    Scum: 'Scum',
    TechPriest: 'Tech-Priest'
};

/**
 * Ranks for each career path.
 *
 * @type {{}}
 */
function _careerPathRanks() {
    const ranks = {};
    ranks[CareerPathNames.Adept] = ['Archivist'];
    ranks[CareerPathNames.Arbitrator] = ['Trooper'];
    ranks[CareerPathNames.Assassin] = ['Sell-Steel'];
    ranks[CareerPathNames.Cleric] = ['Novice'];
    ranks[CareerPathNames.Guardsman] = ['Conscript'];
    ranks[CareerPathNames.ImperialPsyker] = ['Sanctionite'];
    ranks[CareerPathNames.Scum] = ['Dreg'];
    ranks[CareerPathNames.TechPriest] = ['Technographer'];

    return ranks;
}
const CareerPathRanks = _careerPathRanks();

function _careerPathStartingSkills() {
    const startingSkills = {};
    startingSkills[CareerPathNames.Adept] = [
        Skills.SpeakLanguage.withDetail('Low Gothic'),
        Skills.Literacy,
        [Skills.Trade.withDetail('Copyist'), Skills.Trade.withDetail('Valet')],
        Skills.CommonLore.withDetail('Imperium'),
        [Skills.ScholasticLore.withDetail('Legend'), Skills.CommonLore.withDetail('Tech')]
    ];
    startingSkills[CareerPathNames.Arbitrator] = [
        Skills.SpeakLanguage.withDetail('Low Gothic'),
        Skills.Literacy,
        Skills.CommonLore.withDetail('Adeptus Arbites'),
        Skills.CommonLore.withDetail('Imperium'),
        Skills.Inquiry
    ];
    startingSkills[CareerPathNames.Assassin] = [
        Skills.SpeakLanguage.withDetail('Low Gothic'),
        Skills.Awareness,
        Skills.Dodge
    ];
    startingSkills[CareerPathNames.Cleric] = [
        Skills.SpeakLanguage.withDetail('Low Gothic'),
        Skills.CommonLore.withDetail('Imperial Creed'),
        Skills.Literacy,
        [Skills.Performer.withDetail('Singer'), Skills.Trade.withDetail('Copyist')],
        [Skills.Trade.withDetail('Cook'), Skills.Trade.withDetail('Valet')],
    ];
    startingSkills[CareerPathNames.Guardsman] = [
        Skills.SpeakLanguage.withDetail('Low Gothic'),
        [Skills.Drive.withDetail('Ground Vehicle'), Skills.Swim]
    ];
    startingSkills[CareerPathNames.ImperialPsyker] = [
        Skills.SpeakLanguage.withDetail('Low Gothic'),
        Skills.Psyniscience,
        Skills.Invocation,
        [Skills.Trade.withDetail('Merchant'), Skills.Trade.withDetail('Soothsayer')],
        Skills.Literacy
    ];
    startingSkills[CareerPathNames.Scum] = [
        Skills.SpeakLanguage.withDetail('Low Gothic'),
        Skills.Blather,
        [Skills.Charm, Skills.Dodge],
        Skills.Deceive,
        Skills.Awareness,
        Skills.CommonLore.withDetail('Imperium')
    ];
    startingSkills[CareerPathNames.TechPriest] = [
        Skills.SpeakLanguage.withDetail('Low Gothic'),
        Skills.TechUse,
        Skills.Literacy,
        Skills.SecretTongue.withDetail('Tech'),
        [Skills.Trade.withDetail('Scrimshawer'), Skills.Trade.withDetail('Copyist')]
    ];
    return startingSkills;
}

/**
 * Contains starting skills for every career path. If there's an array instead
 * of one skill, it means that there's a possiblity to choose from starting skills.
 */
const CareerPathStartingSkills = _careerPathStartingSkills();

/**
 * Class for players career.
 */
class Career {

    constructor() {
        this.careerPath= '';
        this.rank = '';
    }

    /**
     * Generates the career path and starting rank for given homeworld.
     *
     * @param homeWorld
     */
    generateCareerPath(homeWorld) {
        const roll = d100();
        switch (homeWorld) {
            case Worlds.Feral:
                this.generateFeralWorldCareerPath(roll);
                break;

            case Worlds.Hive:
                this.generateHiveWorldCareerPath(roll);
                break;

            case Worlds.Imperial:
                this.generateImperialWorldCareerPath(roll);
                break;

            case Worlds.VoidBorn:
                this.generateVoidBornCareerPath(roll);
                break;
        }

        this.rank = CareerPathRanks[this.careerPath][0];
    }

    /**
     * Generates career path for given roll value for Feral World.
     *
     * @param rollValue Number in range 1-100.
     */
    generateFeralWorldCareerPath(rollValue) {
        if (rollValue < 31) {
            this.careerPath = CareerPathNames.Assassin;
        } else if (rollValue < 81) {
            this.careerPath = CareerPathNames.Guardsman;
        } else if (rollValue < 91) {
            this.careerPath = CareerPathNames.ImperialPsyker;
        } else {
            this.careerPath = CareerPathNames.Scum;
        }
    }

    /**
     * Generates career path for given roll value for Hive World.
     *
     * @param rollValue Number in range 1-100.
     */
    generateHiveWorldCareerPath(rollValue) {
        if (rollValue < 18) {
            this.careerPath = CareerPathNames.Arbitrator;
        } else if (rollValue < 21) {
            this.careerPath = CareerPathNames.Assassin
        } else if (rollValue < 26) {
            this.careerPath = CareerPathNames.Cleric;
        } else if (rollValue < 36) {
            this.careerPath = CareerPathNames.Guardsman;
        } else if (rollValue < 41) {
            this.careerPath = CareerPathNames.ImperialPsyker;
        } else if (rollValue < 90) {
            this.careerPath = CareerPathNames.Scum;
        } else {
            this.careerPath = CareerPathNames.TechPriest;
        }
    }

    /**
     * Generates career path for given roll value for Imperial World.
     *
     * @param rollValue Number in range 1-100.
     */
    generateImperialWorldCareerPath(rollValue) {
        if (rollValue < 13) {
            this.careerPath = CareerPathNames.Adept;
        } else if (rollValue < 26) {
            this.careerPath = CareerPathNames.Arbitrator;
        } else if (rollValue < 39) {
            this.careerPath = CareerPathNames.Assassin
        } else if (rollValue < 53) {
            this.careerPath = CareerPathNames.Cleric;
        } else if (rollValue < 66) {
            this.careerPath = CareerPathNames.Guardsman;
        } else if (rollValue < 80) {
            this.careerPath = CareerPathNames.ImperialPsyker;
        } else if (rollValue < 91) {
            this.careerPath = CareerPathNames.Scum;
        } else {
            this.careerPath = CareerPathNames.TechPriest;
        }
    }

    /**
     * Generates career path for given roll value for Void Born.
     *
     * @param rollValue Number in range 1-100.
     */
    generateVoidBornCareerPath(rollValue) {
        if (rollValue < 11) {
            this.careerPath = CareerPathNames.Adept;
        } else if (rollValue < 21) {
            this.careerPath = CareerPathNames.Arbitrator;
        } else if (rollValue < 26) {
            this.careerPath = CareerPathNames.Assassin
        } else if (rollValue < 36) {
            this.careerPath = CareerPathNames.Cleric;
        } else if (rollValue < 76) {
            this.careerPath = CareerPathNames.ImperialPsyker;
        } else if (rollValue < 86) {
            this.careerPath = CareerPathNames.Scum;
        } else {
            this.careerPath = CareerPathNames.TechPriest;
        }
    }
}

function _fatePointsByWorld() {
    const fatePoints = {};
    fatePoints[Worlds.Feral] = [1, 2, 2];
    fatePoints[Worlds.Hive] = [1, 2, 3];
    fatePoints[Worlds.Imperial] = [2, 2, 3];
    fatePoints[Worlds.VoidBorn] = [2, 3, 3];

    return fatePoints;
}
const FatePoints = _fatePointsByWorld();

class Build {
    constructor(description, maleHeightWeight, femaleHeightWeight) {
        this.description = description;
        this.height = {};
        this.height[Genders.Male] = maleHeightWeight.height;
        this.height[Genders.Female] = femaleHeightWeight.height;
        this.weight = {};
        this.weight[Genders.Male] = maleHeightWeight.weight;
        this.weight[Genders.Female] = femaleHeightWeight.weight;
    }
}

function _buildsByWorld() {
    const builds = {};
    builds[Worlds.Feral] = [
        new Build('Rangy', {height: 1.9, weight: 65}, {height: 1.8, weight: 60}),
        new Build('Lean', {height: 1.75, weight: 60}, {height: 1.65, weight: 55}),
        new Build('Muscular', {height: 1.85, weight: 85}, {height: 1.7, weight: 70}),
        new Build('Squat', {height: 1.65, weight: 80}, {height: 1.55, weight: 70}),
        new Build('Strapping', {height: 2.1, weight: 120}, {height: 2.0, weight: 100}),
    ];
    builds[Worlds.Hive] = [
        new Build('Runt', {height: 1.6, weight: 45}, {height: 1.55, weight: 40}),
        new Build('Scrawny', {height: 1.70, weight: 55}, {height: 1.60, weight: 50}),
        new Build('Wiry', {height: 1.75, weight: 65}, {height: 1.65, weight: 55}),
        new Build('Lanky', {height: 1.80, weight: 65}, {height: 1.70, weight: 60}),
        new Build('Brawny', {height: 1.75, weight: 80}, {height: 1.65, weight: 75}),
    ];
    builds[Worlds.Imperial] = [
        new Build('Slender', {height: 1.75, weight: 65}, {height: 1.65, weight: 60}),
        new Build('Svelte', {height: 1.85, weight: 70}, {height: 1.75, weight: 65}),
        new Build('Fit', {height: 1.75, weight: 70}, {height: 1.65, weight: 60}),
        new Build('Well-built', {height: 1.90, weight: 90}, {height: 1.80, weight: 80}),
        new Build('Stocky', {height: 1.80, weight: 100}, {height: 1.70, weight: 90}),
    ];
    builds[Worlds.VoidBorn] = [
        new Build('Skeletal', {height: 1.75, weight: 55}, {height: 1.7, weight: 50}),
        new Build('Stunted', {height: 1.65, weight: 55}, {height: 1.55, weight: 45}),
        new Build('Gaunt', {height: 1.80, weight: 60}, {height: 1.75, weight: 60}),
        new Build('Gangling', {height: 2.0, weight: 80}, {height: 1.85, weight: 70}),
        new Build('Spindly', {height: 2.1, weight: 75}, {height: 1.95, weight: 70}),
    ];

    return builds;
}
const Builds = _buildsByWorld();

class AppearanceColour {
    constructor(skin, hair, eyes) {
        this.skin = skin;
        this.hair = hair;
        this.eyes = eyes;
    }
}

function _coloursByWorld() {
    const colours = {};
    colours[Worlds.Feral] = [
        new AppearanceColour('Dark', 'Red', 'Blue'),
        new AppearanceColour('Tan', 'Blond', 'Grey'),
        new AppearanceColour('Fair', 'Brown', 'Brown'),
        new AppearanceColour('Ruddy', 'Black', 'Green'),
        new AppearanceColour('Bronze', 'Grey', 'Yellow'),
    ];
    colours[Worlds.Hive] = [
        new AppearanceColour('Dark', 'Brown', 'Blue'),
        new AppearanceColour('Tan', 'Mousy', 'Grey'),
        new AppearanceColour('Fair', 'Dyed', 'Brown'),
        new AppearanceColour('Ruddy', 'Grey', 'Green'),
        new AppearanceColour('Stained', 'Black', 'Lenses'),
    ];
    colours[Worlds.Imperial] = [
        new AppearanceColour('Dark', 'Dyed', 'Blue'),
        new AppearanceColour('Tan', 'Blond', 'Grey'),
        new AppearanceColour('Fair', 'Brown', 'Brown'),
        new AppearanceColour('Ruddy', 'Black', 'Green'),
        new AppearanceColour('Dyed', 'Grey', 'Lenses'),
    ];
    colours[Worlds.VoidBorn] = [
        new AppearanceColour('Porcelain', 'Ginger', 'Watery Blue'),
        new AppearanceColour('Fair', 'Blond', 'Grey'),
        new AppearanceColour('Bluish', 'Copper', 'Black'),
        new AppearanceColour('Greyish', 'Black', 'Green'),
        new AppearanceColour('Milky', 'Auburn', 'Violet'),
    ];
    return colours;
}
const AppearanceColours = _coloursByWorld();


function _quirksByWorld() {
    const quirks = [];
    quirks[Worlds.Feral] = [
        'Hairy Knuckles', 'Joined Eyebrows', 'Warpaint', 'Hands like Spatchcocks',
        'Filed Teeth', 'Beetling Brows', 'Musky Smell', 'Hairy',
        'Ripped Ears', 'Long Fingernails', 'Tribal Tattooing', 'Scarring',
        'Piercing', 'Cat\'s Eyes', 'Small Head', 'Thick Jaw'
    ];

    quirks[Worlds.Hive] = [
        'Pallid', 'Grimy Skin', 'Outrageous Hair', 'Rotten Teeth',
        'Electoo', 'Piercing', 'Set of Piercings', 'Hacking Cough',
        'Tattoos', 'Bullet Wound Scar', 'Nervous Tic', 'Large Mole',
        'Pollution Scars', 'Hump', 'Small Hands', 'Chemical Smell'
    ];

    quirks[Worlds.Imperial] = [
        'Missing Digit', 'Aquiline Nose', 'Warts', 'Duelling Scar',
        'Pierced Nose', 'Nervous Tic', 'Aquila Tattoo', 'Faint Smell',
        'Pox Marks', 'Devotional Scar', 'Electoo', 'Quivering Fingers',
        'Pierced Ears', 'Sinister Boil', 'Make-up', 'Slouched Gait'
    ];

    quirks[Worlds.VoidBorn] = [
        'Pallid', 'Bald', 'Long Fingers', 'Tiny Ears',
        'Spindly Limbs', 'Yellow Fingernails', 'Stumpy Teeth',
        'Widely Spaced Eyes', 'Large Head', 'Curved Spine', 'Hairless',
        'Elegant Hands', 'Flowing Hair', 'Albino', 'Limping Gait', 'Stooped Stance'
    ];

    return quirks;
}
const Quirks = _quirksByWorld();

const Divinations = [
    "Mutation without, corruption within.",
    "Only the insane have strength enough to prosper. Only those who prosper may judge what is sane.",
    "Sins hidden in the heart turn all to decay.",
    "Innocence is an illusion.",
    "Dark dreams lie upon the heart.",
    "The pain of the bullet is ecstasy compared to damnation.",
    "Kill the alien before it can speak its lies.",
    "Truth is subjective.",
    "Know the mutant; kill the mutant.",
    "Even a man who has nothing can still offer his life.",
    "If a job is worth doing it is worth dying for.",
    "Only in death does duty end.",
    "A mind without purpose will wander in dark places.",
    "There are no civilians in the battle for survival.",
    "Violence solves everything.",
    "To war is human.",
    "Die if you must, but not with your spirit broken.",
    "The gun is mightier than the sword.",
    "Be a boon to your brothers and bane to your enemies.",
    "Men must die so that Man endures.",
    "In the darkness, follow the light of Terra.",
    "The only true fear is of dying with your duty not done.",
    "Thought begets Heresy; Heresy begets Retribution.",
    "The wise man learns from the deaths of others.",
    "A suspicious mind is a healthy mind.",
    "Trust in your fear.",
    "There is no substitute for zeal.",
    "Do not ask why you serve. Only ask how."
];

/**
 * Players wounds.
 */
class Wounds {

    constructor() {
        this.wounds = [];
    }

    /**
     * Generates empty slots for wounds.
     * @param world Character's home world.
     */
    generateForWorld(world) {
        const roll = d5();
        console.debug(`Wounds roll: ${roll}`);
        let base = 0;
        switch (world) {
            case Worlds.Feral:
                base = 9;
                break;

            case Worlds.Hive:
                base = 8;
                break;

            case Worlds.Imperial:
                base = 8;
                break;

            case Worlds.VoidBorn:
                base = 6;
                break;
        }

        this.wounds = [];
        for(let i = 0; i < roll+base; i++){
            this.wounds.push('');
        }
    }
}

class Player {
    constructor() {
        this.characterName = '';
        this.homeWorld = '';
        this.career = new Career();
        this.divination = '';
        this.quirk = '';
        this.gender = '';
        this.build = '';
        this.height = 0.0;
        this.weight = 0.0;
        this.skinColour = '';
        this.hairColour = '';
        this.eyeColour = '';
        this.age = {description: '', value: ''};
        this.characteristics = new Characteristics();
        this.wounds = new Wounds();
        this.fatePoints = 0;
        this.skillSet = [];
    }

    /**
     * Generates random values for this player.
     */
    generateCharacter() {
        console.debug('Generating new character.');

        // 1. generate the home world
        this.generateHomeWorld();

        // 2. generate the characteristics
        this.characteristics.generateForWorld(this.homeWorld);

        // 3. generate the career path
        this.career.generateCareerPath(this.homeWorld);
        this.generateStartingSkills();

        // 4. stats and equip
        this.wounds.generateForWorld(this.homeWorld);
        this.generateFatePoints();

        // 5. basic info
        this.generateBasicInfo();

        console.debug('Done.');
    }

    /**
     * Generates home world accordingly to following table:
     *
     * 1-20 Feral World
     * 21-45 Hive World
     * 46-90 Imperial World
     * 91-100 Void Born
     */
    generateHomeWorld() {
        const roll = d100();
        console.debug(`Home world roll: ${roll}`);
        if (roll < 21) {
            this.homeWorld = Worlds.Feral;
        } else if (roll < 46) {
            this.homeWorld = Worlds.Hive;
        } else if (roll < 91) {
            this.homeWorld = Worlds.Imperial;
        } else {
            this.homeWorld = Worlds.VoidBorn;
        }
    }

    /**
     * Generates starting skills accordingly to the career path.
     */
    generateStartingSkills() {
        CareerPathStartingSkills[this.career.careerPath].forEach(startingSkill => {
           if (Array.isArray(startingSkill)) {
                console.debug(`Choosing from ${startingSkill}`);
                const choice = dn(startingSkill.length) - 1;
                this.skillSet.push(startingSkill[choice]);
           } else {
               this.skillSet.push(startingSkill);
           }
        });
    }

    generateFatePoints() {
        const roll = d10();
        console.debug(`Fate points roll: ${roll}`);

        this.fatePoints = FatePoints[this.homeWorld][(roll - 1) / 3];
    }

    /**
     * Generates basic info such as name, appearance, gender, ...
     */
    generateBasicInfo() {
        this.generateGender();
        this.generateName();
        this.generateAppearance();
    }

    generateName() {
        const roll1 = d100();
        const roll2 = d5();

        console.debug(`Name roll 1: ${roll1}`);
        console.debug(`Name roll 2: ${roll2}`);

        let nameNum = 0;
        let nameRollBoundaries = [4,7,10,14,17,21,24,28,31,34,38,41,45,48,51,55,58,61,64,67,70,73,76,80,83,86,90,94,97,101];
        while(roll1 >= nameRollBoundaries[nameNum]) {
            nameNum++;
        }

        this.characterName = Names[this.gender][roll2 - 1][nameNum];
    }

    generateGender() {
        const roll = d100();
        console.debug(`Gender roll: ${roll}`);
        if (d100() < 51) {
            this.gender = Genders.Male;
        } else {
            this.gender = Genders.Female;
        }
    }

    generateAppearance() {
        const roll = d100();
        console.debug(`Appearance - build roll: ${roll}`);

        // convert 1-100 to 0-4 for better access to build array
        const buildNum = Math.floor((roll - 1) / 20);
        this.build = Builds[this.homeWorld][buildNum].description;
        this.height = Builds[this.homeWorld][buildNum].height[this.gender];
        this.weight = Builds[this.homeWorld][buildNum].weight[this.gender];

        this.generateAge();
        this.generateColours();
        this.generateQuirk();
        this.generateDivination();
    }

    generateAge() {
        const roll1 = d100();
        const roll2 = d10();
        console.debug(`Appearance - age roll 1: ${roll1}`);
        console.debug(`Appearance - age roll 2: ${roll2}`);

        let baseAge = 0;
        switch (this.homeWorld) {
            case (Worlds.Feral):
                if (roll1 < 71) {
                    this.age.description = 'Warrior';
                    baseAge = 15;
                } else {
                    this.age.description = 'Old One';
                    baseAge = 25;
                }
                break;

            case (Worlds.Hive):
                if (roll1 < 31) {
                    this.age.description = 'Nipper';
                    baseAge = 15;
                } else if (roll1 < 91) {
                    this.age.description = 'Adult';
                    baseAge = 25;
                } else {
                    this.age.description = 'Old Timer';
                    baseAge = 35;
                }
                break;

            case (Worlds.Imperial):
                if (roll1 < 51) {
                    this.age.description = 'Stripling';
                    baseAge = 20;
                } else if (roll1 < 81) {
                    this.age.description = 'Mature';
                    baseAge = 30;
                } else {
                    this.age.description = 'Veteran';
                    baseAge = 40;
                }
                break;

            case (Worlds.VoidBorn):
                if (roll1 < 41) {
                    this.age.description = 'Youth';
                    baseAge = 15;
                } else if (roll1 < 71) {
                    this.age.description = 'Mature';
                    baseAge = 20;
                } else {
                    this.age.description = 'Methuselah';
                    baseAge = 50;
                }
                break;
        }

        this.age.value = baseAge + roll2;
    }

    generateColours() {
        const roll = d100();
        console.debug(`Appearance - colour roll: ${roll}`);

        // from 1-100 to 0-5
        const rollNum = Math.floor((roll + 1) / 20);
        this.skinColour = AppearanceColours[this.homeWorld][rollNum].skin;
        this.hairColour = AppearanceColours[this.homeWorld][rollNum].hair;
        this.eyeColour = AppearanceColours[this.homeWorld][rollNum].eyes;
    }

    generateQuirk() {
        const roll = d100();
        console.debug(`Appearance - quirk roll: ${roll}`);
        let quirkNum = 0;
        const quirkRollBoundaries = [7,14,21,28,35,42,49,56,62,69,76,83,88,89,96,101];
        while (roll >= quirkRollBoundaries[quirkNum]) {
            quirkNum++;
        }
        this.quirk = Quirks[this.homeWorld][quirkNum];
    }

    generateDivination() {
        const roll = d100();
        console.debug(`Divination roll: ${roll}`);

        let divinationNum = 0;
        const rollBoundaries = [2,4,8,9,12,16,19,22,27,31,34,39,43,46,47,51,55,59,63,67,71,75,80,86,91,85,98,100,101];
        while (roll >= rollBoundaries[divinationNum]) {
            divinationNum++;
        }
        this.divination = Divinations[divinationNum];
    }
}

function setSpanText(spanId, value) {
    document.getElementById(spanId).innerText = value;
}

function setSkillElement(elemId) {
    document.getElementById(elemId).className = "bg-primary";
}

function resetSkillElement(elemId) {
    const elem = document.getElementById(elemId);
    if (elem !== null) {
        document.getElementById(elemId).className = "";
    }
}

/**
 * Generates new player.
 */
function generatePlayer() {
    const player = new Player();
    player.generateCharacter();

    setSpanText('characterName', player.characterName);
    setSpanText('homeWorld', player.homeWorld);
    setSpanText('careerPath', player.career.careerPath);
    setSpanText('rank', player.career.rank);
    setSpanText('gender', player.gender);
    setSpanText('build', player.build);
    setSpanText('height', player.height);
    setSpanText('weight', player.weight);
    setSpanText('age', `${player.age.description} (${player.age.value})`);
    setSpanText('skinColour', player.skinColour);
    setSpanText('hairColour', player.hairColour);
    setSpanText('eyeColour', player.eyeColour);
    setSpanText('quirk', player.quirk);
    setSpanText('divination', player.divination);

    const characteristics = [
        'weaponSkill', 'ballisticSkill', 'strength',
        'toughness', 'agility', 'intelligence',
        'perception', 'willpower', 'fellowship'
    ];
    characteristics.forEach(char => {
       setSpanText(char, `${player.characteristics[char].getValue()} (${player.characteristics[char].getSignificance()})`);
    });

    // reset all skill elements
    Object.keys(Skills).forEach(key => {
        if (Skills[key].type === SkillType.Advanced) {
            setSpanText(`${Skills[key].id}Detail`, '');
        }
        resetSkillElement(`${Skills[key].id}0`);
        resetSkillElement(`${Skills[key].id}1`);
        resetSkillElement(`${Skills[key].id}2`);
    })

    // basic skills
    player.skillSet.forEach(skill => {
        const id = `${skill.id}${skill.level}`;
        setSkillElement(id);
        if (skill.detail) {
            const detailId = `${skill.id}Detail`;
            setSpanText(detailId, `(${skill.detail})`);
        }

    });

}
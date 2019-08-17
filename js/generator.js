/**
 * 100-sided dice.
 */
function d100() {
    return Math.floor(Math.random() * 100) + 1;
}

/**
 * 10-sided dice.
 */
function d10() {
    return Math.floor(Math.random() * 10) + 1;
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

/**
 * One particular characteristic.
 */
class Characteristic {

    constructor() {
        this.base = 0;
        this.worldModifier = 0;
    }

    getValue() {
        return this.base + this.worldModifier;
    }

    /**
     * Returns the description of this characteristic.
     */
    getSignificance() {
        const value = this.getValue();
        if (value < 10) {
            return 'n00b';
        } else if (value < 15) {
            return 'Feeble';
        } else if (value < 20) {
            return 'Inferior';
        } else if (value < 35) {
            return 'Average';
        } else if (value < 40) {
            return 'Superior';
        } else if (value < 45) {
            return 'Great';
        } else if (value < 50) {
            return 'Magnificent';
        } else {
            return 'Heroic';
        }
    }

}


/**
 * A set of characteristics.
 */
class Characteristics {
    constructor() {
        this.weaponSkill = new Characteristic();
        this.ballisticSkill = new Characteristic();
        this.strength = new Characteristic();
        this.toughness = new Characteristic();
        this.agility = new Characteristic();
        this.intelligence = new Characteristic();
        this.perception = new Characteristic();
        this.willpower = new Characteristic();
        this.fellowship = new Characteristic();
    }

    /**
     * Sets modifiers for all characteristics, order is:
     * Weapon Skill, Ballistic Skill, Strength, Toughness,
     * Agility, Intelligence, Perception, Willpower, Fellowship.
     *
     * @param modifiers Array with modifiers.
     */
    setModifiers(modifiers) {
        this.weaponSkill.worldModifier = modifiers[0];
        this.ballisticSkill.worldModifier = modifiers[1];
        this.strength.worldModifier = modifiers[2];
        this.toughness.worldModifier = modifiers[3];
        this.agility.worldModifier = modifiers[4];
        this.intelligence.worldModifier = modifiers[5];
        this.perception.worldModifier = modifiers[6];
        this.willpower.worldModifier = modifiers[7];
        this.fellowship.worldModifier = modifiers[8];
    }

    /**
     * Generates characteristics for given world.
     *
     * @param world World to generate characteristics for.
     */
    generateForWorld(world) {
        this.asArray().forEach(char => {
            char.base = d10() + d10();
            console.debug(`${char.name} roll: ${char.base}`);
        });
        switch (world) {
            case Worlds.Feral:
                this.setFeralWorldModifiers();
                break;

            case Worlds.Hive:
                this.setHiveWorldModifiers();
                break;

            case Worlds.Imperial:
                this.setImperialWorldModifiers();
                break;

            case Worlds.VoidBorn:
                this.setVoidBornModifiers();
                break;
        }
    }

    setFeralWorldModifiers() {
        this.setModifiers([20,20,25,25,20,20,20,15,15]);
    }

    setHiveWorldModifiers() {
        this.setModifiers([20,20,20,15,20,20,20,20,25]);
    }

    setImperialWorldModifiers() {
        this.setModifiers([20,20,20,20,20,20,20,20,20]);
    }

    setVoidBornModifiers() {
        this.setModifiers([20,20,15,20,20,20,20,25,20]);
    }

    /**
     * Returns characteristics as array.
     */
    asArray() {
        return [
            this.weaponSkill,
            this.ballisticSkill,
            this.strength,
            this.toughness,
            this.agility,
            this.intelligence,
            this.perception,
            this.willpower,
            this.fellowship
        ];
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

        // 4. stats and equip

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
     * Generates basic info such as name, appearance, gender, ...
     */
    generateBasicInfo() {
        this.generateGender();
        this.generateAppearance();
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
        const rollBoundaries = [7,14,21,28,35,42,49,56,62,69,76,83,88,89,96,101];
        while (roll >= rollBoundaries[quirkNum]) {
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

/**
 * Generates new player.
 */
function generatePlayer() {
    const player = new Player();
    player.generateCharacter();
    console.log(player);

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
    // setSpanText('weaponSkill', `${player.characteristics.weaponSkill.getValue()} `);
    // setSpanText('ballisticSkill', player.characteristics.ballisticSkill.getValue());
    // setSpanText('strength', player.characteristics.strength.getValue());
    // setSpanText('toughness', player.characteristics.toughness.getValue());
    // setSpanText('agility', player.characteristics.agility.getValue());
    // setSpanText('intelligence', player.characteristics.intelligence.getValue());
    // setSpanText('perception', player.characteristics.perception.getValue());
    // setSpanText('willpower', player.characteristics.willpower.getValue());
    // setSpanText('fellowship', player.characteristics.fellowship.getValue());
}
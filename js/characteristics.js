/**
 * One particular characteristic.
 */
class Characteristic {

    constructor(name) {
        this.name = name;
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
        this.weaponSkill = new Characteristic('Weapon Skill');
        this.ballisticSkill = new Characteristic('Ballistic Skill');
        this.strength = new Characteristic('Strength');
        this.toughness = new Characteristic('Toughness');
        this.agility = new Characteristic('Agility');
        this.intelligence = new Characteristic('Intelligence');
        this.perception = new Characteristic('Perception');
        this.willpower = new Characteristic('Willpower');
        this.fellowship = new Characteristic('Fellowship');
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
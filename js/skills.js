const SkillType = {
    Basic: 'Basic',
    Advanced: 'Advanced'
};

class Skill {
    constructor(id, name, type, characteristic, descriptor) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.characteristic = characteristic;
        this.descriptor = descriptor;
        this.level = 0;
    }

    /**
     * Sets a detail of this skill and returns it.
     * @param detail
     */
    withDetail(detail) {
        this.detail = detail;
        return this;
    }
}

const Skills = {
    Acrobatics: new Skill('Acrobatics', 'Acrobatics', SkillType.Advanced, 'Agility', 'Movement'),
    Awareness: new Skill('Awareness', 'Awareness', SkillType.Basic, 'Perception', '—'),
    Barter: new Skill('Barter', 'Barter', SkillType.Basic, 'Fellowship', '—'),
    Blather: new Skill('Blather', 'Blather', SkillType.Advanced, 'Fellowship', 'Interaction'),
    Carouse: new Skill('Carouse', 'Carouse', SkillType.Basic, 'Toughness', '—'),
    Charm: new Skill('Charm', 'Charm', SkillType.Basic, 'Fellowship', 'Interaction'),
    ChemUse: new Skill('ChemUse', 'Chem-Use', SkillType.Advanced, 'Intelligence', 'Crafting,Investigation'),
    Ciphers: new Skill('Ciphers', 'Ciphers†', SkillType.Advanced, 'Intelligence', '—'),
    Climb: new Skill('Climb', 'Climb', SkillType.Basic, 'Strength', 'Movement'),
    Command: new Skill('Command', 'Command', SkillType.Basic, 'Fellowship', 'Interaction'),
    CommonLore: new Skill('CommonLore', 'Common Lore†', SkillType.Advanced, 'Intelligence', 'Investigation'),
    Concealment: new Skill('Concealment', 'Concealment', SkillType.Basic, 'Agility', '—'),
    Contortionist: new Skill('Contortionist', 'Contortionist', SkillType.Basic, 'Agility', 'Movement'),
    Deceive: new Skill('Deceive', 'Deceive', SkillType.Basic, 'Fellowship', 'Interaction'),
    Demolition: new Skill('Demolition', 'Demolition', SkillType.Advanced, 'Intelligence', 'Crafting'),
    Disguise: new Skill('Disguise', 'Disguise', SkillType.Basic, 'Fellowship', '—'),
    Dodge: new Skill('Dodge', 'Dodge', SkillType.Basic, 'Agility', 'Movement'),
    Drive: new Skill('Drive', 'Drive†', SkillType.Advanced, 'Agility', 'Operator'),
    Evaluate: new Skill('Evaluate', 'Evaluate', SkillType.Basic, 'Intelligence', 'Investigation'),
    ForbiddenLore: new Skill('ForbiddenLore', 'Forbidden Lore†', SkillType.Advanced, 'Intelligence', 'Investigation'),
    Gamble: new Skill('Gamble', 'Gamble', SkillType.Basic, 'Intelligence', '—'),
    Inquiry: new Skill('Inquiry', 'Inquiry', SkillType.Basic, 'Fellowship', 'Investigation'),
    Interrogation: new Skill('Interrogation', 'Interrogation', SkillType.Advanced, 'Willpower', 'Investigation'),
    Intimidate: new Skill('Intimidate', 'Intimidate', SkillType.Basic, 'Strength', 'Interaction'),
    Invocation: new Skill('Invocation', 'Invocation', SkillType.Advanced, 'Willpower', '—'),
    LipReading: new Skill('LipReading', 'Lip Reading', SkillType.Advanced, 'Perception', '—'),
    Literacy: new Skill('Literacy', 'Literacy', SkillType.Advanced, 'Intelligence', '—'),
    Logic: new Skill('Logic', 'Logic', SkillType.Basic, 'Intelligence', 'Investigation'),
    Medicae: new Skill('Medicae', 'Medicae', SkillType.Advanced, 'Intelligence', '—'),
    Navigation: new Skill('Navigation', 'Navigation†', SkillType.Advanced, 'Intelligence', '—'),
    Performer: new Skill('Performer', 'Performer†', SkillType.Advanced, 'Fellowship', '—'),
    Pilot: new Skill('Pilot', 'Pilot†', SkillType.Advanced, 'Agility', 'Operator'),
    Psyniscience: new Skill('Psyniscience', 'Psyniscience', SkillType.Advanced, 'Perception', '—'),
    ScholasticLore: new Skill('ScholasticLore', 'Scholastic Lore†', SkillType.Advanced, 'Intelligence', 'Investigation'),
    Scrutiny: new Skill('Scrutiny', 'Scrutiny', SkillType.Basic, 'Perception', '—'),
    Search: new Skill('Search', 'Search', SkillType.Basic, 'Perception', '—'),
    SecretTongue: new Skill('SecretTongue', 'Secret Tongue†', SkillType.Advanced, 'Intelligence', '—'),
    Security: new Skill('Security', 'Security', SkillType.Advanced, 'Agility', '—'),
    Shadowing: new Skill('Shadowing', 'Shadowing', SkillType.Advanced, 'Agility', '—'),
    SilentMove: new Skill('SilentMove', 'Silent Move', SkillType.Basic, 'Agility', '—'),
    SleightOfHand: new Skill('SleightOfHand', 'Sleight of Hand', SkillType.Advanced, 'Agility', '—'),
    SpeakLanguage: new Skill('SpeakLanguage', 'Speak Language†', SkillType.Advanced, 'Intelligence', '—'),
    Survival: new Skill('Survival', 'Survival', SkillType.Advanced, 'Intelligence', '—'),
    Swim: new Skill('Swim', 'Swim', SkillType.Basic, 'Strength', 'Movement'),
    TechUse: new Skill('TechUse', 'Tech-Use', SkillType.Advanced, 'Intelligence', '—'),
    Tracking: new Skill('Tracking', 'Tracking', SkillType.Advanced, 'Intelligence', '—'),
    Trade: new Skill('Trade', 'Trade†', SkillType.Advanced, 'Intelligence', 'Crafting'),
    Wrangling: new Skill('Wrangling', 'Wrangling', SkillType.Advanced, 'Intelligence', '—')
};
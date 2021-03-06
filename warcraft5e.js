
//---- IMPORT

import { WcCharacterSheet }     from "./module/actor/character-sheet.js";
import { WcItemSheet }          from "./module/item/item-sheet.js";
import { WcRaceSheet }          from "./module/item/race-sheet.js";
import { WcClassSheet }         from "./module/item/class-sheet.js";
import { WcSpellSheet }         from "./module/item/spell-sheet.js";
import { WcSkillSheet }         from "./module/item/skill-sheet.js";

import * as WcSkillHandler      from "./module/skill-handler.js";
import * as WcMigrationHandler  from "./module/migration-handler.js";

//---- ON INITIALIZATION

Hooks.once('init', async function() {

    //---- ACTORS

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("warcraft5e", WcCharacterSheet, {
        types: ["character"],
        makeDefault: true
    });

    //---- ITEMS

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("warcraft5e", WcItemSheet, {
        types: ["item"],
        makeDefault: true
    });

    Items.registerSheet("warcraft5e", WcClassSheet, {
        types: ["class"],
        makeDefault: true
    });

    Items.registerSheet("warcraft5e", WcRaceSheet, {
        types: ["race"],
        makeDefault: true
    });

    Items.registerSheet("warcraft5e", WcSpellSheet, {
        types: ["spell"],
        makeDefault: true
    });

    Items.registerSheet("warcraft5e", WcSkillSheet, {
        types: ["skill"],
        makeDefault: true
    });

    game.WC5E = {
        skills : WcSkillHandler,
        needsClick : false,
        effectTokens : []
    };
});


//---- ON READY

Hooks.once("ready", async function() {
    WcMigrationHandler.migrate();
});

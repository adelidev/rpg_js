class Player {
    constructor(name) {
        this.name = name;
        this.lvl = 1;
        this.exp = 0;
        this.gold = 0;
        this.maxHP = 100;
        this.HP = this.maxHP;
        this.maxMP = 40;
        this.MP = this.maxMP;
        this.maxCP = 50;
        this.CP = 0;
        this.str = 10;
        this.def = 10;
        this.int = 10;
        this.comps = [];
        this.sorts = [];
    }
    displaySelf() {
        $('#player').append(
            '<div class="info">' +
            '   <span id="player-name" class="name-title">' + this.name + '</span>' +
            '   <br><span>niv.<i id="player-lvl">' + this.lvl + '</i></span>' +
            '   <button id="player-stats">Stats</button>' +
            '</div>' +
            '<div class="container">' +
            '    <div class="bar" id="player-hp"><span>HP: <i>' + this.HP + '</i></span></div>' +
            '    <div>' +
            '       <div class="bar" id="player-mp"><span>MP: <i>' + this.MP + '</i></span></div>' +
            '       <div class="bar" id="player-cp"><span>CP: <i>' + this.CP + '</i></span></div>' +
            '    </div>' +
            '</div>'
        );
    }
    Action(action) {
        switch (action) {
            case atq:
                $("#update-screen").append("<p>Vous attaquez</p>");
                break;
            case def:
                break;
            case comp:
                break;
            case mag:
                break;
            case obj:
                break;
        }
    }
}

class Enemy {
    constructor(enemy) {
        this.name = enemy.name;
        this.lvl = enemy.lvl;
        this.HP = enemy.maxHP;
        this.MP = enemy.maxMP;
        this.CP = 0;
        this.str = enemy.str;
        this.def = enemy.def;
        this.int = enemy.int;
        this.sorts = enemy.sorts;
        this.comps = enemy.comps;
        this.weak = enemy.weak;
        this.resist = enemy.resist;
    }
    displaySelf(eNb) {
        $('#enemies').append('<div class="enemy-card">' +
            '<div class="bar" id="enemy-hp"><span>HP: <i>' + this.HP + '</i></span></div>' +
            '<span id="enemy-name' + eNb + '" class="name-title">' + this.name + '</span>' +
            '<br><span> niv. <i id="enemy-lvl">' + this.lvl + '</i></span></div>');
    }
}

const sorts = [{
    name: "Soin",
    desc: "Rend quelques HP",
    cost: 4
}, {
    name: "Jet de flamme",
    desc: "Inflige des dégats de feu, chances de bruler l'adversaire",
    cost: 6
}, {
    name: "Somniphere",
    desc: "Chances d'endormir l'ennemie",
    cost: 5
}, {
    name: "Bouclier magique",
    desc: "Augmente considérablement votre défense pendant 1 tours",
    cost: 5
}]

const comps = [{
    name: "Morsure",
    desc: "Inflige des dégats physique, chances d'empoisonner l'adversaire",
    cost: 15,
}, {
    name: "Balayage",
    desc: "Inflige des dégats à tous les enemies",
    cost: 10,
}, {
    name: "Rage",
    desc: "Augmente considérablement votre Force pendant 5 tours",
    cost: 50,
}]

const obj = [{
    name: "Fiole de vitalité",
    desc: "Rend 20 HP",
}, {
    name: "Fiole de puissance",
    desc: "Augmente votre Force pendant 3 tours",
}, {
    name: "Fiole de sang divin",
    desc: "Rend 15 MP",
}]

const dmgTypes = [
    "fire",
    "physical",
    "dark",
    "light",
    "ice",
    "electric",
]

const altStates = [
    "burnt",
    "poisoned",
    "frozen",
    "asleep",
    "afraid",
]

const enemies = [{
    name: "Démon",
    lvl: 3,
    str: 10,
    def: 5,
    int: 13,
    maxHP: 80,
    maxMP: 100,
    sorts,
    comps,
    weak: [3],
    resist: [2, 0]
}, {
    name: "Chevalier possédé",
    lvl: 5,
    str: 17,
    def: 12,
    int: 10,
    maxHP: 110,
    maxMP: 50,
    sorts,
    comps,
    weak: [0, 3, 4, 5],
    resist: [1],
}, {
    name: "Rat gris",
    lvl: 1,
    str: 4,
    def: 3,
    int: 0,
    maxHP: 50,
    maxMP: 0,
    sorts,
    comps: [0],
    weak: [3],
    resist: [],
}, {
    name: "Grand serpent",
    lvl: 8,
    str: 20,
    def: 8,
    int: 15,
    maxHP: 150,
    maxMP: 50,
    sorts,
    comps: [0],
    weak: [1],
    resist: [0]
}, {
    name: "Lézard venimeux",
    lvl: 2,
    str: 6,
    def: 4,
    int: 0,
    maxHP: 40,
    maxMP: 10,
    sorts,
    comps,
    weak: [0, 1],
    resist: [],
}, {
    name: "Homme désespéré",
    lvl: 1,
    str: 6,
    def: 6,
    int: 6,
    maxHP: 60,
    maxMP: 0,
    sorts,
    comps,
    weak: [0, 3, 4, 5],
    resist: [],
}]



class Fight {
    constructor() {
        this.turn = 0;

        this.generateEnemies()
        player.displaySelf();
        this.handleEvents();
    }
    generateEnemies() {
        var encounters = [];
        var nbEnemies = Math.round(Math.random() * Math.floor(3)) + 1;
        for (let i = 0; i < nbEnemies; i++) {
            var randomizer = Math.round(Math.random() * Math.floor(enemies.length - 1));
            if (enemies[randomizer].lvl < (player.lvl + 3) && enemies[randomizer].lvl > (player.lvl - 3)) {
                encounters[i] = new Enemy(enemies[randomizer]);
                encounters[i].displaySelf(i);
                this.nbEnemies = nbEnemies - 1;
            } else nbEnemies += 1;
        }
    }
    handleEvents() {

    }

}

function gameStart() {
    player = new Player($("#start-screen div input").val());
    fight = new Fight;
}

//Welcome Screen
$("#start-screen div button").click(event => {
    const validName = /[^a-zA-Z0-9 ]/;
    var name = $("#start-screen div input").val();
    if (name != "" && name.length > 2) {
        $("#start-screen").css("top", "-100%");
        $("#fight-screen").css("display", "flex");
        gameStart();
    } else if (name.length <= 2 && name.length > 0) {
        $("#start-screen div p").remove();
        $("#start-screen div").append("<p style='color:red; position: absolute' class='container'>Votre nom doit contenir au moins 3 caractères</p>");
    } else if (name.val() == "") {
        $("#start-screen div p").remove();
        $("#start-screen div").append("<p style='color:red; position: absolute' class='container'>Veuillez renseigner un nom</p>");
    }
});
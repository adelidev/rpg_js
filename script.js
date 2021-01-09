var player;
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
        this.str = 10;
        this.def = 10;
        this.int = 10;
        this.comps = [];
        this.sorts = [];
    }
    displaySelf() {
        $('#player').append(
            '<div class="info">' +
            '<span id="player-name" class="name-title">' + this.name + '</span>' +
            '<br><span>niv.<i id="player-lvl">' + this.lvl + '</i></span>' +
            '<button id="player-stats">Stats</button>' +
            '</div>' +
            '<div class="container">' +
            '    <div class="bar" id="player-hp"><span>HP: </span><i>' + this.HP + '</i></div>' +
            '    <div class="bar" id="player-mp"><span>MP: </span><i>' + this.MP + '</i></div>' +
            '</div>'
        );
    }
}

class Enemy {
    constructor(name, lvl, maxHP, maxMP, str, def, int, sorts = [], comps = []) {
        this.name = name;
        this.lvl = lvl;
        this.HP = maxHP;
        this.MP = maxMP;
        this.str = str;
        this.def = def;
        this.int = int;
        this.sorts;
        this.comps;
    }
    displaySelf(eNb) {
        $('#enemies').append('<div class="enemy-card">' +
            '<div class="bar" id="enemy-hp"><span>HP: <i>' + this.HP + '</i></span></div>' +
            '<span id="enemy-name' + eNb + '" class="name-title">' + this.name + '</span>' +
            '<br><span> niv. <i id="enemy-lvl">' + this.lvl + '</i></span></div>');
    }
}

const enemies = [{
    name: "Démon",
    lvl: 3,
    str: 10,
    def: 5,
    int: 13,
    maxHP: 80,
    maxMP: 100,
    sorts: ["Brulure", "Siphon"]
}, {
    name: "Chevalier possédé",
    lvl: 5,
    str: 17,
    def: 12,
    int: 10,
    maxHP: 110,
    maxMP: 50,
    sorts: ["Brulure", "Siphon"]
}, {
    name: "Rat gris",
    lvl: 1,
    str: 4,
    def: 3,
    int: 0,
    maxHP: 50,
    maxMP: 0,
    sorts: ["Brulure", "Siphon"]
}, {
    name: "Grand serpent",
    lvl: 8,
    str: 20,
    def: 8,
    int: 15,
    maxHP: 150,
    maxMP: 50,
    sorts: ["Brulure", "Siphon"]
}, {
    name: "Lézard venimeux",
    lvl: 2,
    str: 6,
    def: 4,
    int: 0,
    maxHP: 40,
    maxMP: 10,
    sorts: ["Brulure", "Siphon"]
}, {
    name: "Homme désespéré",
    lvl: 1,
    str: 6,
    def: 6,
    int: 6,
    maxHP: 60,
    maxMP: 0,
    sorts: ["Brulure", "Siphon"]
}]

function generateEnemies() {
    var encounters = [];
    var nbEnemies = Math.round(Math.random() * Math.floor(3)) + 1;
    for (let i = 0; i < nbEnemies; i++) {
        var randomizer = Math.round(Math.random() * Math.floor(enemies.length - 1));
        if (enemies[randomizer].lvl < (player.lvl + 3)) {
            encounters[i] = new Enemy(enemies[randomizer].name, enemies[randomizer].lvl, enemies[randomizer].maxHP, enemies[randomizer].maxMP, enemies[randomizer].str, enemies[randomizer].def, enemies[randomizer].int);
            encounters[i].displaySelf(i);
        }
    }
}

function gameStart() {
    player = new Player($("#start-screen div input").val());
    player.displaySelf();
    generateEnemies();
}

//Welcome Screen
$("#start-screen div button").click(event => {
    if ($("#start-screen div input").val() != "") {
        $("#start-screen").css("top", "-100%");
        $("#fight-screen").css("display", "flex");
        gameStart();
    } else if (document.getElementById('start-screen').lastElementChild.childElementCount < 3) {
        $("#start-screen div").append("<p style='color:red; position: absolute' class='container'>Veuillez renseigner un nom</p>");
    }
});
class Player {
    constructor(name) {
        this.name = name;
        this.lvl = 1;
        this.exp = 0;
        this.gold = 0;
        this.maxHP = 100;
        this.maxMP = 40;
        this.str = 12;
        this.def = 10;
        this.int = 8;
    }
}

class Enemy {
    constructor(name, lvl, maxHP, maxMP, str, def, int) {
        this.name = name;
        this.lvl = lvl;
        this.maxHP = maxHP;
        this.maxMP = maxMP;
        this.str = str;
        this.def = def;
        this.int = int;
    }
}
const enemies = [{
    name: "Démon",
    lvl: 3,
    str: 10,
    def: 5,
    maxHP: 80,
    sorts: { 0: "Brulure", 1: "Siphon" }
}, {
    name: "Chevalier possédé",
    lvl: 5,
    str: 17,
    def: 12,
    maxHP: 110,
}, {
    name: "Lapin enragé",
    lvl: 1,
    str: 4,
    def: 3,
    maxHP: 50,
}, {
    name: "Grand serpent",
    lvl: 8,
    str: 20,
    def: 8,
    maxHP: 150,
}, {
    name: "Lézard venimeux",
    lvl: 2,
    str: 6,
    def: 4,
    maxHP: 40,
}, {
    name: "Homme désespéré",
    lvl: 1,
    str: 6,
    def: 6,
    maxHP: 60,
}, ]

function generateEnemy() {
    var randomizer = Math.round(Math.random() * Math.floor(enemies.length - 1));
    $('#enemies').append('<div class="enemy-card">' +
        '<div class="bar" id="enemy-hp"><span>HP: <i>' + enemies[randomizer].maxHP + '</i></span></div>' +
        '<span id="enemy-name">' + enemies[randomizer].name + '</span>' +
        '<span> niv. <i id="enemy-lvl">' + enemies[randomizer].lvl + '</i></span></div>');
}





function gameStart() {
    var player = new Player($("#start-screen div input").val());

    $('#player-name').html(player.name);
    generateEnemy();
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
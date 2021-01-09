export class Player {
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
}
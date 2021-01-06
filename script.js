class Player {
    constructor(name = unnamed) {
        this.name = name;
        this.maxHP = 100;
        this.maxMP = 40;
    }
}

$("#start-screen div button").click(event => {
    if ($("#start-screen div input").val() != "") {
        $("#start-screen").css("top", "-100%");
        $("#fight-screen").css("display", "flex");
    } else {
        $("#start-screen div").append("<p style='color:red; position: absolute' class='container'>Veuillez renseigner un nom</p>");
    }


});
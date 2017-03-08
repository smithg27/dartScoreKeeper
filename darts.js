
var startAngle = -9;
var endAngle = 9;
function degreeToRad (ang){
    return (Math.PI/180) * ang;
}


function addScore(a, b){
    return a + b;
}


var bedsIds = ["s_0","s_25", "s_50", "s_1", "s_2", "s_3", "s_4", "s_5", "s_6","s_7", "s_8", "s_9", "s_10", "s_11", "s_12", "s_13", "s_14", "s_15", "s_16", "s_17", "s_18", "s_19", "s_20", "os_1", "os_2", "os_3", "os_4", "os_5", "os_6","os_7", "os_8", "os_9", "os_10", "os_11", "os_12", "os_13", "os_14", "os_15", "os_16", "os_17", "os_18", "os_19", "os_20", "t_1", "t_2", "t_3", "t_4", "t_5", "t_6","t_7", "t_8", "t_9", "t_10", "t_11", "t_12", "t_13", "t_14", "t_15", "t_16", "t_17", "t_18", "t_19", "t_20", "d_1", "d_2", "d_3", "d_4", "d_5", "d_6","d_7", "d_8", "d_9", "d_10", "d_11", "d_12", "d_13", "d_14", "d_15", "d_16", "d_17", "d_18", "d_19", "d_20", "z_1", "z_2", "z_3", "z_4", "z_5", "z_6","z_7", "z_8", "z_9", "z_10", "z_11", "z_12", "z_13", "z_14", "z_15", "z_16", "z_17", "z_18", "z_19", "z_20"];
var player1 = new Object();
player1.score = 301;
player1.changeScore = function (turnScore) {
    if(this.score - turnScore > 0){
        this.score = this.score - turnScore;
        $("#player1Score").html(this.score);
    }
    else if(this.score - turnScore == 0){
        $("#player1Score").html("Player 1 Has Won!");
    }
    else if(this.score - turnScore < 0){
        console.log("player 1 busts");
    }
}
var player2 = new Object();
player2.score = 301;
player2.changeScore = function (turnScore) {
    if(this.score - turnScore > 0){
        this.score = this.score - turnScore;
        $("#player2Score").html(this.score);
    }
    else if(this.score - turnScore == 0){
        $("#player2Score").html("Player 2 Has Won!");
    }
    else if(this.score - turnScore < 0){
        console.log("player 2 busts");
    }
}

var gameTracker = new Object();
gameTracker.turn = player1;
gameTracker.dartsLeft = 3;
gameTracker.currentScore = [];
gameTracker.dartThrown = function(dart) {
    this.currentScore.push(dart);
    this.dartsLeft = this.dartsLeft - 1;
    if (this.dartsLeft == 0) {
        this.switchTurn();
    }
}
gameTracker.switchTurn = function() {
    if (this.turn == player1){   
        var addTurnScore = this.currentScore.reduce(addScore, 0)
        this.turn.changeScore(addTurnScore)
        this.currentScore = [];
        this.dartsLeft = 3;
        this.turn = player2;
        
    }
    else if (this.turn == player2){
        var addTurnScore = this.currentScore.reduce(addScore, 0)
        this.turn.changeScore(addTurnScore)
        this.currentScore = [];
        this.dartsLeft = 3;
        this.turn = player1;
    }
}

function clickFunction(x){
    $("#" + x).on('click',function(){
        var currentDartArray = x.split("_");
        if(currentDartArray[0] == "s" || currentDartArray[0] == "os"){
            var currentDart = parseInt(currentDartArray[1]);
        }
        else if(currentDartArray[0] == "d"){
            var currentDart = parseInt(currentDartArray[1]);
            currentDart += currentDart;
        }
        else if(currentDartArray[0] == "t"){
            var currentDart = parseInt(currentDartArray[1]);
            currentDart += 2 * currentDart
        }
        else if(currentDartArray[0] == "z"){
            currentDart = 0;
        }
        gameTracker.dartThrown(currentDart);
        });
}
function tapFunction(x){
    $("#" + x).on('tap',function(){
        var currentDartArray = x.split("_");
        if(currentDartArray[0] == "s" || currentDartArray[0] == "os"){
            var currentDart = parseInt(currentDartArray[1]);
        }
        else if(currentDartArray[0] == "d"){
            var currentDart = parseInt(currentDartArray[1]);
            currentDart += currentDart;
        }
        else if(currentDartArray[0] == "t"){
            var currentDart = parseInt(currentDartArray[1]);
            currentDart += 2 * currentDart
        }
        else if(currentDartArray[0] == "z"){
            currentDart = 0;
        }
        gameTracker.dartThrown(currentDart);
        });
}
bedsIds.forEach(clickFunction);
bedsIds.forEach(tapFunction);













/* function bedDrawer(startAng, endAng, innerRad, outterRad, color) {
context.beginPath();
context.arc(x, y, innerRad, startAng, endAng, false);
context.arc(x, y, outterRad, endAng, startAng, true);
context.fillStyle = color;
context.fill();
context.stroke();
}
 */
/* for(i = 1; i <= 20; i++){
   if (i%2 == 0){
        color1 = "grey";
        color2 = "red";
        color3 = "green";
    }
    else {
        color1 = "white";
        color2 = "green";
        color3 = "red";
    }
    
    bedDrawer(degreeToRad(startAngle), degreeToRad(endAngle), 50, 250, color1);
    bedDrawer(degreeToRad(startAngle), degreeToRad(endAngle), 250, 275, color2);
    bedDrawer(degreeToRad(startAngle), degreeToRad(endAngle), 275, 475, color1);
    bedDrawer(degreeToRad(startAngle), degreeToRad(endAngle), 475, 500, color3); 

var theta = degreeToRad(startAngle);
var theta2 = degreeToRad(endAngle);
var u = Math.cos(theta) * 500 + 625;
var v = Math.sin(theta) * 500 + 625;
var u2 = Math.cos(theta) * 625 + 625;
var v2 = Math.sin(theta) * 625 + 625;
var u3 = Math.cos(theta2) * 500 + 625;
var v3 = Math.sin(theta2) * 500 + 625;
var u4 = Math.cos(theta2) * 625 + 625;
var v4 = Math.sin(theta2) * 625 + 625;
u = Math.round(u);
v = Math.round(v);
u2 = Math.round(u2);
v2 = Math.round(v2);
u3 = Math.round(u3);
v3 = Math.round(v3);
u4 = Math.round(u4);
v4 = Math.round(v4);
    startAngle = endAngle;
    endAngle += 18;
   console.log('<path id="" d="M' + u + ' ' + v + ' A 500 500, 1, 0, 1, ' + u3  + ' ' + v3 + ' L ' +u4 + ' ' + v4 + ' A 625 625  , 0 , 0, 0, ' + u2 + ' ' + v2 + '" fill="black" />');

} */

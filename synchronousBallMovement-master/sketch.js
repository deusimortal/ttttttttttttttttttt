var temporum;
var opovo,jogador;
var database;
var chatice;
var jogo;




function setup(){
createCanvas(400,400);
database=firebase.database();
jogo = new Tempim();
jogo.getState();
jogo.start();

}

function draw(){

}

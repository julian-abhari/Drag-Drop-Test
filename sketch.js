var dropzone;
var userGame;
var ballGameButton;
var testGameButton;

function setup() {
  dropzone = select("#dropzone");
  dropzone.dragOver(highlight);
  dropzone.dragLeave(revertBack);
  dropzone.drop(gotFile, revertBack);
  ballGameButton = createButton("ballGame!");
  ballGameButton.mousePressed(selectGame("ballGame"));
  ballGameButton.position(windowWidth/3, 280);
  testGameButton = createButton("testGame!");
  testGameButton.mousePressed(selectGame("testGame"));
  testGameButton.position(windowWidth*2/3, 280);
}

function selectGame(gameName){
  
}

function gotFile(file) {
  //if (browser === chrome) {
  //save file.data to txt file in local directory
  //}
  // createP(file.name);
  // createP(file.type);
  // createP(file.size);
  // createP(file.data);
  //userGame.attribute("src", "userGames/ballGame.js");
}

function highlight() {
  dropzone.style("background-color", "black");
  dropzone.style("border-color", "white");
}

function revertBack() {
  dropzone.style("background-color", "green");
  dropzone.style("border-color", "white");
}

function draw() {
}

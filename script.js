var kwadraty = [];
var rozmiar = 20;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  for (var i = 0; i < kwadraty.length; i++) {
    var kwadrat = kwadraty[i];
    fill(kwadrat.kolor);
    rectMode(CENTER);
    rect(kwadrat.x, kwadrat.y, rozmiar, rozmiar);
  }
}

function mouseClicked() {
  var kolor = color(random(255), random(255), random(255));
  var kwadrat = {
    x: mouseX,
    y: mouseY,
    kolor: kolor
  };
  kwadraty.push(kwadrat);
}
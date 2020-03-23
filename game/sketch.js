let bg;

let playerImage;
let player;

let bullets = [];
let bulletGenerationInterval = 15;

let enemyImages = [];
let enemies = [];
let enemyGenerationInterval = 150;

function preload() {
  bg = loadImage('../assets/images/background.png');
  playerImage = loadImage('../assets/images/player.png');
  enemyImages = [1, 2, 3, 4].map(i =>
    loadImage(`../assets/images/enemy (${i}).png`)
  );
}

//  Called 1 time
function setup() {
  createCanvas(400, innerHeight);
  player = new Player(playerImage);
}

//  Called 60 fps
function draw() {
  background(bg);

  if (frameCount % bulletGenerationInterval === 0) {
    generateBullet();
  }

  if (frameCount % enemyGenerationInterval === 0) {
    generateEnemies();
  }

  displayBullet();
  displayEnemies();
  gameOver();

  player.display();
}

function generateEnemies() {
  const distance = 30;
  const yLoc = -50;

  for (let i = 0; i < 7; i++) {
    const enemyImage = random(enemyImages);

    const enemyPosition = createVector(i * 55 + distance, yLoc);

    enemies.push(new Enemy(enemyPosition, enemyImage));
  }
}

function generateBullet() {
  bullets.push(new Bullet(player.position.copy()));
}

function displayBullet() {
  bullets = bullets.filter(bullet => {
    bullet.update();
    bullet.display();
    const enemy = enemies.find(enemy => enemy.isCollided(15, bullet.position));

    if (enemy) {
      bullet.isCollided = true;
      enemy.life--;
    }

    return !bullet.isOutofBounds() && !bullet.isCollided;
  });
}

function displayEnemies() {
  enemies = enemies.filter(enemy => {
    enemy.update();
    enemy.display();

    return !enemy.isOutofBounds() && !enemy.isDead();
  });
}

function gameOver() {
  const enemy = enemies.find(enemy => enemy.isCollided(50, player.position));

  if (enemy) {
    alert('Game over nooob!!');
    bullets = [];
    enemies = [];
  }
}

function mouseMoved() {
  player.position.x = constrain(mouseX, 25, width - 25);
}

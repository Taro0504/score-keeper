// DOM要素の取得
const p1Button = document.querySelector("#p1Button");

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#winningScoreSelector");


const p1 = {
  score : 0,
  button : document.querySelector("#p1Button"),
  display : document.querySelector("#p1Display")
}

const p2 = {
  score : 0,
  button : document.querySelector("#p2Button"),
  display : document.querySelector("#p2Display")
}


let p1Score = 0;
let p2Score = 0;
// ゲームの終了得点
let winningScore = 3;
// ゲームの終了を管理するフラグ
let isGameOver = false;

function updateScores(player, opponent) {
  // ゲームが終了していなければ処理を続行
  if(!isGameOver) {
    player.score += 1;
    player.display.textContent = player.score;
    if(player.score === winningScore) {
      isGameOver = true;
      alert("player1の勝利です。もう一度対戦するにはRESETを押してください");
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      // buttonの無効化
      player.button.disabled = true;
      opponent.button.disabled = true;
    } 
  }
}

p1.button.addEventListener("click", function() {
  updateScores(p1, p2); 
})

p2.button.addEventListener("click", function() {
  updateScores(p2, p1);
})

// RESETボタンを押したときのハンドラ
resetButton.addEventListener("click", reset);

// 勝利に必要なスコアを変更したときの動き
winningScoreSelect.addEventListener("change", function() {
  // 
  winningScore = parseInt(this.value);
  reset();
})

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    // Displayの得点の更新
    p.display.textContent = p1Score;
    p.display.classList.remove("has-text-success", "has-text-danger");
    // buttonの有効化
    p.button.disabled = false;
  }
}
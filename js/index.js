const tela = document.getElementById("tela")
const ctx = tela.getContext("2d")
let playerImg = new Image()
playerImg.src = 'imgs/player.png'
let objs = {
  "player": {x:0,y:0}
}
function renderizar(){
  ctx.clearRect(0,0,160,160)
  desenhar()
}
function desenhar(){
  ctx.drawImage(playerImg, objs.player.x, objs.player.y)
}
playerImg.onload = () => {
  renderizar()
}
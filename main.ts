game.showLongText("Enter Number 1", DialogLayout.Center)
let num1 = parseFloat(game.askForString(""))
game.showLongText("Enter Number 2", DialogLayout.Center)
let num2 = parseFloat(game.askForString(""))
let average = num1 + num2 / 2
game.showLongText("Average" + average, DialogLayout.Center)

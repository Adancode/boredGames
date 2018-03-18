var ticTacToeGameController = require("../controllers/tictacgame");

module.exports = function(app) {
  app.get("/tictactoegame", ticTacToeGameController.rendertictactoegame);
  app.post("/tictactoegame", ticTacToeGameController.rendertictactoegame);
};
/* update for heroku */
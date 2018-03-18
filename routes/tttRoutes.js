var tttGameController = require("../controllers/tttgame");

module.exports = function(app) {
  app.get("/tttgame", tttGameController.rendertttegame);
  app.post("/tttgame", tttGameController.rendertttegame);
};
/* update for heroku */
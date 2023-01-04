import Api from './api.js';
import Scores from './scores.js';
import Addscore from './addscore.js';

class Board {
  constructor() {
    this.div = document.getElementById('leaderboard');
    this.api = new Api();
    this.Scores = new Scores();
    this.AddScore = new Addscore();
  }

  renderBoard = () => {
    this.div.innerHTML = `<div>
                            <section id="scores"></section>
                            <section id="addscore"></section>
                          </div>`;
    this.Scores.renderScores(this.api.getScores());
    this.AddScore.renderAddScore();
  }
}

export { Board as default };
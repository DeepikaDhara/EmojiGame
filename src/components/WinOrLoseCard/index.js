// Write your code here.
const LOSE_IMG="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
const WON_IMG="https://assets.ccbp.in/frontend/react-js/won-game-img.png"

const WinOrLoseCard = (props) => {
    const {isWon, onClickPlayAgain, score} =props
    const imageUrl=isWon ? WON_IMG : LOSE_IMG
    const gameStatus=isWon ? 'You Won':'You Lose'
    const scoreLabel = isWon ? 'Best Score': 'Score'

    return(
        <div className="win-or-lose-card">
          <div className="details-section">
            <h1 className="game-Status">{gameStatus}</h1>
            <p className="current-scoreLabel">{scoreLabel}</p>
            <p className="current-score-value">{score}/12</p>
            <button type="button" className="play-again-button" onClick={onClickPlayAgain}>Play Again</button>
          </div>
          <div className="image-section">
             <img src={imageUrl} className="win-or-loss-image" alt="win or lose"/>
          </div>
        </div>
    ) 
}
export default WinOrLoseCard

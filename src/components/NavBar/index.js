// Write your code here.
const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props
  return 
  <div className="header">
      <div className="image-container">
      <img src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png" alt="emoji logo"/>
      <h1 className="Emoji">Emoji Game</h1>
      </div>
      <div className="scores">
      <p className="Score">currentScore</p>
      <p className="topScore">topScore</p>
      </div>
  </div>
}
export default NavBar

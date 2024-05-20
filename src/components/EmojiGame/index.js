/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojiList: [],
    isGameInProgress : true,
    topScore : 0,
  }
  resetGame = () => {
    this.setState({
      clickedEmojiList: [],
      isGameInProgress: true,
    })
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isWon = clickedEmojiList.length === emojisList.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickedEmojiList.length}
      />
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({
      topScore: newTopScore,
      isGameInProgress: false,
    })
  }

  clickedEmoji = id => {
    const {emojisList} = this.state
    const {clickedEmojiList} = this.state
    const isEmojiPresent = clickedEmojiList.includes(id)
    const clickedEmojisLength = clickedEmojiList.length
    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojiList)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
      }))
    }
  }

  getShuffeledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }
  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffeledEmojisList()
    return (
      <ul className="emojisList-container">
        {shuffledEmojisList.map(emojiObj => (
          <EmojiCard
            key={emojiObj.id}
            emojiDetails={emojiObj}
            clickedEmoji={this.clickedEmoji}
          />
        ))}
      </ul>
    )
  }
  render() {
    return (
      <div className="app-container">
        <NavBar
          currentScore={clickedEmojiList.length}
          isGameInProgress={isGameInProgress}
          topScore={topScore}
        />
        <div className="emoji-game-body">
          {isGameInProgress ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}
export default EmojiGame

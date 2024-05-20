// Write your code here.
const EmojiCard = props => {
  const {emojiDetails, clickedEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onClickEmojiCard = () => {
    clickedEmoji(id)
  }
  return (
    <li className="emoji-item">
      <button className="emj-btn" type="button" onClick={onClickEmojiCard}>
        <img className="emoji-icon" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard

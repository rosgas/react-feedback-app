import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContex'

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)

  let average =
    feedback.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.rating
    }, 0) / feedback.length

  average = average.toFixed(1).replace(/[.,]0$/, '')
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} review</h4>
      <h4>Average rating: {isNaN(average) ? 0 : average} </h4>
    </div>
  )
}

export default FeedbackStats

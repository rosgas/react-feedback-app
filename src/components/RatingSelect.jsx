import { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContex'

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10)

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value)
    select(+e.target.value)
  }

  const { feedbackEdit } = useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setSelected(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
        <li key={num}>
          <input
            type="radio"
            id={`num${num}`}
            name="rating"
            value={`${num}`}
            onChange={handleChange}
            checked={selected === num}
          />
          <label htmlFor={`num${num}`}>{`${num}`}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect

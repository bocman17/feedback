import { createContext, useState } from 'react'
import uuid from 'react-uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item feedback item 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'This item feedback item 2',
      rating: 9,
    },
    {
      id: 3,
      text: 'This item feedback item 3',
      rating: 1,
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
      item: {rating: 10},
      edit: false
  })

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid()
    setFeedback([newFeedback, ...feedback])
  }

  //set item to be updated
  const editFeedback = (item) => {
      setFeedbackEdit({
          item,
          edit: true
      })
  }

  //update feedback
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        setFeedbackEdit
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext

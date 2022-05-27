import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feedback frist item',
            rating: 10
        },
        {
            id: 2,
            text: 'This is feedback second item',
            rating: 7
        },
        {
            id: 3,
            text: 'This is feedback third item',
            rating: 3
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    }) 

    const deleteFeedback = (id) => {
        if (window.confirm('Are u sure u want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id ))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    // Update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map(item => item.id === id ? {...item, ...updItem} : item))
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value={
        {
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback,
        }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext
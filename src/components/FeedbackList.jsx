import {useContext} from 'react'
import { motion, AnimatePresence } from "framer-motion"
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from "../context/FeedbackContext"
import Spinner from './Shared/Spinner'

function FeedbackList() {
  const {feedback, isLoading} = useContext(FeedbackContext)

    if (!isLoading && (!feedback || feedback.lenght === 0)) {
        return <p>No Feedback Yet</p>
    }

    return isLoading ? <Spinner /> : (
      <div className="feedback_list">
      <AnimatePresence>
          {feedback.map((item) => {
              return (
                <motion.div key={item.id} 
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}  
                  exit={{opacity: 0}}
                >
                  <FeedbackItem 
                  key={item.id} 
                  item={item} 
                  />
                </motion.div>
              )
          })}
      </AnimatePresence>
    </div>
    )
}



export default FeedbackList
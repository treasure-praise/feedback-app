import React, {useState,useContext, useEffect} from 'react'
import Button from './shared/Button'
import Card from './shared/Card'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled,setbtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

   useEffect(()=>{
     if (feedbackEdit.edit === true) {
        setbtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating )
     }
   },[feedbackEdit ])

  const handleTextChange=(e)=>{
    if (text === ''){
      setbtnDisabled(true)
      setMessage(null)
    }else if(text !== '' && text.trim().length <=10){
      setMessage('Text must be at elast 10 characers')
    }
    else{
      setMessage(null)
      setbtnDisabled(false)
    }
    setText(e.target.value) 
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(text.trim().length >10){
      const newFeedback= {
        text : text,
        rating: rating
      }
      if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id,newFeedback)
      }else{
        addFeedback(newFeedback); 
      }
     
      setText('')
    }
  }



  return (
    <Card>
        <form onSubmit={handleSubmit} action="
        ">
            <h2>How would you rate your experience?</h2>
            <RatingSelect select={(rating)=>{setRating(rating  );}}/>
            <div className="input-group">
              <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text}/>
              <Button type="submit" version='secondary' isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && (<div className='message'>{message}</div>)}
        </form>
    </Card>
  )
}

export default FeedbackForm
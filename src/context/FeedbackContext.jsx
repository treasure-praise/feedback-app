import {useState, createContext} from "react"
import {v4 as uuidv4} from 'uuid' 

const FeedbackContext =createContext()

export const FeedbackProvider=({children})=>{
    const [feedback,setFeedback] = useState([
        {
            id:1,
            text:'This is a feedback1',
            rating: 7
        },
        {
            id:2,
            text:'This is a feedback2',
            rating: 8
        },
        {
            id:3,
            text:'This is a feedback3',
            rating: 9
        }
    ])

    const [feedbackEdit, setfeedbackEdit] = useState({
        item:{  },
        edit: false
    })

    const addFeedback=(newFeedback)=>{
        newFeedback.id =uuidv4()
        //  console.log(newFeedback)
        setFeedback([newFeedback,...feedback])
        console.log(feedback);
      }

      //delete feedback
    const deleteFeedback =(id)=>{
        if (window.confirm('Are you sure you want to delte that feedback?'))
         setFeedback(feedback.filter((item)=>(
          item.id !== id
         )))
      }

      //setItem to be updated
    const editFeedback =(item)=>{
        setfeedbackEdit({
            item,
            edit:true
        })
    }  

    //update feedbac item
    const updateFeedback=(id, upItem)=>{
        setFeedback(
            feedback.map((item)=>(
            item.id === id ? {...item,...upItem}: item
        )))
    }

    return(
        <FeedbackContext.Provider value={{
            feedback,  
            deleteFeedback,
            addFeedback,
            editFeedback,
            feedbackEdit,
            updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext
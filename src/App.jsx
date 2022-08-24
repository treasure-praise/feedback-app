import React from 'react'

import FeedbackList from './components/FeedbackList'
import Header from "./components/Header"
import FeedbackStats from './components/FeedbackStats'
import FeedbackForms  from './components/FeedbackForm'
import {FeedbackProvider} from "./context/FeedbackContext"

 function App(){

  
  
  return (
    <>
    <FeedbackProvider>
    <Header />
        <div className="container">
          <FeedbackForms />
          <FeedbackStats />
          <FeedbackList />
        </div>
    </FeedbackProvider>
        
        
    </>
  )

}
export default App

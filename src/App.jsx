import { useState, useEffect } from 'react'

import Description from './components/Description'
import Options from './components/Options'
import Feedback from './components/Feedback'
import Notification from './components/Notification'


// function App() {
//   const [opinion, setOpinion] = useState(() => {

//     if (window.localStorage.getItem("opinion") !== null) {
//       return JSON.parse(window.localStorage.getItem("opinion"));
//     }

//   })

//   useEffect(() => {
//     window.localStorage.setItem("opinion", JSON.stringify(opinion))
//   }, [opinion]);

//   const totalOpinion = opinion.good + opinion.neutral + opinion.bad

//   const totalOpinionPercent = Math.round((opinion.good / totalOpinion) * 100)


//   const updateFeedback = feedbackType => {
//     if (feedbackType == "reset") {
//       setOpinion({ good: 0, neutral: 0, bad: 0 })
//     }
//     else {
//       setOpinion({...opinion, [feedbackType]: opinion[feedbackType] + 1})
//     }
//   }


//   return (
//     <>
//       <Description/>
//       <Options updateFeedback={updateFeedback} totalOPinion={totalOpinion}/>
      
//       {totalOpinion > 0 ? <Feedback good={opinion.good} neutral={opinion.neutral} bad={opinion.bad} total={totalOpinion} positive={totalOpinionPercent} /> : (<Notification/>)}
//     </>
//   )
// }


function App() {

  const [opinion, setOpinion] = useState(
    JSON.parse(window.localStorage.getItem("opinion")) || {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );


  // const [opinion, setOpinion] = useState(() => {

  //   if (window.localStorage.getItem("opinion") !== null) {
  //     return JSON.parse(window.localStorage.getItem("opinion"));
  //   }

  // })

  useEffect(() => {
    window.localStorage.setItem("opinion", JSON.stringify(opinion))
  }, [opinion]);

  const totalOpinion = opinion.good + opinion.neutral + opinion.bad

  const totalOpinionPercent = Math.round((opinion.good / totalOpinion) * 100)


  const updateFeedback = feedbackType => {
    if (feedbackType == "reset") {
      setOpinion({ good: 0, neutral: 0, bad: 0 })
    }
    else {
      setOpinion({...opinion, [feedbackType]: opinion[feedbackType] + 1})
    }
  }


  return (
    <>
      <Description/>
      <Options updateFeedback={updateFeedback} totalOPinion={totalOpinion}/>
      
      {totalOpinion > 0 ? <Feedback good={opinion.good} neutral={opinion.neutral} bad={opinion.bad} total={totalOpinion} positive={totalOpinionPercent} /> : (<Notification/>)}
    </>
  )
}

export default App

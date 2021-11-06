import { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Header from './components/Header'
import Card from './components/Card'

function App() {

  // State 
  const [reviewers, setReviewers] = useState([])
  const [reviewer, setReviewer] = useState(false)
  let [number, setNumber] = useState(0)

  // Set State
  const manuver = (n) => {
    setReviewer(reviewers[n])
  }
  const decNum = () => {
    let newNum = number
    if(newNum > 0){
      newNum -= 1
      setNumber(newNum)
    }else{
      newNum = 9
      setNumber(newNum)
    }
    manuver(newNum)
  }
  const incNum = () => {
    let newNum = number
    if(newNum < 9){
      newNum += 1
      setNumber(newNum)
    }else{
      newNum = 0
      setNumber(newNum)
    }
    manuver(newNum)
  }
  const ranNum = () => {
    let newNum = Math.floor(Math.random() * 10)
    setNumber(newNum)
    manuver(newNum)
  }

  // useEffect
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://testimonialapi.toolcarton.com/api')
      const data = await response.json()

      return data
    }

    getData().then(data => setReviewers(data))
  },[])
  useEffect(() => {
    if(reviewers.length>0) setReviewer(reviewers[number])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reviewers])

  return (
    <div className="App">
      {reviewer === false ? 
        <Loading /> : 
        <main className="main">
          <Header />
          <Card reviewer={reviewer} decNum={decNum} incNum={incNum} ranNum={ranNum} />
        </main>
      }
    </div>
  );
}

export default App;

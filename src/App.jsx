import React, { useState } from 'react'
import './App.css'

function App() {

  const [num, setNum] = useState(Math.floor(Math.random() * 100))
  const [chance, setChance] = useState(3)
  const [user, setUser] = useState('')

  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(99)

  function check() {
    if (user >= 0 && user <= 99) {
      if (num == user) {
        alert("You won, you are a genius")
        setUser('')
      }

      if (user > start && user < num) {
        setChance(chance - 1)
        alert("Wrong prediction, " + chance + " chances left")

        setStart(user)
        setUser('')
      }
      else if (user > start && user > num) {
        setChance(chance - 1)
        alert("Wrong prediction, " + chance + " chances left")
        setEnd(user)
        setUser('')
      }

      if (chance == 0) {
        alert("No chance left, we are restarting. The number was " + num)
        window.location = "/"
      }
    }
    else{
      alert("Please write two digit number")
      window.location = "/"
    }
  }


  function validateInput(value) {
    if (value < 0 || value > 99) {
      alert("Please write two digit number")
    }
  }


  return (
    <>
      <center>
        <h1>Guess a number between 1 and 99</h1>
        <p>You will get 4 chances to predict the number</p>
        <h2>Hint: Number is between {start} and {end}</h2>

        <input
          type='number'
          value={user}
          onInput={(event) => validateInput(event.target.value)}
          onChange={(event) => setUser(event.target.value)}
        />

        <br /><br />

        <button onClick={check}>Check</button>
      </center>
    </>
  )
}

export default App
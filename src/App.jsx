
import styles from './App.module.css'
import Display from './Components/Display'
import ButtonContainer from './Components/ButtonsContainer'
import { useState } from 'react'

function App() {

  const [calVal, setCalVal] = useState("40")

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("")
    } else if (buttonText === "=") {
      const result = eval(calVal)
      setCalVal(result)
    } else {
      const newDisplayValue = calVal + buttonText
      setCalVal(newDisplayValue)
    }
  }

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  )
}

export default App

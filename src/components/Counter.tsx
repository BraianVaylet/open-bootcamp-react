import useCounter from "hooks/useCounter"
import { ChangeEvent, useState } from "react"

const Counter = () => {
  const [step, setStep] = useState<number>(1)
  
  const {
    value,    
    increment,
    decrement,
    reset
  } = useCounter({
    initialValue: 2,
    max: 10,
    min: 2,
    step: step
  })

  const handleStep = (e: ChangeEvent<HTMLInputElement>) => (
    setStep(parseInt(e.currentTarget.value))
  )

  return (
    <div>
      {/* counter */}
      <div>
        <button onClick={increment}>➕</button>
        <input value={value} disabled />
        <button onClick={decrement}>➖</button>
      </div>   
      {/* steps */}
      <div>
        <span>Steps: </span>
        <input value={step} onChange={handleStep} />
      </div>
      {/* reset */}
      <button onClick={reset}>Reset Counter</button>
      
    </div>
  )
}

export default Counter
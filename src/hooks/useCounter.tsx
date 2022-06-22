import {useState} from 'react'

const useCounter = ({initialValue = 0, max, min = 0, step = 1}: useCounterTypes) => {
  const [value, setValue] = useState(initialValue)
  
  const increment = () => (
    max
      ? value < max && setValue(value + (step))
      : setValue(value + (step))    
  )

  const decrement = () => (
    min >= 0
      ? value > min && setValue(value - (step))
      : setValue(value - (step))
  )  

  const reset = () => setValue(initialValue)
  
  return {
    value,
    setValue,
    increment,
    decrement,
    reset
  }
}

export default useCounter

export interface useCounterTypes {
  initialValue?: number,
  max?: number,
  min?: number,
  step?: number
}
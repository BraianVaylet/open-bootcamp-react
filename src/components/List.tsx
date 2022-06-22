import { ChangeEvent, useState } from "react"
import useList from "hooks/useList"

const List = () => {
  const [element, setElement] = useState<string>('')
  const {
    value,
    push,
    remove,
    isEmpty,
    clear,
    sort,
    invertedSort    
  } = useList([])

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    element && push(element)
    setElement('')
  }

  const handleElement = (e: ChangeEvent<HTMLInputElement>) => (
    setElement(e.currentTarget.value)
  )

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={element} onChange={handleElement} />
        <button type='submit'>Add</button>
      </form>

      <ul>        
        {
          !isEmpty && value.map((element: any, index: number) => (
            <li key={index}>
              <span>{element}</span>
              <input type='checkbox' checked={false} onChange={() => remove(index)}/>
            </li>
          ))
        }        
      </ul>

      <div>
        <button onClick={clear}>Clear</button>
        <button onClick={sort}>Sort</button>
        <button onClick={invertedSort}>Invert Sort</button>
      </div>
    </div>
  )
}

export default List
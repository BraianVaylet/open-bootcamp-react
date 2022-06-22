import { useState } from 'react'

const useList = ({initialValue = []}: any) => {
  const [value, setValue] = useState<string[]>(initialValue)  

  const push = (element: any) => setValue([...value, element])

  const remove = (index: number) => setValue(value.filter((_: any, i: number) => i !== index))

  const clear = () => setValue([])
  
  const sort = () => setValue([...value.sort()])
  
  const invertedSort = () => setValue([...value.sort().reverse()])
  
  const isEmpty = value.length === 0

  return {
    value, 
    setValue,
    push,
    remove,
    isEmpty,
    clear,
    sort,
    invertedSort
  }
}

export default useList

export interface useListTypes {
  initialValue?: string[]
}
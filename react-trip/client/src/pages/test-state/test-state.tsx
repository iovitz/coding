import React, { useEffect, useState } from 'react'
import styles from './test-state.module.css'

export default function TestState() {
  const [list, setList] = useState([1, 2, 3])
  const [inputValue, setInputValue] = useState('')

  const handleChange:React.ChangeEventHandler<HTMLInputElement> = ({target}) => {
    console.log(target.value.trim())
    setInputValue(target.value.trim())
  }

  // useEffect(() => {
  //   console.log(inputValue)
  // }, [inputValue])

  
  useEffect(() => {
    console.log('组件挂载');
  }, [])
  

  const handleButtonClick:React.MouseEventHandler<HTMLButtonElement> = () => {
    if(inputValue === '') return
    const val = Number(inputValue)
    setInputValue('')
    if(isNaN(val)) {
      alert('What\'s your input is not a Number.')
      return
    }
    setList([...list, val])
  }
  
  return (
    <>
      <input type="text" onChange={handleChange} />
      <button onClick={handleButtonClick} value={inputValue}>Click to add.</button>
      <ul>
        {
          list.map((item, index) => <li key={index} className={styles.listItem}>
            {item}
          </li>)
        }
      </ul>
    </>
  )
}

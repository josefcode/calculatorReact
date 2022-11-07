import { useState } from 'react'
import Button from '../src/components/Button'
import './App.css'

const calculatorButtons = [
  {
    name: 'AC',
    id: 'clear'
  },
  {
    name: '/',
    id: 'divide'
  },
  {
    name: '*',
    id: 'multiply'
  },
  {
    name: '7',
    id: 'seven'
  },
  {
    name: '8',
    id: 'eight'
  },
  {
    name: '9',
    id: 'nine'
  },
  {
    name: '-',
    id: 'subtract'
  },
  {
    name: '4',
    id: 'four'
  },
  {
    name: '5',
    id: 'five'
  },
  {
    name: '6',
    id: 'six'
  },
  {
    name: '+',
    id: 'add'
  },
  {
    name: '1',
    id: 'one'
  },
  {
    name: '2',
    id: 'two'
  },
  {
    name: '3',
    id: 'three'
  },
  {
    name: '0',
    id: 'zero'
  },
  {
    name: '.',
    id: 'decimal'
  },
  {
    name: '=',
    id: 'equals'
  },
]

function App() {
  const [count, setCount] = useState("")
  

  const ops = ['/', '*', '+', '-', '.'];


 function calculate(){
    try {
        setCount(eval(count));
    } catch (e) {
      setCount('error')
    }
}

function handleClick(e){
    const value = e.target.value;
    
    switch(value) {
        case 'AC':
          setCount('')
            break;
        case '=':
         calculate()
         
            break;
        default:
          if(
            ops.includes(value) && count === '' || 
            ops.includes(value) && ops.includes(count.slice(-1))
          ){
            return;
          } 
            setCount(count + value);
    }
}

  return (
    <div className="calculator">
      <div className = "outputScreen" id = "display">
      {count || "0"}
      
      </div>
      <div>
       {
        calculatorButtons.map(item => <Button key = {item.id} id = {item.id} name = {item.name} value = {item.name}
        onclick = {handleClick} />)
       }
      </div>
    </div>
  )
}

export default App

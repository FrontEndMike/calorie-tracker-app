import { useState } from 'react'
import Form from './components/form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='px-4'>
        <h1 className="mt-8 text-4xl text-center font-bold text-blue-500">Calorie Intake Estimator</h1>
        <p className='text-center'>By: FrontEndMike</p>
        <Form />
      </div>
     
    </>
  )
}

export default App

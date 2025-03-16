import { useState } from 'react'
import Form from './components/form'
import calculateResults from './components/Calculations'
import './App.css'

function App() {
    /* Manage state from parent */
    const [formData, setFormData] = useState({
        name: "",
        age: '',
        sex: '',
        height: '',
        weight: '',
        activity: '',
        goals: '',
    });

    /* Process new form data passed from child back to parent */
    const handleFormSubmit = (data) => {
      setFormData(data);
      calculateResults(data);
    };

  return (
    <>
      <div className='px-4 main-parent w-full'>
        <h1 className="">Calorie Intake Estimator</h1>
        <p className='text-center'>By: FrontEndMike</p>
        <div className="max-w-[600px] w-full flex shadow-lg rounded-lg  mt-4 mx-auto overflow-hidden">
          <div className="w-1/3 form-aside p-4">
            <h2 className="text-3xl bold mt-4 text-white">Welcome</h2>
          </div>
        <Form className="" formData={formData} setFormData={setFormData} onSubmit={handleFormSubmit} 
        /* Pass global state to child component from parent through props */ />
        </div>
      </div>
     
    </>
  )
}

export default App

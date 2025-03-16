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
      <div className='main-parent'>
        <div className="form-parent">
          <div className="form-aside">
            <h1 className="">
              Welcome
              <span className="">to the Calorie Intake Estimator by <a href="https://frontendmike.com" className="hover:underline" target="_blank" rel="noopener noreferrer">
                  @FrontEndMike
              </a></span>
              </h1>
              <p className="text-white mt-4">Please enter all your information for an estimation of your suggested daily calorie intake.</p>
          </div>
        <Form className="" formData={formData} setFormData={setFormData} onSubmit={handleFormSubmit} 
        /* Pass global state to child component from parent through props */ />
        </div>
      </div>
     
    </>
  )
}

export default App

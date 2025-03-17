import { useState, useMemo } from 'react'
import Form from './components/form'
import Results from './components/results'
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

    const [calculatedResult, setCalculatedResult] = useState(null);
    const [isSubmitted, setisSubmitted] = useState(false);

    /* Process new form data passed from child back to parent */
    const handleFormSubmit = (data) => {
      setFormData(data);
      let result = calculateResults(data);
      setisSubmitted(true);
      if(result !== null){
        setCalculatedResult(result);
      }
    };

    const handleReset = () => {
      setisSubmitted(false); // Show form again
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
            { /* Pass global state to child component from parent through props */ }
            {!isSubmitted &&  <Form formData={formData} setFormData={setFormData} onSubmit={handleFormSubmit} /> }
            {isSubmitted && <Results onReset={handleReset} results={calculatedResult} data={formData} /> }
        </div>
      </div>
     
    </>
  )
}

export default App

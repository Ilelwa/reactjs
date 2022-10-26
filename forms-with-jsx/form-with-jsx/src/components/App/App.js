import { useState } from 'react';
import './App.css';
function App() {
  const[submitting,setSubmitting]=useState(false)  
  const handleSubmit =event =>{
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() =>{
      setSubmitting(false);
    },3000 )

  } 
  return (
   <div className='wrapper'>
    {submitting && 
      <div>Submitting</div>
    }
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label> 
          <p>Name</p>
          <input text='name'/>
        </label>
      </fieldset>
      <button>Submit</button>
    </form>
   </div>
  );
}

export default App;

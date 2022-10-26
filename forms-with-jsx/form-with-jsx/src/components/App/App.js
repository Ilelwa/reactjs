import { useState,useReducer } from 'react';
import './App.css';

const formReducer = (state,event) => {
  if(event.reset){
    return{
      name:'',
      apple:'',
      count:'',
      'gift-wrap':false
    }
  }

  return{
    ...state,
    [event.name]:event.value
  }
}

function App() {
  const[formData,setFormData] = useReducer(formReducer,{
    count:100,
  });
  const[submitting,setSubmitting]=useState(false);  
  const handleSubmit =event =>{
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() =>{
      setSubmitting(false);
    },3000 )
    setFormData({
      reset:true
    }
    )
    

  } 
  const handleChange = event =>{
    const isCheckbox = event.target.type === 'checkbox';
    

    setFormData({
      name:event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    });
  }
  
  return (
   <div className='wrapper'>
    {submitting && 
      <div>Submitting
        <ul>
          {Object.entries(formData).map(([name,value]) =>(
            <li key={name}><strong>{name}</strong>:{value.toString()}</li>
          ))}
        
        </ul>
      </div>
      
    }
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label> 
          <p>Name</p>
          <input name='name' onChange={handleChange} value ={formData.name || ''}/>
        </label>
      </fieldset>
      <fieldset>
        <label>
          <p>Select Apple</p>
          <select name= 'apple' onChange={handleChange} value={formData.apple || ''}>
            <option value=''>Choose an option</option>
            <option value='Fuji'>Fuji</option>
            <option value='jonathan'>jonath</option>
            <option value='honey-crisp'>honey-crisp</option>
          </select>
        </label>
      </fieldset>
      <fieldset>
        <label>
          <p>Count</p>
          <input type='number' name = 'count' onChange={handleChange} step='1' value={formData.count || ''} />
        </label>
      </fieldset>
      <fieldset>
        <label>
          <p>Gift wrap</p>
          <input type='checkbox' name='gift-wrap' onChange={handleChange} checked={formData['gift-wrap'] || false}/>
        </label>
      </fieldset>
      <button>Submit</button>
    </form>
   </div>
  );
}

export default App;

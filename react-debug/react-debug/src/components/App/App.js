import './App.css';
import {createContext,useState} from 'react';
import TextInformation from '../TextInformation/TextInformation';

//create context
export const TextContext = createContext();
TextContext.displayName = 'TextContext';

function App() {
  const[text,setText] = useState('');

  return (
    <TextContext.Provider value={text}>
      <div className='wrapper'>
        <label htmlFor='text'>
          Add your text here.
          <textarea
            id='text'
            name='text'
            rows ='10'
            cols = '100'
            onChange={e => setText(e.target.value)}
          >
          </textarea> 
        </label>
        <TextInformation />
      </div>
    </TextContext.Provider>
  );
}

export default App;

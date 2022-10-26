import React,{lazy,Suspense,useState,useReducer}  from 'react';
import './App.css';
const RiverInformation= lazy(() => import(/* webpackChunkName: "RiverInformation" */ '../RiverIformation/RiverInformation'));

function App() {
  const[river,setRiver]=useState('nile');
  const[show,toggle]=useReducer(state => !state, true);

  return (
      <div className='wrapper'>
        <div><button onClick={toggle}>Toogle item</button></div>
        <button onClick={() => setRiver('nile')}>Nile</button>
        <button onClick={() => setRiver('amazon')}>Amazon</button>
        <button onClick={() => setRiver('yangtze')}>Yangtze</button>
        <button onClick={() => setRiver('mississippi')}>Mississipi</button>
        <Suspense fallback={<div>Loading...</div>}>
        {show &&<RiverInformation name={river} /> }
        </Suspense>
      </div>
  );
}

export default App;

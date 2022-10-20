import './App.css';
import CartError from '../CartError/CartError';
import CartSuccess from '../CartSuccess/CartSuccess';
import {createUseStyles} from 'react-jss';

//set us the jss style
const useStyle = createUseStyles({
  wrapper : {
    padding:20,
  }
})
function App() {
  const classes = useStyle();
  return (
    <div className = {classes.wrapper}>
      <div>Alert</div>
      <CartError/>
      <CartSuccess/>
    </div>
  );
}

export default App;

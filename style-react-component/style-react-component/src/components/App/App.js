import './App.css';
import CartError from '../CartError/CartError';
import CartSuccess from '../CartSuccess/CartSuccess';
function App() {
  return (
    <div className = 'wrapper'>
      <div>Alert</div>
      <CartError/>
      <CartSuccess/>
    </div>
  );
}

export default App;

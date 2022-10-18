import './App.css';
import AnimalCard  from '../AnimalCard/AnimalCard';
import animals from './data';

function App() {
  return (
    <div className='wrapper'>
      {animals.map(animal =>
      <AnimalCard
      name = {animal.name}
      key  = {animal.name}
      diet = {animal.diet}
      size = {animal.size}
      scientificName = {animal.scientificName}
      />
       )}


    </div>
  )
};

export default App;

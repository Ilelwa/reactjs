import './App.css';
import PersonalList from '../PersonList/PersonalList';
import PersonPost from '../PersonList/PersonPost';

function App() {
  return (
    <div className="App">
      <h1>Persons</h1>
      <PersonalList />
      <PersonPost />
    </div>
  );
}

export default App;

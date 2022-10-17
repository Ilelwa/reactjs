import './App.css'
import Instructions from '../Instructions/Instructions.js'
const displayEmojiName = event => alert(event.target.id);
const emojis = [
  
  {
    emoji:'😀',
    name:'grinny face' 
  },
  {
    emoji:'🎉',
    name:'party popper'
  },
  {
    emoji:'💃',
    name:'woman dancing'
  } //creating emoji component to loop over
  
];

function App (){
  const greeting = 'greeting';
  const displayText = false;

  return (
    <div className = 'container'>
      <h1 id = {greeting}>Hello there</h1>
      {displayText && <p>This is jsx</p>}
      <Instructions/>
      <ul>
        {
          emojis.map(emoji=> (
            <li key = {emoji.name}>
              <button onClick={displayEmojiName}>
                <span role='img'aria-label={emoji.name} id = {emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default App;

/*this code uses jsx to map()emoji array and list them as <li> list items
 * 
*/
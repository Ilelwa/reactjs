import './App.css';

const displayEmojiName = event => alert(event.target.id);
const displayAction = false;
const emojis = [
	{
		emoji: "😀",
		name :"grinning face"
	},
	{
		emoji:"🎉",
		name :"party popper"
	},
	{
		emoji:"💃",
		name :"woman dancing"
	}
]
function App() {
	const greeting = "greeting";
  return(
	  <div className = "container">
	  <h1 id = {greeting}>Hello Family </h1>
	  {displayAction && <p> im writing jsx </p>}
	  <ul>
		{
			emojis.map(emoji => (
				<li key={emoji.name}>
					<button
						onClick= {displayEmojiName} 
						>
						<span role="img" arial-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
					</button>	
				</li>
			))
		
		}
	  </ul>
	  </div>
  )

}

export default App;

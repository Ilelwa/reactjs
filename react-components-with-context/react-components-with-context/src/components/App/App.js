import Navigation from "../Navigation/Navigation";
import SaladMaker from "../SaladMaker/SaladMaker";
import UserContext from "../User/User";
const user ={
  name:'Johannes',
  favorites:['Apple','carrot']
}
function App() {
  return (
    <>
    <UserContext.Provider value={user}>
     <Navigation/>
     <SaladMaker/>
     </UserContext.Provider>
    </>
  );
}

export default App;

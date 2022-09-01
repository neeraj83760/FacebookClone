import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
// import {useStateValue} from './StateProvider'
import {AuthContextProvider} from './AuthContext'

function App() {
// const [{user},dispatch] = useStateValue();

const user = null;

  return (
    // BEM naming conventions for CSS should be used every time
    <AuthContextProvider>
      <div className="app">
       
      {!user ? (<Login />) : (
      
       <>
         {/*Header*/}
         <Header/>
    
         {/* App body */}
    
        <div className="app_body">
         
         {/* Sidebar  */}
    
        <Sidebar />
    
        {/* Feed */}
    
        <Feed />
    
        {/* Widgets */}
    
        <Widgets />
    
        </div> 
         
       </>
  
  
       )} 
  
     
      </div>
  //  </AuthContextProvider>
  );
}

export default App;

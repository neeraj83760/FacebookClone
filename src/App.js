import './App.css';
import Header from './Header';

function App() {
  return (
    // BEM naming conventions for CSS should be used every time
    <div className="app">
     {/*Header*/}
    <Header/>

     {/* App body */}

    <div className="app_body">
     
     {/* Sidebar  */}

    <Sidebar /> 
     {/* Feed */}
     {/* Widgets */}

    </div> 
     
    </div>
  );
}

export default App;

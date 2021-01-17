import './App.css';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home';
import ServiceNavbar from './Components/ServiceNavbar/ServiceNavbar';

function App() {
  return (
    <div className="app">

      {/* Header Component */}
      <Header/>  
      <ServiceNavbar />   

      {/* Home Component */}
      <Home/>
      
    </div>
  );
}

export default App;

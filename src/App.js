import "./App.css";
import Home from "./PortfolioContainer/Home/Home";
import About from "./PortfolioContainer/About/About";
import Resume from "./PortfolioContainer/Resume/Resume";
function App(){
  return(
    <div className='App'>
       <Home />
       <About />
       <Resume />
    </div>
  )
}

export default App;

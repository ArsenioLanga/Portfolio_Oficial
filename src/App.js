import "./App.css";
import Home from "./PortfolioContainer/Home/Home";
import About from "./PortfolioContainer/About/About";
import Resume from "./PortfolioContainer/Resume/Resume";
import Contact from "./PortfolioContainer/Contact/Contact";
function App(){
  return(
    <div className='App'>
       <Home />
       <About />
       <Resume />
       <Contact />
    </div>
  )
}

export default App;

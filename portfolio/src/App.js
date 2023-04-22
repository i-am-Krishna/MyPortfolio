import './App.css';
import { Navbar } from './Components/Navbar';
import {Home} from './Components/Home'
import { About } from './Components/About';
import {Skills} from './Components/Skills'
import { Contact } from './Components/Contact';
import { Projects } from './Components/Projects';
function App() {
  return (
    <div className="App">
       <Navbar/>
       <Home/>
       <About/>
       <Skills/>
       <Projects/>
       <Contact/>
    </div>
  );
}

export default App;

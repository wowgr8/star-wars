import './App.css';
import Footer from './Footer';
import Header from './Header';
import Control from './Control';
import bgImage from '../assets/img/star-background.jpeg';
import Characters from '../pages/Characters';
import Planets from '../pages/Planets';
import Species from '../pages/Species';
import { 
  BrowserRouter as Router,
  Routes,
  Route 
  } from "react-router-dom";

function App() {
  return (
    <div className="hero h-screen justify-between w-full" style={{ backgroundImage:`url(${bgImage})`}}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Control />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/species" element={<Species />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
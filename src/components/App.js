import './App.css';
import Footer from './Footer';
import Header from './Header';
import Control from './Control';
import bgImage from '../assets/img/star-background.jpeg';
import { 
  BrowserRouter as Router,
  Routes,
  Route 
  } from "react-router-dom";
import Characters from '../pages/Characters';
import Planets from '../pages/Planets';
import Species from '../pages/Species';

function App() {
  return (
    <Router>
      <div className="hero min-h-screen" style={{ backgroundImage:`url(${bgImage})`}}>
        <Header />
        <Control />
        <Routes>
          <Route path="/characters" element={<Characters />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/species" element={<Species />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
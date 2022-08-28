import './App.css';
import Footer from './Footer';
import Header from './Header';
import Control from './Control';
import bgImage from '../assets/img/star-background.jpeg';

function App() {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage:`url(${bgImage})`}}>
      <Header />
      <Control />
      <Footer />
    </div>
  );
}

export default App;
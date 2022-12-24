import './App.css';
import Chat from './components/Chat/Chat';
import Crousel from './components/Crousel/Crousel';
import Navigation from './components/Navigation/Navigation';
import Features from './components/features/Features';
import AboutUs from './components/aboutUs/AboutUs'
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Navigation/>
      <Crousel/>
      <Features/>
      <AboutUs/>
      <FAQ/>
      <Chat/>
      <Footer/>
    </div>
  );
}

export default App;

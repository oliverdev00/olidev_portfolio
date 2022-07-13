import './App.css';
import Header from "./components/header"
import Hero from './components/layouts/Hero';
import Aboutme from './components/layouts/Aboutme';
import Projects from './components/layouts/Projects';
import ContactMe from './components/layouts/ContactMe';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Aboutme/>
      <Projects/>
      <ContactMe/>
    </div>
  );
}

export default App;

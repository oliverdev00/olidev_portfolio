import './App.css';
import styled from 'styled-components';
import {ThemeProvider} from 'styled-components';
import Header from "./components/header";
import Hero from './components/layouts/Hero';
import Aboutme from './components/layouts/Aboutme';
import Projects from './components/layouts/Projects';
import ContactMe from './components/layouts/ContactMe';

const BarNav = styled.div `
background-color: lightgreen;`

function App() {
  return (
    <div className="App">
     <ThemeProvider>
      <Header/>
      <Hero/>
      <Aboutme/>
      <Projects/>
      <ContactMe/>
      </ThemeProvider>
    </div>
  );
}

export default App;

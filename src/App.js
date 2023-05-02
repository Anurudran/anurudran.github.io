import React from "react"
import Navigation from './components/Navigation';
import Work from './components/Work';
import About from './components/About';
import Projects from './components/Projects';



const App = () => {
  return (
      <div>
        <Navigation/>
        <About />
        <Work/>
        <Projects />
      </div>
  );
}

export default App;
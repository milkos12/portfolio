import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Banner />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;

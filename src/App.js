import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Banner className='banner'/>
      <div className='decriptions'>
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

export default App;

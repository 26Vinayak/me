import './App.css';
import Sidebar from './Components/Sidebar';
import Introduction from './Components/Intro';
import About from './Components/About';
import Timeline from './Components/Timeline';
import Contact from './Components/Contact';

function App() {
  return (
    <div id="colorlib-page">
        <div id="container-wrap">
            <Sidebar/>
            <div id = "colorlib-main">
              <Introduction/>
              <About/>
              <Timeline/>
              <Contact/>
            </div>
      	</div>
      </div>
  );
}

export default App;

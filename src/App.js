import './bootstrap/mian.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import About from './components/about';
import Galery from './components/galery';
import Hobby from './components/hobby';
import Jumbotron from './components/jumbotron';
import Navbar from './components/navbar';
import Project from './components/project';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <About />
      <Hobby />
      <Galery />
      <Project />
    </div>
  );
}

export default App;

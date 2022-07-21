import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Services from "./Components/Services"
import About from "./Components/About"
import Contact from "./Components/Contact"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/'  element={<Home />}/>
          <Route path='/about'  element={<About />}/>
          <Route path='/services'  element={<Services />}/>
          <Route path='/contact'  element={<Contact />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

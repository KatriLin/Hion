import Header from './components/Header.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import About from './components/About.js';
import ScrollToTop from './components/ScrollToTop.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Workexperience from './components/Workexperience.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/workexperience" element={<Workexperience />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

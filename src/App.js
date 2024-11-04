import Header from './components/Header.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import About from './components/About.js';
import ScrollToTop from './components/ScrollToTop.js';
import Workexperience from './components/Workexperience.js';
import Education from './components/Education.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

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
          <Route path="/education" element={<Education />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

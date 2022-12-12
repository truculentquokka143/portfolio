import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Work from "./pages/Work";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Redesign from "./pages/Redesign";
import Footer from "./components/Footer";
import Iterative from './pages/Iterative';
import Development from './pages/Development';
import Personas from './pages/Personas';

function App() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);
  return (
    <div className="App">
      <div className="body">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/portfolio" element={<Work />} />
            <Route path="/porfolio/about" element={<About />} />
            <Route path="porfolio/resume" element={<Resume />} />
            <Route path="/porfolio/redesign" element={<Redesign />} />
            <Route path="/porfolio/iterative" element={<Iterative />} />
            <Route path="/porfolio/development" element={<Development/>} />
            <Route path="/porfolio/personas" element={<Personas />} />
          </Routes>
        </Router>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import CallForPapers from './pages/CallForPapers';
import Committee from './pages/Committee';
import Speakers from './pages/Speakers';
import Registration from './pages/Registration';
import Schedule from './pages/Schedule';
import Venue from './pages/Venue';
import Sponsors from './pages/Sponsors';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/call-for-papers" element={<CallForPapers />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
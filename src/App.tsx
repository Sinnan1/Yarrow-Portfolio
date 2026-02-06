import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Photography from './pages/Photography';
import Gallery from './pages/Gallery';
import Films from './pages/Films';
import Contact from './pages/Contact';

import About from './pages/About';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-cream">
      <CustomCursor />
      <ScrollProgress />
      <ScrollToTop />
      {!['/', '/about', '/films', '/photography'].includes(location.pathname) && !location.pathname.startsWith('/photography/') && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/photography/:slug" element={<Gallery />} />
          <Route path="/films" element={<Films />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

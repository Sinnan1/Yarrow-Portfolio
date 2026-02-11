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
import FAQ from './pages/FAQ';

import About from './pages/About';
import Dashboard from './pages/Admin/Dashboard';
import Editor from './pages/Admin/Editor';
import ProtectedRoute from './components/ProtectedRoute';

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
          <Route path="/faq" element={<FAQ />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="edit/:page" element={<Editor />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

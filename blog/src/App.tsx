import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import InkMountains from './components/InkMountains';
import Home from './pages/Home';
import Blog from './pages/Blog';
import ArticleDetail from './pages/ArticleDetail';
import About from './pages/About';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <InkMountains />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<ArticleDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';

// Photo Portfolio
import Yearbook from './pages/portfolio/photo/Yearbook';
import Studio from './pages/portfolio/photo/Studio';
import PhotoDokumentasi from './pages/portfolio/photo/Dokumentasi';

// Video Portfolio
import VideoDokumentasi from './pages/portfolio/video/Dokumentasi';
import Reels from './pages/portfolio/video/Reels';
import Wedding from './pages/portfolio/video/Wedding';
import ShortMovie from './pages/portfolio/video/ShortMovie';

// Visual Portfolio
import Design from './pages/portfolio/visual/Design';
import Videotron from './pages/portfolio/visual/Videotron';

// Website Portfolio
import WebsiteInfo from './pages/portfolio/website/Info';
import WebsitePortfolio from './pages/portfolio/website/Portfolio';
import WebsitePackages from './pages/portfolio/website/Packages';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          {/* Photo Routes */}
          <Route path="photo/yearbook" element={<Yearbook />} />
          <Route path="photo/studio" element={<Studio />} />
          <Route path="photo/dokumentasi" element={<PhotoDokumentasi />} />

          {/* Video Routes */}
          <Route path="video/dokumentasi" element={<VideoDokumentasi />} />
          <Route path="video/reels" element={<Reels />} />
          <Route path="video/wedding" element={<Wedding />} />
          <Route path="video/short-movie" element={<ShortMovie />} />

          {/* Visual Routes */}
          <Route path="visual/design" element={<Design />} />
          <Route path="visual/videotron" element={<Videotron />} />

          {/* Website Routes */}
          <Route path="website/info" element={<WebsiteInfo />} />
          <Route path="website/portfolio" element={<WebsitePortfolio />} />
          <Route path="website/packages" element={<WebsitePackages />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

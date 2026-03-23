import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';

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
import Website from './pages/portfolio/website/Website';

import ScrollToTop from './components/ScrollToTop';

import { ContentProvider } from './context/ContentContext';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import ContentManager from './pages/admin/ContentManager';
import TestimonialManager from './pages/admin/TestimonialManager';

function App() {
  return (
    <ContentProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />

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
            <Route path="website" element={<Website />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="photos" element={<ContentManager pageType="photos" />} />
            <Route path="videos" element={<ContentManager pageType="videos" />} />
            <Route path="visual" element={<ContentManager pageType="visual" />} />
            <Route path="website" element={<ContentManager pageType="website" />} />
            <Route path="testimonials" element={<TestimonialManager />} />
          </Route>
        </Routes>
      </Router>
    </ContentProvider>
  );
}

export default App;

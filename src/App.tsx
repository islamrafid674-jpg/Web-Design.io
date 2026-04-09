/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Work } from './pages/Work';
import { Pricing } from './pages/Pricing';
import { GetStarted } from './pages/GetStarted';

export default function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/get-started" element={<GetStarted />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


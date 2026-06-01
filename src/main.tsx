import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import DataCentres from './pages/DataCentres.tsx';
import Deepfakes from './pages/Deepfakes.tsx';
import Chatbots from './pages/Chatbots.tsx';
import Jobs from './pages/Jobs.tsx';
import AIPsychosis from './pages/AIPsychosis.tsx';
import Algorithms from './pages/Algorithms.tsx';
import ActualIntelligence from './pages/ActualIntelligence.tsx';
import Copyright from './pages/Copyright.tsx';
import Engagement from './pages/Engagement.tsx';
import Legal from './pages/Legal.tsx';
import Scorecard from './pages/Scorecard.tsx';
import HowScrewed from './pages/HowScrewed.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/datacentres" element={<DataCentres />} />
        <Route path="/deepfakes" element={<Deepfakes />} />
        <Route path="/chatbots" element={<Chatbots />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/ai-psychosis" element={<AIPsychosis />} />
        <Route path="/algorithms" element={<Algorithms />} />
        <Route path="/actual-intelligence" element={<ActualIntelligence />} />
        <Route path="/copyright" element={<Copyright />} />
        <Route path="/engage-attach" element={<Engagement />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/scorecard" element={<Scorecard />} />
        <Route path="/screwed" element={<HowScrewed />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

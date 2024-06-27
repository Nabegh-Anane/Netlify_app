import React from 'react';
import ReactDOM from 'react-dom';
import Root from './routes/root';
import ErrorPage from './error-page';
import About from './routes/about';
import Contact from './routes/contact';
import Projects from './routes/projects';
import Skills from './routes/skills';
import Services from './routes/services';
import Privacy from './routes/privacy';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom';
import './index.css';

import '@fontsource/outfit';
import '@fontsource/roboto';

const App = () => {
  const router = (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/services" element={<Services />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );

  return (
    <React.StrictMode>
      <Router>{router}</Router>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById('root');
const reactRoot = createRoot(rootElement);

// Use ReactDOM.createRoot for React versions <18
reactRoot.render(<App />);

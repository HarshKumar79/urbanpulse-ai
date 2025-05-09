import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar toggleMenu={toggleMenu} />
        <Routes>
          <Route path="/" element={<div>Welcome to UrbanPulse AI</div>} />
          <Route path="/dashboard" element={<div>Dashboard Placeholder</div>} />
          <Route path="/recommender" element={<div>Recommender Placeholder</div>} />
          <Route path="/about" element={<div>About Placeholder</div>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
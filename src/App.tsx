import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CoverageAnalysis from './pages/CoverageAnalysis';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analise-cobertura" element={<CoverageAnalysis />} />
      </Routes>
    </Router>
  );
}

export default App;

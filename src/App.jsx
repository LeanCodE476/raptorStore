
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importa tus componentes
import Home from './components/Home';
import Pesca from './components/Pesca';
import Electronica from './components/Electronica';
import Header from './components/Header';


function App() {
  return (<>
    <Header />
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pesca" element={<Pesca />} />
        <Route path="/electronica" element={<Electronica />} />
      </Routes>
    </BrowserRouter></>
    
  );
}
export default App;
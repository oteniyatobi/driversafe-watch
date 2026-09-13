import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import ForFleets from './pages/ForFleets';
import About from './pages/About';
import ContactDemo from './pages/ContactDemo';
import NotFound from './pages/NotFound';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/for-fleets" element={<ForFleets />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactDemo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;

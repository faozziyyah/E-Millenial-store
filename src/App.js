import Home from './components/Home'
import Header from './components/Header';
import Footer from './components/Footer'
import Cart from './components/Cart'
import {  Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route  path="/cart" element={<Cart />} />
        </Routes>

      <Footer />
     </>
  );
}

export default App;

import React from 'react';
import { CartProvider } from './context/CartContext';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProductsSection from './components/ProductsSection';

import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <HeroSection />
        <ServicesSection />
        <ProductsSection />
        <ContactSection />
        <Footer />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
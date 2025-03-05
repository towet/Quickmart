import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCategories from './components/FeaturedCategories';
import ProductGrid from './components/ProductGrid';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <FeaturedCategories />
        <ProductGrid />
        <Newsletter />
      </main>
    </div>
  );
}

export default App;
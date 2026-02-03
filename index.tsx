
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import RootLayout from './app/layout';
import Home from './app/page';
import AboutPage from './app/about/page';
import InfrastructurePage from './app/infrastructure/page';
import ProductsPage from './app/products/page';
import SustainabilityPage from './app/sustainability/page';
import ContactPage from './app/contact/page';
import ShadeCardPage from './app/shade-card/page';
import ProductDetailPage from './app/products/ProductDetailPage';

const App = () => {
  const [path, setPath] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setPath(window.location.hash || '#home');
      // Smooth scroll to top on navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    const currentHash = path === '' ? '#home' : path;

    // Handle exact matches
    if (currentHash === '#home') return <Home />;
    if (currentHash === '#about') return <AboutPage />;
    if (currentHash === '#infrastructure') return <InfrastructurePage />;
    if (currentHash === '#products') return <ProductsPage />;
    if (currentHash === '#sustainability') return <SustainabilityPage />;
    if (currentHash === '#contact') return <ContactPage />;
    if (currentHash === '#shade-card') return <ShadeCardPage />;

    // Handle dynamic routing for product detail
    if (currentHash.startsWith('#product/')) {
      const slug = currentHash.split('/')[1];
      return <ProductDetailPage slug={slug} />;
    }

    // Default fallback
    return <Home />;
  };

  return (
    <RootLayout>
      <div className="animate-fade-in">
        {renderContent()}
      </div>
    </RootLayout>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

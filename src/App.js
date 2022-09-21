import React from 'react';
import './library/bootstrap/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';
import RenderRoutes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <div>
    {/* Navbar */}
      <Navbar />
    {/* Header */}
      <Header />
      <RenderRoutes />
    {/* Footer */}
      <Footer />
  </div>
  );
}

export default App;

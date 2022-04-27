import React, { useEffect } from 'react'
import Header from './components/navbar/index'
import Text from './components/text-container';
import Footer from './components/footer';

export default function App() {
  useEffect(() => {
    document.title = "Portfolio"
 }, []);

  return (
    <div className="App" style={{ position:"relative" }}>
      <Header/>
      <Text/>
      <Footer/>
    </div>
  );
}
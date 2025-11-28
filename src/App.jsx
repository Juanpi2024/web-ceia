import React from 'react';
import { Header, Footer } from './components/Layout';
import Hero from './sections/Hero';
import History from './sections/History';
import Mission from './sections/Mission';
import Programs from './sections/Programs';
import Support from './sections/Support';
import Facilities from './sections/Facilities';
import Admission from './sections/Admission';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <History />
        <Mission />
        <Programs />
        <Support />
        <Facilities />
        <Admission />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative bg-secondary selection:bg-primary/30 selection:text-white">
      {/* Background Layer */}
      <div className="fixed inset-0 bg-grid-white pointer-events-none opacity-40 -z-10" />
      <div className="fixed inset-0 bg-gradient-to-tr from-secondary via-secondary to-primary/5 pointer-events-none -z-20" />
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

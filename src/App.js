import React from 'react';
import Topstripe from './components/Topstripe';
import Navbar from './components/Navbar';
import Home from './components/Home';
import StatsBar from './components/StatsBar';
import Work from './components/Work';
import Partner from './components/Partner';
import Slider from './components/Featured';
import Gallery from './components/Gallery';
import Step from './components/Step';
import FAQs from './components/FAQs';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FunBlogs from './components/FunBlogs';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Topstripe />
      <Navbar />
      <Home />
      <StatsBar />
      <Work />
      <Partner />
      <Slider />
      <Gallery />
      <Step />
      <FAQs />
      <About />
      <Testimonials />
      <FunBlogs />
      <Footer />
    </div>
  )
}

export default App;

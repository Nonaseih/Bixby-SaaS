import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import About from './About.jsx';
import Features from './Features.jsx';
import Blog from './Blog.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Blog />
      </main>
      <Footer />
    </>
  );
}

export default App;

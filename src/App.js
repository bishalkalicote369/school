import About from './components/About';
import Ani from './components/Ani';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Facilities from './components/Facilities';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';


function App() {
  return (
    <section className='app-container' style={{ width: '90%', margin: '0 auto' }}>
      <section><Nav /></section>
      <section><Hero /></section>
      <section ><Ani /></section>
      <section></section>
      <section id='blogs'><Blog /></section>
      <section id='facilities'><Facilities /></section>
      <section id='aboutus'><About /></section>
      <section id='contactus'><Contact /></section>
      <section><Footer /></section>
    </section>
  );
}

export default App;

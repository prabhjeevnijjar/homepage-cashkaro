import './App.css';
import Banner from './components/Banner';
import Cards from './components/Cards';
import CompareCards from './components/CompareCards';
import Nav from './components/Nav';
import Offers from './components/Offers';
import LoungeFinder from './components/LoungeFinder';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Offers />
      <Cards />
      <CompareCards />
      <LoungeFinder />
      <Footer />
    </>
  );
}

export default App;

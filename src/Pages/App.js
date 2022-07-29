import './App.css';
import Header from '../Components/Header/Header';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Main from './Main/Main';
import Footer from '../Components/Footer/Footer';
import Series from './Series/Series';
import Card from './Card/Card';
import Accessories from './Accessories/Accessories';
import Basket from './Basket/Basket';
import MobileFooter from '../Components/MobileFooter/MobileFooter';
import Activation from './Warranty/Activation/Activation';

const  App = () => {
  return (
    <BrowserRouter className="App" >
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/series/:id" element={<Series />} />
        <Route path="/card/:id" element={<Card />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/warranty/activation" element={<Activation />} />
      </Routes>
      <Footer />
      <MobileFooter / >
    </BrowserRouter>
  );
}

export default App;

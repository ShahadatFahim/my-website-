import { Route, Routes } from 'react-router-dom';
import './App.css';
import BestSeller from './Pages/HomePage/FeaturedProduct/BestSeller/BestSeller';
import Featured from './Pages/HomePage/FeaturedProduct/Featured/Featured';
import Latest from './Pages/HomePage/FeaturedProduct/Latest/Latest';
import Special from './Pages/HomePage/FeaturedProduct/Special/Special';
import Home from './Pages/HomePage/Home/Home';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route index element={<Featured></Featured>}></Route>
          <Route path='/latest' element={<Latest></Latest>}></Route>
          <Route path='/bestSeller' element={<BestSeller></BestSeller>}></Route>
          <Route path='/special' element={<Special></Special>}></Route>
        </Route>
        <Route path='home' element={<Home>
          <Route index element={<Featured></Featured>}></Route>
          <Route path='/latest' element={<Latest></Latest>}></Route>
          <Route path='/bestSeller' element={<BestSeller></BestSeller>}></Route>
          <Route path='/special' element={<Special></Special>}></Route>
        </Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

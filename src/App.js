// import logo from './logo.svg';
import { Route , Routes} from 'react-router-dom';
import './App.css';
import Hero from './component/Hero';
import About from './component/About';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Work from './component/Work';
import Contact from './component/Contact';
import Blogs from './component/Blogs';
import Youtube from './component/Youtube';

function App() {
  return (

    <div className="App bg-[linear-gradient(#0a173f,#414c6e)] dark:bg-[linear-gradient(#f0f4ff,#f0f4ffe3)]">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/playlist' element={<Youtube/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

import Navbar from './navbar';
import Searchbar from './searchbar';
import Perfumelist from './Perfumelist';
import AboutUs from './aboutus';
import Footer from './footer';

function App(){
    return(
        <div>
        <Navbar></Navbar>
        <Searchbar></Searchbar>
        <Perfumelist></Perfumelist>
        <AboutUs></AboutUs>
        <Footer></Footer>
      </div>
    )
}

export default App
import Header from "./header";
import Footer from "./footer";
import Hero from "./hero";
import Product from "./Products/productsList"
import Slideshow from "./Slideshow/slideshow";
import Title from "./title";

function App() {
  return(
  <>
    <Header/>
    <Hero/>
    <Title title="Where Pet Love and Care Meet—See What We Have to Offer!"/>
    <Product/>
    <Title title="Discover a World of Love and Loyalty—Adopt Your Ideal Pet Today!"/>
    <Slideshow/>
    <Footer/>
  </>
  );

}

export default App

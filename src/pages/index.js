
import MyNavbar from '../components/NavBar';
import HomeCarousel from '../components/Carousel';
import Product from '../components/ProductCard';
import GridAutoLayout from '../components/ProductGrid';

export default function Index() {

  return (
    <>
      <MyNavbar></MyNavbar>
      <HomeCarousel></HomeCarousel>
      <Product ProdName= "Pants"></Product>
      <GridAutoLayout></GridAutoLayout>
      
    </>
  );
}
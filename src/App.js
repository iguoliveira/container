import Header from './components/navbar/index'
import Carousel1 from './components/carousel'
import Text from './components/text-container';
import Footer from './components/footer';

export default function App() {
  return (
    <div className="App" style={{ position:"relative" }}>
      <Header/>
      <Carousel1/>
      <Text/>
      <Footer/>
    </div>
  );
}
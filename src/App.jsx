import Header from './componentes/Header/header';
import Carrusel from './componentes/sections/section-carrusel';
import SectionCards from './componentes/sections/section-cards';
import Footer from './componentes/Footer/footer';
import SectionInformative from './componentes/informative/section-informative';

function App() {
  return (
    <div>
      <Header />
      <Carrusel />
      <SectionInformative />
      <SectionCards />
      <Footer />
    </div>
  );
}

export default App;


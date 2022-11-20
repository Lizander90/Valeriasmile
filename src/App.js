/* eslint-disable react/jsx-pascal-case */
// import './sass/app.css';
import Banner_nav_comp from './components/Banner_nav_comp/Banner_nav_comp';
import Carrusel_head_comp from './components/Banner_nav_comp/Carrusel_head_comp';
import images_locals_res from './assets/recursos'
import Servicio_cards from './components/Banner_nav_comp/Servicio_cards';

import './App.css';
import img1C from './assets/CARRUSEL1.JPG';
import { Container } from 'react-bootstrap';
import Section_About from './components/mid_Section/Section_About';
import { ServicesGeneral } from './components/sectionServices/ServicesGeneral';

import { FaStethoscope, FaTeethOpen, FaTeeth } from 'react-icons/fa';
import PopularServices from './components/PopularServices/PopularServices';
import { PlusServices } from './components/PlusServices/PlusServices';
import PlusServiceElement from './components/PlusServices/PlusServiceElement';
import GaleryControl from './components/Gallery/GaleryControl';
// import { IconContext } from 'react-icons';

function App() {

  const carrusel_img_list = [
    img1C,
    img1C,
    img1C
  ];
  // console.log(carrusel_img_list);
  return (
    <div className="App">


      <Banner_nav_comp logotipo={images_locals_res.logoVS}></Banner_nav_comp>
      <Container fluid>
        <Carrusel_head_comp />
        <Servicio_cards />
        <br />
        <Section_About />
        <ServicesGeneral />
        <PopularServices />

        <PlusServices>
          <PlusServiceElement titleElement='Tapaduras Instantanea' btnTitleElement='Agendar Ahora' imgNameElement='tapadurasInst' />
          <PlusServiceElement titleElement='Oferta &uacute;nica de Ortodoncia ' btnTitleElement='Agendar Ahora' imgNameElement='ortodInst' />
        </PlusServices>
        <GaleryControl />

      </Container>

      <br />
      {/* <img src={Carrusel.logoVS}></img> */}

    </div>
  );
}

export default App;

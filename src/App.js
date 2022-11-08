import './sass/app.css';
import Banner_nav_comp from './sass/valeria_components/header/Banner_nav_comp/Banner_nav_comp';
import Carrusel_head_comp from './sass/valeria_components/header/Banner_nav_comp/Carrusel_head_comp';

import Carrusel from './assets/recursos'
import Servicio_cards from './sass/valeria_components/header/Banner_nav_comp/Servicio_cards';

function App() {
  return (
    <div className="App">

      <Banner_nav_comp logotipo={Carrusel.logoVS}></Banner_nav_comp>

      <Carrusel_head_comp></Carrusel_head_comp>
      <Servicio_cards />
      <br />
      {/* <img src={Carrusel.logoVS}></img> */}

    </div>
  );
}

export default App;

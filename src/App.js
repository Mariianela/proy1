import logo from './logo.svg';
import './App.css';

import Inicio from './componentes/Inicio';
import Sucursales from './componentes/Sucursales';
import Menu from './componentes/menu';
import Contactos from './componentes/Contactos';
import Navbarprim from './layouts/Navbarprim';

function App() {
  return (
    <div className="App">
      {/*//react doom*/}
      <BrowserRouter>
      {/*Aqui vamos a manejar el manejo de rutitas*/}
        <Routes>

          <Route path='/' element={<Navbarprim/>}>

            <Route index element={<Inicio/>}/>
            <Route path='Menu'element={<Menu/>}/>
            <Route path='Sucursales'element={<Sucursales/>}/>
            <Route path='Contactos'element={<Contactos/>}/>

            <Route path='*'element={<Navigate replace to='/'/>}/>

          </Route>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;

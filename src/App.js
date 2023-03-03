import './App.css';
import { Testimonio } from './componentes/Testimonio.js';
import testimoniosList from './data';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio 
        nombre={testimoniosList[0].nombre}
        pais={testimoniosList[0].pais}
        imagen={testimoniosList[0].imagen}
        cargo={testimoniosList[0].cargo}
        empresa={testimoniosList[0].empresa}
        testimonio={testimoniosList[0].testimonio}
        />
        <Testimonio 
        nombre={testimoniosList[1].nombre}
        pais={testimoniosList[1].pais}
        imagen={testimoniosList[1].imagen}
        cargo={testimoniosList[1].cargo}
        empresa={testimoniosList[1].empresa}
        testimonio={testimoniosList[1].testimonio}
        />
        <Testimonio 
        nombre={testimoniosList[2].nombre}
        pais={testimoniosList[2].pais}
        imagen={testimoniosList[2].imagen}
        cargo={testimoniosList[2].cargo}
        empresa={testimoniosList[2].empresa}
        testimonio={testimoniosList[2].testimonio}
        />


      </div>

    </div>
  );
}

export default App;

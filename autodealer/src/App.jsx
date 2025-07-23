import { useState } from 'react';
import autosData from './autos';
import AutoList from './components/AutoList';
import Buscador from './components/Buscador';

function App() {
  const [autos] = useState(autosData);
  const [texto, setTexto] = useState('');
  const [autoSorteado, setAutoSorteado] = useState(null);

  const autosFiltrados = autos.filter(auto =>
    auto.marca.toLowerCase().includes(texto.toLowerCase()) ||
    auto.modelo.toLowerCase().includes(texto.toLowerCase())
  );

  const sortearAuto = () => {
    const indiceAleatorio = Math.floor(Math.random() * autos.length);
    setAutoSorteado(autos[indiceAleatorio]);
  };

  return (
    <div className="App">
      <h1>Catálogo de Automoviles 🚗</h1>
      <Buscador texto={texto} setTexto={setTexto} />
      <button onClick={sortearAuto}>Sortear Auto 🎲</button>

      {autoSorteado && (
        <div className="auto-sorteado">
          <h2>Auto Sorteado 🎉</h2>
          <p>{autoSorteado.marca} {autoSorteado.modelo} ({autoSorteado.año})</p>
        </div>
      )}

      <AutoList autos={autosFiltrados} />
    </div>
  );
}

export default App;

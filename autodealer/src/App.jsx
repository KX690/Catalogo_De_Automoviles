import { useState } from 'react';
import autosData from './autos';
import AutoList from './components/AutoList';
import Buscador from './components/Buscador';
import './index.css';

function App() {
  const [autos] = useState(autosData);
  const [texto, setTexto] = useState('');
  const [filtroTipo, setFiltroTipo] = useState('');
  const [filtroAnio, setFiltroAnio] = useState('');
  const [autoSorteado, setAutoSorteado] = useState(null);

  const autosFiltrados = autos
    .filter(auto =>
      auto.marca.toLowerCase().includes(texto.toLowerCase()) ||
      auto.modelo.toLowerCase().includes(texto.toLowerCase())
    )
    .filter(auto =>
      filtroTipo === '' || auto.tipo === filtroTipo
    )
    .filter(auto =>
      filtroAnio === '' || auto.año.toString() === filtroAnio
    );

  const sortearAuto = () => {
    const indiceAleatorio = Math.floor(Math.random() * autos.length);
    setAutoSorteado(autos[indiceAleatorio]);
  };

  return (
    <div>
      <h1>Catálogo AutoDealer</h1>
      <div className="filtros">
        <Buscador texto={texto} setTexto={setTexto} />
        <select value={filtroTipo} onChange={(e) => setFiltroTipo(e.target.value)}>
          <option value="">Todos los tipos</option>
          <option value="Sedan">Sedan</option>
          <option value="Pickup">Pickup</option>
          <option value="Hatchback">Hatchback</option>
          <option value="SUV">SUV</option>
        </select>
        <select value={filtroAnio} onChange={(e) => setFiltroAnio(e.target.value)}>
          <option value="">Todos los años</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
        <button onClick={sortearAuto}>Sortear Auto 🎲</button>
      </div>

      {autoSorteado && (
        <div className="auto-sorteado">
          <h2>Auto Sorteado 🎉</h2>
          <img src={autoSorteado.imagen} alt={autoSorteado.modelo} width="200" />
          <p>{autoSorteado.marca} {autoSorteado.modelo} ({autoSorteado.año})</p>
        </div>
      )}

      <AutoList autos={autosFiltrados} />
    </div>
  );
}


export default App;

export default function Buscador({ texto, setTexto }) {
  return (
    <input
      type="text"
      value={texto}
      placeholder="Buscar por marca o modelo"
      onChange={(e) => setTexto(e.target.value)}
    />
  );
}

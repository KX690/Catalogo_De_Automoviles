export default function AutoCard({ auto }) {
  return (
    <div className="auto-card">
      <img src={auto.imagen} alt={`${auto.marca} ${auto.modelo}`} style={{ width: '100%', borderRadius: '8px' }} />
      <h3>{auto.marca} {auto.modelo}</h3>
      <p>Tipo: {auto.tipo}</p>
      <p>Año: {auto.año}</p>
    </div>
  );
}
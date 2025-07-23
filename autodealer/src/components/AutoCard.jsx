export default function AutoCard({ auto }) {
  return (
    <div className="auto-card">
      <h3>{auto.marca} {auto.modelo}</h3>
      <p>Tipo: {auto.tipo}</p>
      <p>Año: {auto.año}</p>
    </div>
  );
}
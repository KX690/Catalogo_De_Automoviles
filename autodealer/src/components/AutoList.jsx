import AutoCard from './AutoCard';

export default function AutoList({ autos }) {
  return (
    <div className="auto-list">
      {autos.map(auto => (
        <AutoCard key={auto.id} auto={auto} />
      ))}
    </div>
  );
}

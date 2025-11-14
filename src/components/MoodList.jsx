const MoodList = ({ moods }) => {
  if (moods.length === 0) return <p>No moods yet</p>;
  return (
    <div className="mood-list-container">
      <h2>Past Moods</h2>
      <ul className="mood-list">
        {moods.map((item) => (
          <li key={item.date}>
            <span>{item.date}</span>
            <span>{item.mood}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MoodList;
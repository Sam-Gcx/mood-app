import { useState } from "react";

const MoodForm = ({ onAddMood }) => {
  const [mood, setMood] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mood) return;
    onAddMood({ mood, date: new Date().toLocaleTimeString() });
    setMood('');
  };
  return (
    <form className="mood-form" onSubmit={handleSubmit}>
      <h2>How do you feel today?</h2>
      <select value={mood} onChange={(e) => setMood(e.target.value)}>
        <option value="">Select mood</option>
        <option value="Happy">Happy</option>
        <option value="Okay">Okay</option>
        <option value="Sad">Sad</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
};
export default MoodForm;
import './App.css';
import MoodList from './components/MoodList';
import MoodForm from './components/MoodForm';
import { useEffect, useState } from 'react';

function App() {
  const [moods, setMoods] = useState(() => {
    const saved = localStorage.getItem('moods');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('moods', JSON.stringify(moods));
  }, [moods]);

  const addMood = (newMood) => {
    setMoods([newMood, ...moods]);
  };
  return (
    <div className="App">
      <h1>Mood Tracker</h1>
      <MoodForm onAddMood={addMood} />
      <MoodList moods={moods} />
    </div>
  );
}

export default App;

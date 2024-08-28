import { useState } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar';

const App = () => {
  const [isStarted, setIsStarted] = useState(false);

  const handelToggle = () => {
    setIsStarted(prevState => !prevState);
  }

  return (
    <div>
      {isStarted && <ProgressBar />}
      <button onClick={handelToggle}>{isStarted ? "Stop" : "Start"}</button>
    </div>
  )
}

export default App;
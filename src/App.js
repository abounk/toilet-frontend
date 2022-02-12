
import './App.css';
import Title from './components/Title';
import Card from './components/Card';
import Time from "./components/Time";
import React, { useState, useEffect } from 'react'
import { getTimestamp } from './services/Data';

function App() {

  const [toiletList, setToiletList] = useState([]);
  const [estimate, setEstimate] = useState([]);
  useEffect(() => {
    const count = setInterval(() => {
      getTimestamp().then((data) => {
        setToiletList(data.toilet);
        setEstimate(data.estimate);
      })
      return () => { clearInterval(count); }
    }, 1000)


  }, []);


  return (
    <div className="App">

      <div className="header">
        <Title></Title>
      </div>
      <div className="card-list">
        {(toiletList).map((toilet) => (
          < Card status={toilet.status} index={toilet.id} timeStamp={toilet.arrive} duration={toilet.duration} />

        ))}
      </div>
      <div className="estimatedTime">
        <Time time={estimate} />
      </div>
    </div>
  );
}

export default App;

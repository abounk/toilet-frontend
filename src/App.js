import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Card from './components/Card';
import Time from "./components/Time";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Title></Title>
      </div>
      <div className="card-list">
        <Card index="1"></Card>
        <Card index="2"></Card>
        <Card index="3"></Card>
      </div>
      <div className="estimatedTime">
        <Time />
      </div>
    </div>
  );
}

export default App;

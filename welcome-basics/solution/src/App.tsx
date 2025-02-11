import './App.css';
import Card from "./dayOne/components/Card.tsx";
const App =()=> {
  return (
      // <div className="App">
      //     <h1>Hello! Welcome to ReactJs</h1>
      // </div>
      <div className="d-flex flex-row justify-content-between">
        <Card name="Kola" age={14} role="Software Dev" imageUrl="https://loremflickr.com/200/200?random=1"/>
        <Card name="Kola" age={14} role="Software Dev" imageUrl="https://loremflickr.com/200/200?random=2"/>
        <Card name="Kola" age={14} role="Software Dev" imageUrl="https://loremflickr.com/200/200?random=3"/>
      </div>
  )
}

export default App

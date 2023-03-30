import { render } from '@testing-library/react';
import './App.css';

function App() {
  return (
    <div className="App">
      Hello!
    </div>
  );
}

function TicTacToe(){
  return (
  <div>Hellooo</div>
  );
}

function Square(){
  return (
  <div>Square</div>
  );
}

function Circle(){
  return (
  <div>Circle</div>
  );
}

function Result(){
  return (
  <div>Result</div>
  );
}

render(
  <TicTacToe/>
)

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  const firstName = 'Johnny';
  const lastName = 'Depp';
  const age = 59;
  const job = 'Actor/Pirate';
  const hobby = 'Reading books';

  const mArr = [1,2,3,4]
  const mObj = {
    name: 'Robert Downey Jr',
    age: 57
  }

  const inputPlaceholder = 'Enter your Details'

  const getHobby = (hobby) => `${hobby}`

  const detailsInputBox = <input placeholder = {inputPlaceholder} 
  autoComplete />

  return (
    <div className="App">
      <h3>Full Name: {`${firstName} ${lastName}`}</h3>
      <p>Age: {age}</p>
      <p>Job: {job}</p>
      <p>Hobby: {getHobby(hobby)}</p>

      {mArr[0]}
      {/* {detailsInputBox} */}
      {
        mArr[0] > 0 ? "True" : "False"
      }

      <h3>Full Name: {mObj.name} </h3>
      <p>Age: {mObj.age} </p>
    </div>
  );
}

export default App;

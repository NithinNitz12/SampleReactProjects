// import "./App.css";
import MyCard from "./components/MyCard";
import contacts from "./components/contacts";
import logValues from './components/MapFilterReduceFindFindIndex';

function App() {
  function createCard(contact) {
    return (
      <MyCard
        key={contact.id}
        name={contact.name}
        tel={contact.tel}
        mail={contact.mail}
        img={contact.img}
      />
    );
  }

  return (
    <div className="App">
      {/* <MyCard name="Tom" tel="+1232" mail="tom@tom.com" />
      <MyCard name="Sam" tel="+1562" mail="Sam@tom.com" />
      <MyCard name="Aaa" tel="+1232" mail="tom@tom.com" /> */}

      {/* <MyCard
        name={contacts[0].name}
        tel={contacts[0].tel}
        mail={contacts[0].mail}
        img={contacts[0].img}
      />
      <MyCard
        name={contacts[1].name}
        tel={contacts[1].tel}
        mail={contacts[1].mail}
        img={contacts[1].img}
      /> */}
      {/* {contacts.map(createCard)} */}
      
    </div>
  );
}

export default App;

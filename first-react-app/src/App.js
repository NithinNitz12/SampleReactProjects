import logo from './logo.svg';
import './App.css';
import './App.css';
import BlogCard from './BlogCard';

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

  // <-------------------------------------->

  const blogArr = [
    {
      id: 1,
      title: 'Blog Title 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero lorem',
    },
    {
      id: 2,
      title: 'Blog Title 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero lorem',
    },
    {
      id: 3,
      title: 'Blog Title 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero lorem',
    }
  ]

  const blogCards = blogArr.map((item, pos) => {
    // console.log(item);

    return(
      // <div className="BlogCard" key={pos}>
      //   <h3>{item.title}</h3>
      //   <p>{item.description}</p>
      // </div> 
      <BlogCard key={pos} title= {item.title} description={item.description} id={item.id}/>
    )
  })


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
    
    
    {/* <-------------------------------------------> */}
      {/* <div className="BlogCard">
        <h3>{blogObj.title}</h3>
        <p>{blogObj.description}</p>
      </div> */}
      {blogCards}
    
    </div>
  );
}

export default App;

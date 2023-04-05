import logo from './logo.svg';
import './App.css';
import './App.css';
import BlogCard from './BlogCard';
import { isArrayEmpty } from './Utils';
import React , { Component } from 'react';

class App extends Component {
  state = {
    showBlogs : true
  }

  // const firstName = 'Johnny';
  // const lastName = 'Depp';
  // const age = 59;
  // const job = 'Actor/Pirate';
  // const hobby = 'Reading books';

  // const mArr = [1,2,3,4]
  // const mObj = {
  //   name: 'Robert Downey Jr',
  //   age: 57
  // }

  // const inputPlaceholder = 'Enter your Details'

  // const getHobby = (hobby) => `${hobby}`

  // const detailsInputBox = <input placeholder = {inputPlaceholder} 
  // autoComplete />

  // <-------------------------------------->

  blogArr = [
    {
      id: 1,
      title: 'Blog Title 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero lorem',
      likeCount:0,
    },
    {
      id: 2,
      title: 'Blog Title 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero lorem',
      likeCount:0,
    },
    {
      id: 3,
      title: 'Blog Title 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero lorem',
      likeCount:0,
    }
  ]

  onLikeBtnClick = () => {
    alert('Like Button Clicked');
  }
 

  blogCards = isArrayEmpty(this.blogArr) ? [] : this.blogArr.map((item, pos) => {
    // console.log(item);

    return(
      // <div className="BlogCard" key={pos}>
      //   <h3>{item.title}</h3>
      //   <p>{item.description}</p>
      // </div> 
      <BlogCard className={'Blog'} key={pos} title= {item.title} description={item.description} likeCount={item.likeCount} id={item.id} onLikeBtnClick={this.onLikeBtnClick}/>
    )
  })

  onHideBtnClick = () => {
    // let updatedState = !this.state.showBlogs;
    this.setState((prevState, prevProps) => {
      return {showBlogs: !prevState.showBlogs}
    });
    console.log(this.state.showBlogs);
  }

 

  render() {
    console.log('Render Called');
    return(
      <div className="App">
        <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
      <br></br>
      {
        this.state.showBlogs ? this.blogCards : null
      }
      </div>
    );
  }

  // return (
  //   <div className="App">
  //     // <h3>Full Name: {`${firstName} ${lastName}`}</h3>
  //     // <p>Age: {age}</p>
  //     // <p>Job: {job}</p>
  //     // <p>Hobby: {getHobby(hobby)}</p>

  //     // {mArr[0]}
  //     // {/* {detailsInputBox} */}
  //     // {
  //     //   mArr[0] > 0 ? "True" : "False"
  //     // }

  //     // <h3>Full Name: {mObj.name} </h3>
  //     // <p>Age: {mObj.age} </p>
    
    
  //   {/* <-------------------------------------------> */}
  //     {/* <div className="BlogCard">
  //       <h3>{blogObj.title}</h3>
  //       <p>{blogObj.description}</p>
  //     </div> */}
  //     {blogCards}
  //     <br></br>
  //     <button onClick={onHideBtnClick}>Hide List</button>
    
  //   </div>
  // );
}

export default App;

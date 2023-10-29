// import React from 'react'
import "./Card.css";

function MyCard(props) {
  console.log(props);
  return (
    // <div>
    //   {props.name}<br />
    //   {props.tel}<br />
    //   {props.mail}
    // </div>

    <div className="Card">
    <div className="card-client">
    <div className="user-picture">
        <img src={props.img} alt="avatar" />
    </div>
    <p className="name-client"> {props.name}
        <span>{props.tel}
        </span>
        <span>{props.mail}
        </span>
    </p>
    </div>
    {/* <br /> */}
    </div>
  );
}

export default MyCard;

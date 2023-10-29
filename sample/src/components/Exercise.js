import React from 'react'

function Exercise() {
    const date = new Date(2023,10,1,18);
    const time = date.getHours();
    const min = date.getMinutes();
    var content = "hi";

    var customStyle = {
        color: "null"
    }

    console.log(time+" "+min);

    if(time < 12)
    {
        content = "Good Morning";
        customStyle.color = "red";
    }
    else if(time > 12 && time < 18)
    {
        content = "Good Afternoon";
        customStyle.color = "green";
    }
    else
    {
        content = "Good Evening";
        customStyle.color = "blue";
    }
  return (
    <div>
        <h2>Test</h2>
        <h1 style={customStyle}>{content}</h1>
    </div>
  )
}

export default Exercise
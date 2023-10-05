import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function Bullet(props) // child of List. List props passed down to each bullet points of the list
{
  const { name, done, handleClick } = props;
  
  return (
    <div>
      style={{}}
      onClick={handleClick}
    </div>
  );
}


class List extends React.Component
{
  
  constructor(props)
  {
    super(props);
    this.state = {
      items: [
        { name: 'Task 1', done: false},
        { name: 'Task 2', done: false},

      ],

    };
  }

  
  handleClick(i) // handle the click 
  {
    // const items =
  }


  render()
  {
    return (
      <div className="list">



      </div>
    ); // returns a JSX (JavaScript XML) represents the UI of the component <div>: JSX element structures the content of the component
  }
}

// -----------------------------------------

const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<List />);

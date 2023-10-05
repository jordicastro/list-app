import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// function Box(props) // possibly a box that clicks and triggers List's done := false.
// {

// }

function Bullet(props) // child of List. List props passed down to each bullet points of the list
{
  const { name, done, handleClick } = props;
  
  return (
    <div
      style={{textDecoration: done ? 'line-through' : 'none', color: done ? 'grey' : 'black'}}
      onClick={handleClick}
    >
        {name}
    </div>
  ); // strike through and grey out if done, else none. call List's handleClick to find logic
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

    }; // state of the list contains the tasks and their done logic
  }

  
  handleClick(i) // handle the click 
  {
    const items = this.state.items.slice(); // get the state of the prop: copies the array to ensure immutability
    items[i].done = !items[i].done; // when clicked, change the done logic
    this.setState({items}); // change the state of items and re render!
  }


  render()
  {
    return (
        <div className="list">
            <h2>Jordi's To-Do List</h2>
          {this.state.items.map((item, i) => (
            <Bullet
              key={i}
              name={item.name}
              done={item.done}
              handleClick={() => this.handleClick(i)}
            />
          ))}
        </div>
      ); // returns a JSX (JavaScript XML) represents the UI of the component <div>: JSX element structures the content of the component
  }
}

// -----------------------------------------

const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<List />);

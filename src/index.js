import React, { useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function Button( {onClick} ) // button that  adds a new task
{
    const [input, setInput] = useState('');

    const handleButtonClick = () =>
    {
        onClick(input);
        setInput('');
    };
    return (
        <div>
            <input
                type="text"
                placeholder="Enter a task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button
                className="button"
                onClick={handleButtonClick}
            >
            Add Task
            </button>
        </div>
    );
}

function Bullet(props) // child of List. List props passed down to each bullet points of the list
{
  const { name, done, handleClick, handleContextMenu } = props; // handleClick for left click (ADD), handleContextMenu for right click (REMOVE)
  
  return (
    <div
      style={{textDecoration: done ? 'line-through' : 'none', color: done ? 'grey' : 'black'}}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
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

  
  handleClick = (i) => // handle the click 
  {
    const items = this.state.items.slice(); // get the state of the prop: copies the array to ensure immutability
    items[i].done = !items[i].done; // when clicked, change the done logic
    this.setState({items}); // change the state of items and re render!
  };

  handleContextMenu = (e, i) => 
  {
    e.preventDefault(); // prevent default context menu

    const items = this.state.items.slice();
    items.splice(i, 1); // remove the item at index i
    this.setState( {items} );
  };

  createBullet = (name) =>
  {
    const newItem = {name, done:false};
    this.setState({items: [...this.state.items, newItem]}); // ... creates shallow copy -> ensures immutability
  };
  


  render()
  {
    const {items} = this.state;

    return (
        <div className="list">
          <h2>Jordi's To-Do List</h2>
          <Button onClick={this.createBullet} />
  
          {items.length === 0 ? (
            <div style={{ color: 'green', textDecoration: 'underline' }}>
              <h3>All done!!</h3>
            </div>
          ) : (
            items.map((item, i) => (
              <Bullet
                key={i}
                name={item.name}
                done={item.done}
                handleClick={() => this.handleClick(i)}
                handleContextMenu={(e) => this.handleContextMenu(e, i)}
              />
            ))
          )}
        </div>
      );
    } // returns a JSX (JavaScript XML) represents the UI of the component <div>: JSX element structures the content of the component
  }

// -----------------------------------------

const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<List />);

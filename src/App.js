import React, {Component} from 'react';
import Form from './Components/Form';
import List from './Components/List';
import './App.css';

class App extends Component{

  state = {
    items : [
      {
        id:1,
        name: 'Ahmed',
        age: 20
      },
      {
        id:2,
        name: 'Mohamed',
        age: 25
      }
    ]
  }

  deleteItem = (id) => {
    const {items} = this.state,
          i = items.findIndex(item => item.id === id)
          items.splice (i, 1)
    this.setState({items})
  }

  addItem =(item)=> {
    item.id = Math.random();
    const {items} = this.state;
    items.push(item)
    this.setState({items})
  }

  render() {
    const {items} = this.state;
    return (
      <div className="App container">
        <h1>Todo List</h1>
        <Form addItem={this.addItem}/>
        <List items={items}
              deleteItem={this.deleteItem}
              />
      </div>
    );
  }
}
export default App;
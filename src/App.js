import React, { Component } from 'react';
import './App.css';
import ListItems from './ListItems';
import { Route } from 'react-router-dom'
import AddItem from './AddItem';

class App extends Component {
  
  state = {
    items: [
      {
        "id": "1",
        "firstName": "FirstName1",
        "lastName": "LastName1"
      },
      {
        "id": "2",
        "firstName": "FirstName2",
        "lastName": "LastName2"
      },
      {
        "id": "3",
        "firstName": "FirstName3",
        "lastName": "LastName3"
      }
    ]
  }

  deleteItem = (item) => {
    this.setState((currentState) => ({
      items: currentState.items.filter((c) => {
        return c.id !== item.id
      })
    }))
  }

  addItem = (item) => {
    this.setState((currentState) => ({
      items: currentState.items.concat([item])
    }))
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <ListItems
            items={this.state.items}
            onDeleteItem={this.deleteItem}
          />
        )}/>
        <Route path='/add' render={({ history }) => (
          <AddItem
            onAddItem={(item) => {
            this.addItem(item)
            history.push('/')
          }}
        />
        )}/>

      </div>
    )
  }
}

export default App;

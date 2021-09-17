
import "./App.css";
import { Component } from 'react';
import GroceryForm from './components/groceries/GroceryForm';
import GroceryList from './components/groceries/GroceryList';

class App extends Component {
// dummy data
  state = {
    groceries: [
      { id: 1, item: "Milk",  complete: false, price: 2.50},
      { id: 2, item: "Broccoli", complete: false, price: 1.50},
      { id: 3, item: "Beans", complete: true, price: 0.99},
      { id: 4, item: "Rice", complete: false, price: 1.20},
      { id: 5, item: "Beer", complete: false, price: 4.99}
    ]
  }

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x1000)
    .toString(16)
    .substring(1);
  }
 
  addToList = (incomingGroceryItem) => {
    const { groceries } = this.state
    const newGroceryItem = { id: this.getUniqId() , ...incomingGroceryItem }
    this.setState({groceries: [newGroceryItem,  ...groceries]})
  }
  handleClick = (id) => {
    const { groceries } = this.state
    this.setState ({
      groceries: groceries.map(grocery => {
        if (grocery.id === id ) {
          return {
          ...grocery,
          complete: !grocery.complete
          }
        }
        return grocery
      })
    })
  }
  render () {
    const { groceries } = this.state
    return  (
        <>
          <GroceryForm addToList={this.addToList} />
          <GroceryList name="Grocery List" items={groceries}
          groceryClick={this.handleClick}/>
        </>
    )
  }
}
export default App;




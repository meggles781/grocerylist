import { Component } from "react";

class GroceryForm extends Component {

  state = { item: '' , complete: false, price: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addToList(this.state)
    this.setState({ item: '', complete: false, price: 0.00 })
  }

  render() {
    const { item, price } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        name="item"
        value={item}
        onChange={this.handleChange}

        required
        placeholder="Add item"
        />
        <input
        name="price"
        value={price}
        onChange={this.handleChange}

        required
        placeholder="Add price"
        />
        <button type="submit">Add to list</button>
      </form>
    )
  }
}

export default GroceryForm;
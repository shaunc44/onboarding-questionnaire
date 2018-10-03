import React, { Component } from 'react';
// import logo from './logo.svg';
import ollie from './ollie.png';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ownerName: '',
      petName: '',
      zipCode: '',
      email: '',
      mix: '',
      breed: '',
      sex: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ 
      [event.target.name]: event.target.value 
    });
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={ollie} className="App-logo" alt="logo" />
          <p className="App-intro">
            50% OFF your meal plan will be applied at checkout
          </p>
        </header>

        <form>
          <label>My name is </label>
          <input type="text" name="ownerName" onChange={this.handleChange} />
        </form>
        <form>
          <label>and my pup's name is </label>
          <input type="text" name="petName" onChange={this.handleChange} />
        </form>
        <form>
          <label>My email is </label>
          <input type="text" name="email" onChange={this.handleChange} />
        </form>
        <form>
          <label>{this.state.petName} is a </label>
          <select value={this.state.value} name="mix" onChange={this.handleChange}>
            <option value="singleBreed">single breed</option>
            <option value="twoBreeds">combo of two breeds</option>
            <option value="unknown">perfect (unknown) mix</option>
          </select>
        </form>
        <form>
          <label>of a </label>
          <select value={this.state.value} name="breed" onChange={this.handleChange}>
            <option value="lab">labrador retriever</option>
            <option value="poodle">poodle</option>
            <option value="boxer">boxer</option>
            <option value="chihuahua">chihuahua</option>
            <option value="dachshund">dachshund</option>
          </select>
          <label> to be precise.</label>
        </form>
        <form>
          <label>{this.state.petName} is a </label>
          <select value={this.state.value} name="sex" onChange={this.handleChange}>
            <option value="he">He</option>
            <option value="she">She</option>
          </select>
        </form>
      </div>
    );
  }
}

export default App;





// <h1 className="App-title">Ollie</h1>
// <p className="App-intro">
//  To get started, edit <code>src/App.js</code> and save to reload.
// </p>
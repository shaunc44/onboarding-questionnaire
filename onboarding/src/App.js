import React, { Component } from 'react';
// import logo from './logo.svg';
import Autocomplete from "./components/Autocomplete";
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
      neuterSpay: '',
      month: '',
      year: '',
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
          <div id="top-logo">
            <img src={ollie} className="App-logo" alt="logo" />
          </div>
          <div id="discount-banner">
            <p className="App-intro">
              50% OFF your meal plan will be applied at checkout
            </p>
          </div>
        </header>

        <div class="onboarding-form-fields">
          <form class="onboarding-form-block">
            <label class="onboarding-form-label">My name is </label>
            <input class="onboarding-input" type="text" name="ownerName" onChange={this.handleChange} />
          </form>

          <form class="onboarding-form-block">
            <label class="onboarding-form-label">and my pup's name is </label>
            <input class="onboarding-input" type="text" name="petName" onChange={this.handleChange} />
          </form>

          <form class="onboarding-form-block">
            <label class="onboarding-form-label">My zip code is </label>
            <input class="onboarding-input" type="number" name="zipCode" onChange={this.handleChange} />
          </form>

          <form class="onboarding-form-block">
            <label class="onboarding-form-label">My email is </label>
            <input class="onboarding-input" type="email" name="email" onChange={this.handleChange} />
          </form>

          <form class="onboarding-form-block">
            <label class="onboarding-form-label">{this.state.petName} is a </label>
            <Autocomplete 
              value={this.state.value}
              name="mix"
              onChange={this.handleChange}
              suggestions={[
                "single breed",
                "combo of two breeds",
                "perfect (unknown) mix",
              ]}
            />
          </form>

          <form class="onboarding-form-block">
            <label class="onboarding-form-label">of a </label>
            <Autocomplete 
              value={this.state.value}
              name="breed"
              onChange={this.handleChange}
              suggestions={[
                "lab",
                "poodle",
                "boxer",
                "chihuahua",
                "dachshund",
              ]}
            />
            <label class="onboarding-form-label"> to be precise.</label>
          </form>

          <form class="onboarding-form-block">
            <label class="onboarding-form-label">{this.state.petName} is a </label>
            <Autocomplete 
              value={this.state.value}
              name="sex"
              onChange={this.handleChange}
              suggestions={[
                "He",
                "She",
              ]}
            />
            <label class="onboarding-form-label"> and is </label>
            <Autocomplete 
              value={this.state.value}
              name="neuterSpay"
              onChange={this.handleChange}
              suggestions={[
                "neutered/spayed",
                "not neutered/spayed",
              ]}
            />
          </form>

          <form class="onboarding-form-block">
            <label class="onboarding-form-label">{this.state.petName} was born in </label>
            <Autocomplete 
              value={this.state.value}
              name="month"
              onChange={this.handleChange}
              suggestions={[
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
              ]}
            />
            <label class="onboarding-form-label">, </label>
            <Autocomplete 
              value={this.state.value}
              name="year"
              onChange={this.handleChange}
              suggestions={[
                "2018", "2017", "2016", "2015", 
                "2014", "2013", "2012", "2011", 
                "2010", "2009", "2008", "2007", 
                "2006", "2005", "2004", "2003", 
                "2002", "2001", "2000", "1999", 
                "1998", "1997", "1996", "1995", 
                "1994", "1993", "1992", "1991",
              ]}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;


// <select class="onboarding-input" value={this.state.value} name="breed" onChange={this.handleChange}>
              // <option value="lab">labrador retriever</option>
              // <option value="poodle">poodle</option>
              // <option value="boxer">boxer</option>
              // <option value="chihuahua">chihuahua</option>
              // <option value="dachshund">dachshund</option>
            // </select>


//<select value={this.state.value} name="mix" onChange={this.handleChange}>
  //<option value="singleBreed">single breed</option>
  //<option value="twoBreeds">combo of two breeds</option>
  //<option value="unknown">perfect (unknown) mix</option>
//</select>



// <h1 className="App-title">Ollie</h1>
// <p className="App-intro">
//  To get started, edit <code>src/App.js</code> and save to reload.
// </p>
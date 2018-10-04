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
          <form>
            <label class="onboarding-form-label">My name is </label>
            <input type="text" name="ownerName" onChange={this.handleChange} />
          </form>

          <form>
            <label class="onboarding-form-label">and my pup's name is </label>
            <input type="text" name="petName" onChange={this.handleChange} />
          </form>

          <form>
            <label class="onboarding-form-label">My zip code is </label>
            <input type="number" name="zipCode" onChange={this.handleChange} />
          </form>

          <form>
            <label class="onboarding-form-label">My email is </label>
            <input type="email" name="email" onChange={this.handleChange} />
          </form>

          <form>
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

          <form>
            <label class="onboarding-form-label">of a </label>
            <select value={this.state.value} name="breed" onChange={this.handleChange}>
              <option value="lab">labrador retriever</option>
              <option value="poodle">poodle</option>
              <option value="boxer">boxer</option>
              <option value="chihuahua">chihuahua</option>
              <option value="dachshund">dachshund</option>
            </select>
            <label class="onboarding-form-label"> to be precise.</label>
          </form>

          <form>
            <label class="onboarding-form-label">{this.state.petName} is a </label>
            <select value={this.state.value} name="sex" onChange={this.handleChange}>
              <option value="he">He</option>
              <option value="she">She</option>
            </select>
            <label class="onboarding-form-label"> and is </label>
            <select value={this.state.value} name="neuterSpay" onChange={this.handleChange}>
              <option value="neutered/spayed">neutered/spayed</option>
              <option value="not neutered/spayed">not neutered/spayed</option>
            </select>
          </form>

          <form>
            <label class="onboarding-form-label">{this.state.petName} was born in </label>
            <select value={this.state.value} name="month" onChange={this.handleChange}>
              <option value="Jan">Jan</option>
              <option value="Feb">Feb</option>
              <option value="Mar">Mar</option>
              <option value="Apr">Apr</option>
              <option value="May">May</option>
              <option value="Jun">Jun</option>
              <option value="Jul">Jul</option>
              <option value="Aug">Aug</option>
              <option value="Sep">Sep</option>
              <option value="Oct">Oct</option>
              <option value="Nov">Nov</option>
              <option value="Dec">Dec</option>
            </select>
            <label class="onboarding-form-label">, </label>
            <select value={this.state.value} name="year" onChange={this.handleChange}>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006</option>
              <option value="2005">2005</option>
              <option value="2004">2004</option>
              <option value="2003">2003</option>
              <option value="2002">2002</option>
              <option value="2001">2001</option>
              <option value="2000">2000</option>
              <option value="1999">1999</option>
              <option value="1998">1998</option>
              <option value="1997">1997</option>
              <option value="1996">1996</option>
              <option value="1995">1995</option>
              <option value="1994">1994</option>
              <option value="1993">1993</option>
              <option value="1992">1992</option>
              <option value="1991">1991</option>
            </select>
          </form>
        </div>
      </div>
    );
  }
}

export default App;


//<select value={this.state.value} name="mix" onChange={this.handleChange}>
  //<option value="singleBreed">single breed</option>
  //<option value="twoBreeds">combo of two breeds</option>
  //<option value="unknown">perfect (unknown) mix</option>
//</select>



// <h1 className="App-title">Ollie</h1>
// <p className="App-intro">
//  To get started, edit <code>src/App.js</code> and save to reload.
// </p>
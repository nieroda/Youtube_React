import React, { Component } from 'react';
import logo from './logo.svg';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state ={
      input: ''
    };
  }

  handleChange(value) {
    this.setState({
      input: value
    })
    this.props.onSearchChange(value);
  }

  render() {

    return (
      <div className='container specialcontainer'>
        <input
          className='form-control'
          value={this.state.input}
          placeholder="Search.."
          onChange={event => this.handleChange(event.target.value)} />
          <span className='logoholder'> <img className='App-logo' src={logo} alt='logo' /> </span>
      </div>
    );
  }

}

export default SearchBar;

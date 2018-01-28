import React, { Component } from 'react';
import axios from 'axios'


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    
    axios.get('http://example.com/posts/1').then(function (response) {
    console.log(response);
  })
   }
    /*alert('A name was submitted: ' + this.state.value);
    event.preventDefault();*/

  render() {
    return (
    <body>
    <br />
    <div align="center">
      <form onSubmit={this.handleSubmit}>
        <label>
          Input:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  </body>
    );
  }
}



export default NameForm;

import React, { Component } from 'react';
import DuckForm from "./DuckForm";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whenFed: '',
      typeFed: '',
      whereFed: '',
      numberFed: '',
      whatFed: '',
    };
  }

  handleTextChange = name => newText => {
    this.setState({
      [name]: newText,
    });
  };
  handleSelects = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleSubmit (event) {
    console.log('submit invoked where state = ', this.state);
    this.handleClear();
  };
  handleClear = name => event => {
    this.setState({
      whenFed: '',
      typeFed: '',
      whereFed: '',
      numberFed: '',
      whatFed: '',
    });
  };

  render() {
    const handleTextChange = this.handleTextChange.bind(this);
    const handleSelects = this.handleSelects.bind(this);
    const handleSubmit = this.handleSubmit.bind(this);

    return (
      <div className="App" style={{ padding: 15 }}>
        <h2>Duck Form</h2>
        <DuckForm
          handleTextChange={handleTextChange}
          handleSelects={handleSelects}
          handleSubmit={handleSubmit}
        />
      </div>
    );
  }
}

export default App;

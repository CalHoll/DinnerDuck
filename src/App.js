import React, { Component } from 'react';
import DuckForm from "./DuckForm";
import './App.css';

const Host = 'ec2-35-183-123-114.ca-central-1.compute.amazonaws.com'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whenFed: '',
      typeFed: '',
      whereFed: '',
      numberFed: '',
      whatFed: '',
      ducks:[]
    };
  }
  componentDidMount() {
    fetch(`${Host}/api/get-ducks`)
      .then(response => console.log('response received = ', response.body))
      .catch(err => console.log('error: ', err))
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
    fetch(`${Host}/api/submit-duck`)
      .then(response => response.json())
      .then(parsed => console.log('response received = ', parsed))
      .catch(err => console.log('error: ', JSON.stringify(err)))
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

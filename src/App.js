import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      inputPassword: "",
      inputEmail: ""

    }
  }
  handleEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  }
  handlePassword = (e) => {
    this.setState({ inputPassword: e.target.value });
  }
  handleUser = () => {
    axios.post('http://35.173.215.68:9000/api/authentication/login', {
      name: inputPassword,
      email: inputEmail
    })

  }

  handleUserDisplay = () => {
    axios.get('http://10.30.30.26:9000/api/users/fetch')
      .then((res) => {
        return res.json();
      })
  }

  render() {




    // axios.post('/user', {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone'
    // })

    const LoginPage = () => {
      return (
        <div>
          <input placeholder="Input Email" onChange={this.handleEmail} />
          <input placeholder="Input Password" onChange={this.handlePassword} />

          <button onClick={this.handleUser}>Submit</button>
        </div>

      )
    };

    const displayUsers = (res) => {


    }

    return (
      <div className="App">
        <LoginPage />
      </div>
    );
  }

}

export default App;

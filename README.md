@mitchallen/react-login-theme-grey
==
LoginThemeGrey React component
--

<p align="left">
  <a href="https://circleci.com/gh/mitchallen/react-login-theme-grey">
    <img src="https://img.shields.io/circleci/project/github/mitchallen/react-login-theme-grey.svg" alt="Continuous Integration">
  </a>
  <a href="https://codecov.io/gh/mitchallen/react-login-theme-grey">
    <img src="https://codecov.io/gh/mitchallen/react-login-theme-grey/branch/master/graph/badge.svg" alt="Coverage Status">
  </a>
  <a href="https://npmjs.org/package/@mitchallen/react-login-theme-grey">
    <img src="http://img.shields.io/npm/dt/@mitchallen/react-login-theme-grey.svg?style=flat-square" alt="Downloads">
  </a>
  <a href="https://npmjs.org/package/@mitchallen/react-login-theme-grey">
    <img src="http://img.shields.io/npm/v/@mitchallen/react-login-theme-grey.svg?style=flat-square" alt="Version">
  </a>
  <a href="https://npmjs.com/package/@mitchallen/react-login-theme-grey">
    <img src="https://img.shields.io/github/license/mitchallen/react-login-theme-grey.svg" alt="License"></a>
  </a>
</p>

## Installation

    $ npm init
    $ npm install @mitchallen/react-login-theme-grey --save
  
* * *

## Usage


### Usage Example

Take the code below and modify how the handleSubmit method acts to process the login info.


```
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

import LoginThemeGrey from '@mitchallen/react-login-theme-grey';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      status: this.props.defaultStatus || 'Login',
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  validateForm() {
    return this.state.username.length > 0
      && this.state.password.length > 0;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ 
      status: this.props.successMessage , 
      isLoading: false 
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr size="1" />
        <LoginThemeGrey
            handleChange={this.handleChange.bind(this)}
            handleSubmit={this.handleSubmit.bind(this)}
            validateForm={this.validateForm.bind(this)}
            status={this.state.status}
            isLoading={this.state.isLoading}
            username={this.state.username}
            password={this.state.password}
        />
        
        <hr size="1" />
      </div>
    );
  }
}

App.defaultProps = {
  submitMessage: 'submitting ...',
  successMessage: 'You are logged in!'
}

App.propTypes = {
  userHasAuthenticated: PropTypes.func.isRequired,
  cognitoUserPoolId: PropTypes.string.isRequired,
  cognitoAppClientId: PropTypes.string.isRequired
};

export default App;

```

* * *

## Testing

### Run the Tests

To test, go to the root folder and type (sans __$__):

    $ npm test
    
## Component Testing

### Prerequisite

If you've never installed __create-react-app__ (you may need to use ```sudo```):

```
$ npm install -g create-react-app
```

### Create a local npm link

In the original component folder (you may need to use ```sudo```):

```
$ npm link
```

### Create a test package

Create a root test folder and then do the following:

```
$ create-react-app react-login-theme-grey-test
$ cd react-login-theme-grey-test
$ npm link @mitchallen/react-login-theme-grey
```

### Modify src/App.js

1: Add this line near the top:

```
import LoginThemeGrey from '@mitchallen/react-login-theme-grey';
```

__NOTE:__ LoginThemeGrey must be Capitalized or component won't render.

2: Somewhere in the middle of the __render__ method add this line:

```
<LoginThemeGrey />
```

### Run The Test App

```
$ npm start
```

### Cleanup

Remember to unlink when done.
   
* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/react-login-theme-grey.git](https://bitbucket.org/mitchallen/react-login-theme-grey.git)
* [github.com/mitchallen/react-login-theme-grey.git](https://github.com/mitchallen/react-login-theme-grey.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.1

* updated documentation

#### Version 0.1.0 

* initial release

* * *
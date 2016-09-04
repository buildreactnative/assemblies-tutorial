import React, { Component } from 'react';
import {
  ActivityIndicator,
  Navigator,
} from 'react-native';

import Dashboard from '../components/Dashboard';
import Landing from '../components/Landing';
import Loading from '../components/shared/Loading';
import LoginContainer from '../containers/LoginContainer';
import Register from '../components/accounts/Register';
import RegisterConfirmationContainer from '../containers/RegisterConfirmationContainer';
import { globals } from '../styles';

export default class App extends Component {
  constructor(){
    super();
    this.logout = this.logout.bind(this);
  }
  componentDidMount(){
    this.props.loadCredentials();
  }
  logout(){
    this.nav.push({ name: 'Landing' })
  }
  render() {
    let { initialRoute, user, ready } = this.props;
    if ( !ready ) { return <Loading /> }
    return (
      <Navigator
        style={globals.flex}
        ref={(el) => this.nav = el }
        initialRoute={{name: initialRoute}}
        renderScene={(route, navigator) => {
          switch(route.name){
            case 'Landing':
              return (
                <Landing navigator={navigator}/>
            );
            case 'Dashboard':
              return (
                <Dashboard navigator={navigator} logout={this.logout} user={user}/>
            );
            case 'Register':
              return (
                <Register navigator={navigator}/>
            );
            case 'RegisterConfirmation':
              return (
                <RegisterConfirmationContainer {...route} navigator={navigator}/>
            );
            case 'Login':
              return (
                <LoginContainer navigator={navigator} />
            );
          }
        }}
      />
    );
  }
}

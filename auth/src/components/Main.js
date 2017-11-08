/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './common';
import LoginForm from './LoginForm'


class Main extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBCXywG4iIqPGsd4Aav-JMDTbmDG4SyI3Q",
      authDomain: "auth-34ad8.firebaseapp.com",
      databaseURL: "https://auth-34ad8.firebaseio.com",
      projectId: "auth-34ad8",
      storageBucket: "auth-34ad8.appspot.com",
      messagingSenderId: "299927545461"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn){
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
        break;
      case false:
        return <LoginForm />;
        break;
      default:
        return <Spinner />;
        break;
    }


  }

  render(){
    return(
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    )
  }
};

export default Main;

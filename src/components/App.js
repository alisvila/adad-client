import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './common';
import LoginForm from './LoginForm'
import Home from './page1'
import reducers from './reducers';
import LibraryList from './LibraryList'

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
			apiKey: "AIzaSyCCrjkL9WPfSjmP8z0Bl0xBYuTU0wCUABk",
			authDomain: "auth-48cb4.firebaseapp.com",
			databaseURL: "https://auth-48cb4.firebaseio.com",
			projectId: "auth-48cb4",
			storageBucket: "auth-48cb4.appspot.com",
			messagingSenderId: "333968897657"
	  })
	}
  render() {
    return (
        <Provider store={createStore(reducers)}>
            <View>
                <LibraryList />
            </View>
        </Provider>
    );
  }
}

export default App;

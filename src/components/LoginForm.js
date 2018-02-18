import React, { Component } from 'react';
import { View, Button, StyleSheet, Image, Animated, Keyboard } from 'react-native';
import { Card, CardSection, Submit, Input } from './common';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.keyboardHeight = new Animated.Value(0);
        this.imageHeight = new Animated.Value(134);
    }

    componentWillMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow = (event) => {
        console.log(event)
        Animated.parallel([
          Animated.timing(this.keyboardHeight, {
              duration: event.duration,
              toValue: event.endCoordinates.height,
          }),
            Animated.timing(this.imageHeight, {
                duration: event.duration,
                toValue: 50,
            }),
        ]).start();
    };


    _keyboardDidHide = (event) => {
        Animated.parallel([
          Animated.timing(this.keyboardHeight, {
              toValue: 0,
          }),
            Animated.timing(this.imageHeight, {
                toValue: 150,
            }),
        ]).start();
    };

    onpress() {
        console.log('here');
        fetch('http://api.adad.ir/auth/',{
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: '',
                passwrod: ''
            }),
        })
        .then(response => { console.log(response)})
        .catch(error => { console.log(error) });
    }

    render() {
        return (
            <Animated.View style={{ paddingBottom: this.keyboardHeight }} >
                <Animated.Image style={[ styles.logo, { height: this.imageHeight} ]} source={{ uri: 'https://cdn.adad.ir/images/logo.png' }} />
                <Card>
                    <CardSection>
                      <Input label="email"/>
                    </CardSection>
                    <CardSection>
                      <Input label="password"/>
                    </CardSection>
                    <CardSection>
                      <Submit buttonText='Login' onPress={ this.onpress } />
                    </CardSection>
                </Card>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        height: 150,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        marginBottom: 150,
        marginTop: 50
    },
    button: {
        flex: 1,
        height: 170,
        width: null,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default LoginForm;

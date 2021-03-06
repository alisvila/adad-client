import React, { Component } from 'react';
import { View, Button, StyleSheet, Image, Text } from 'react-native';
import { Card, CardSection, Submit, Input } from './common';

const Header = (props) => {
    return (
    <View style={styles.Container}>
        <Text style={styles.Text}>{props.header}</Text>
        <Text style={styles.Text}>some text over there</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#ff9900',
        padding: 50,
    },
    Text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 14,
    }
})

export default Header;

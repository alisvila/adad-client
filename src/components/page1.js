import React, { Component } from 'react';
import { View, Button, StyleSheet, Image, Text } from 'react-native';
import { Card, CardSection, Submit, Input } from './common';
import Header from './Header'
import { Spinner } from './common'

class Home extends Component {
    render () {
        return (
            <View>
            <Header header='page1' />
                <Card>
                    <Text>some text here</Text>
                    <Text>some text here</Text>
                    <Text>some text here</Text>
                    <Text>some text here</Text>
                    <Text>some text here</Text>
                </Card>
                <Card>
                    <Text>some text here</Text>
                </Card>
                <Card>
                    <Text>some text here</Text>
                </Card>
            </View>

        )
    }

}

export default Home;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
    return (
    <View style={styles.headerWrapper}>
        <Text style={styles.text}>{props.text}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    headerWrapper: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        position: 'relative',
        elevation: 2,
    },
    text: {
        fontSize: 20,
    }
})

export {Header}

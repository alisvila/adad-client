import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const Submit = ({onPress, buttonText}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.label}>{buttonText}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    label: {
        color: '#ff9900',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10

    },
    button: {
        flex: 1,
        alignSelf: 'stretch',
        color: '#ff9900',
        borderColor: '#ff9900',
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5
    }
};

export {Submit}

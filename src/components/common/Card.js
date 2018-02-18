import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
    return (
    <View style={styles.container}>
        {props.children}
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        // shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 1,
        marginLeft: 5,
        marginTop: 10,
        marginRight: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,
    }
})

export { Card };

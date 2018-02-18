import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = ({label, placeholder, change, value}) => {
    return (
        <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput 
            value={value}
            style={styles.input}
            placeholder={placeholder}
            onChangeText={change}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    label: {
        fontSize: 18,
        paddingLeft: 20,
        flex:1,
    },
    input: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 28,
        lineHeight: 23,
        flex: 2,
        height: 20,
        width: 100,
    }
})

export { Input }

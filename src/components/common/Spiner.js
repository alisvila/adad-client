import React from 'react';
import { ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
    return (
    <ActivityIndicator size={size || 'large'} />
    )
}

export { Spinner }

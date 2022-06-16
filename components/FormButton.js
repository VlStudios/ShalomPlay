import React from 'react';
import { Text, TouchableOpacity, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions';

const FormButton = ({buttonTitle, ...rest}) => {
    return (
        <TouchableOpacity style ={styles.buttonContainer} { ...rest}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    );
}

export default FormButton;

const styles = StyleSheet.create({
   buttonContainer: {
        marginTop: 10,
        width:  windowWidth / 1.1,
        height: windowHeight /10,
        backgroundColor: '#7cacf4',
        padding:10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0f3482',
        fontFamily: 'Poppins-Bold',
    },
});
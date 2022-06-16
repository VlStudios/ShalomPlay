import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SocialButton = ({
    buttonTitle,
    btnType,
    color,
    backgroundColor,
    ...rest
}) => {
    let bgColor = backgroundColor;
    return (
        <TouchableOpacity
            style={[styles.buttonContainer, { backgroundColor: bgColor}]}
            {...rest}>
            <View style={styles.iconWrapper}>
                <FontAwesome name={btnType} style={styles.icon} size={22} color={color} />
            </View>
            <View style={styles.btnWrapper}>
                <Text style ={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default SocialButton;

const styles = StyleSheet.create({
   buttonContainer: {
        marginTop: 10,
        width: windowWidth / 1.1,
        height: windowHeight /10,
        padding:10,
        flexDirection: 'row',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconWrapper: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon : {
        fontWeight:'bold',
    },
    btnTxtWrapper: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center', 
    },
    buttonText: {
        fontSize :20,
        fontWeight: 'bold',
        fontFamily: 'Poppins-Bold',
    },
});
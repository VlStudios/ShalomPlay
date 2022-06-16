import React, {useState} from 'react';
import { View ,Text , TouchableOpacity, Image, StyleSheet } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {windowHeight, windowWidth} from '../utils/Dimentions';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Criar Conta</Text>
        <FormInput
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholderText="Digite Seu E-mail"
          iconType="user"
          KeyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          
        />

        <FormInput
            labelValue={password}
            onChangeText={(userPassword) => setPassword(userPassword)}
            placeholderText="Digite Sua Senha"
            iconType="lock"
            secureTextEntry={true}
            
        />

        <FormInput
            labelValue={confirmPassword}
            onChangeText={(userPassword) => setPassword(userPassword)}
            placeholderText="Confirme Sua Senha"
            iconType="lock"
            secureTextEntry={true}
            
         />

        <FormButton
            buttonTitle="Criar Conta"
            onPress={() => alert('Criada com sucesso')}
        />
        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>Ao se registrar, você confirma que aceita nossos</Text>
          <TouchableOpacity onPress={() => alert('Termos Lidos')}>
            <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>Termos De Serviços </Text>
          </TouchableOpacity>
          <Text style={styles.color_textPrivate}> e nossas </Text>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>Políticas De Privacidade</Text>
        </View>

        <SocialButton 
          buttonTitle="Continue com Google"
          btnType="google"
          color="#de4d41"
          backgroundColor="#F4DDDA"
          onPress={() =>{}}
        />


        <TouchableOpacity 
           style={styles.navButton}
           onPress={ () => navigation.navigate('Login')}>
           <Text style={styles.navButton}>
              Já tem uma conta? Fazer login 
          </Text>
        </TouchableOpacity>
      </View>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingHorizontal: 17,
      paddingVertical: 10,
      alignItems: 'center'
      
      
    },
    header: {
        justifyContent: 'flex-end',
        paddingHorizontal: 0,
        paddingBottom: 0,
        
    },
    footer: {
        
        backgroundColor: '#fff',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        paddingHorizontal: 17,
        paddingVertical: 20,
        alignItems: 'center'
    },
    text: {
      fontFamily: 'Lato-Regular',
      fontSize: 28,
      marginBottom: 10,
      color: '#0f3482',
      alignItems: 'center',
      fontWeight:'bold',
    },
    navButton: {
      marginTop: 3,
      color: '#7cacf4',
      fontWeight: 'bold',
      fontSize: 16
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#7cacf4',
      fontFamily: 'Poppins-SemiBold',
      fontWeight:'bold',
      
    },
    textPrivate: {
        flexDirection:'row',
        flexWrap: 'wrap',
        marginVertical: 10, 
        justifyContent: 'center',
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color:'grey',
    }
});


/*
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
*/



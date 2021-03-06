import React, { useEffect ,useState ,useCallback} from 'react';
import { View ,Text , TouchableOpacity, Image, StyleSheet } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {windowHeight, windowWidth} from '../utils/Dimentions';


const LoginScreen = ({navigation}) => {


  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

    return (
      <View 
        style={styles.container}>
        <View style={styles.header}>
        <Image
          source={require('../assets/fotoD.png')}
          style={styles.logo}
        />
        </View>
        <View style={styles.footer}>
        
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


        <FormButton
            buttonTitle="Entrar"
            onPress={() => alert('Logado com sucesso')}
        />
        <TouchableOpacity style={styles.forgotButton} onPress={ () => {}}>
            <Text style={styles.navButtonText}>Esqueceu a Senha ?</Text>
        </TouchableOpacity>

        <SocialButton 
          buttonTitle="Continue com Google"
          btnType="google"
          color="#de4d41"
          backgroundColor="#F4DDDA"
          onPress={() =>{}}
        />


        <TouchableOpacity 
           style={styles.forgotButton}
           onPress={ () => navigation.navigate('Signup')}>
           <Text style={styles.navButton}>
              Ainda não tem uma conta? Criar conta 
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center'
      
      
    },
    header: {
        flex: 1.3,
        justifyContent: 'flex-end',
        paddingHorizontal: 0,
        paddingBottom: 0,
        
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        paddingHorizontal: 17,
        paddingVertical: 30,
        alignItems: 'center'
    },
    logo: {
      height: 110,
      width: 165,
      resizeMode: 'cover',
    },
    text: {
      fontFamily: 'Poppins-Bold',
      fontSize: 28,
      marginBottom: 10,
      color: '#0f3482',
      alignItems: 'center',
      fontWeight:'bold',
    },
    navButton: {
      marginTop: -5,
      color: '#7cacf4',
      fontWeight:'bold',
      
    },
    forgotButton: {
      marginVertical: 10,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#7cacf4',
      fontWeight:'bold',
    },
});


/*
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
*/



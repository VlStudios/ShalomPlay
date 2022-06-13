import React from 'react';
import { View ,Text , Button, StyleSheet , Image ,TouchableOpacity } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({ selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)' ,'color(#6c94ec)';

    return (
        <View
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

/* const Skip = ({ ...props}) => (
    <Button
        title='Pular'
        color='#6c94ec'
    />
);

const Next = ({ ...props}) => (
    <Button
        title='Próximo'
        color="#6c94ec"
        {...props}
    />
);

const Done = ({ ...props}) => (
    <Button
        title='ENTRAR'
        color="#6c94ec"
        {...props}
    />
);
*/

const Skip = ({ ...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{
            fontSize:16,color:"#fff"}}>PULAR</Text>
    </TouchableOpacity>
);

const Next = ({ ...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16,color:"#fff"}}>PRÓXIMO</Text>
    </TouchableOpacity>
);

const Done = ({ ...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16, color:"#fff"}}>ENTRAR</Text>
    </TouchableOpacity>
);



const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
          {
             backgroundColor: '#0c3b97',
             image: <Image source={require('../assets/fotoA.png')} />,
             title: 'Cultos Ao Vivo',
             subtitle: 'Assistar cultos ao vivos e gravados',
         },
         {
            backgroundColor: '#155df3',
            image: <Image source={require('../assets/fotoB.png')} />,
            title: 'Audios Dos Cultos',
            subtitle: 'Ouça Cultos e Eventos Da Igreja Em Áudio',
        },
     ]}
   />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
import * as React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/fotoC.png')} style={{ width: 250, height: 250 }}/>
    </View>
  );
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0c3b97',
        },
    });
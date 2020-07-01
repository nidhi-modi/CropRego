import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native'

function HarHome(props) {
  const { navigation } = props

  
      return(
        <View style={styles.container}>

          <ImageBackground source={require('../assets/T&G_Tomatoes.jpg')} style={styles.backgroundImage}>



            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.navigate('Har123')}>
              <Text style={styles.buttonText}>HAR 123 Registration </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.navigate('Har456')}>
              <Text style={styles.buttonText}>HAR 456 Registration</Text>
            </TouchableOpacity>


          </ImageBackground>

        </View>
      );
    
  



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb'
  },

  buttonContainer1: {
    backgroundColor: 'rgba(0,0,0,0.65)',
    borderRadius: 5,
    padding: 10,
    margin: 20,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center'

  },

  buttonContainer: {
    backgroundColor: 'rgba(0,128,0,0.65)',
    borderRadius: 5,
    padding: 10,
    margin: 20,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonText: {
    fontSize: 23,
    color: '#ffffff',
    fontWeight: 'bold',
    fontStyle: 'italic'

  },
  backgroundImage: {

    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  }
})

export default HarHome

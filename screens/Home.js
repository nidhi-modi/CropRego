import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, StatusBar, ImageBackground } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';




function Home(props) {
  const { navigation } = props
  const { route } = props
  const { site1 } = route.params;

  state = {
    text: '',
  }

  AsyncStorage.setItem('house', JSON.stringify(site1));

  console.log("Data Saved successfully : "+ JSON.stringify(site1));

  if (site1 === 'HAR') {

    navigation.navigate('HarHome')

  } else if (site1 === 'GER') {

    navigation.navigate('GerHome')

  } else if (site1 === 'FAV') {

    navigation.navigate('FavHome')


  } else if (site1 === 'OHA') {

    navigation.navigate('OhaHome')

  }


  return (

    <View style={styles.container}>

      <ImageBackground source={require('../assets/background2.png')} style={styles.backgroundImage}>

        {site1 === 'HAR' ?
          (<TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('HarHome')}>
            <Text style={styles.buttonText}>HAR Site</Text>
          </TouchableOpacity>) : null}

        {site1 === 'GER' ?
          (<TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('GerHome')}>
            <Text style={styles.buttonText}>GER Site</Text>
          </TouchableOpacity>) : null}

        {site1 === 'FAV' ?
          (<TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('FavHome')}>
            <Text style={styles.buttonText}>FAV Site</Text>
          </TouchableOpacity>) : null}

        {site1 === 'OHA' ?
          (<TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('OhaHome')}>
            <Text style={styles.buttonText}>OHA Site</Text>
          </TouchableOpacity>) : null}

      </ImageBackground>

    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb'
  },

  buttonContainer1: {
    //backgroundColor: 'rgba(0,0,0,0.65)',
    borderRadius: 5,
    padding: 10,
    margin: 20,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center'

  },

  buttonContainer: {
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    padding: 10,
    margin: 20,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonText: {
    fontSize: 19,
    color: '#000000',
    fontWeight: 'bold',

  },
  backgroundImage: {

    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  }
})

export default Home

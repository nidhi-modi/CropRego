import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,ImageBackground, TouchableHighlight,ScrollView } from 'react-native'
import AwesomeButton from 'react-native-really-awesome-button';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';


function Har1RedDelightRow(props) {
    const { navigation } = props
  return (
    <View style={styles.container}>
  
  <ImageBackground source={require('../assets/background2.png')} style={styles.backgroundImage}>
  
        <ScrollView>
  
        <TouchableOpacity
       style={styles.buttonContainer}
       onPress={() => navigation.navigate('Har1RedDelight')}>
       <Text style={styles.buttonText}>Row 128</Text>
     </TouchableOpacity>
  
     <TouchableOpacity
       style={styles.buttonContainer}
       onPress={() => navigation.navigate('Har1RedDelight2')}>
       <Text style={styles.buttonText}>Row 148</Text>
     </TouchableOpacity>

  
        </ScrollView>
  
     </ImageBackground>
  
   </View>
  )
  
  }
  
  
  const styles = StyleSheet.create({
  
    submit:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'#54B948',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
          },
      submitText:{
        color: '#ffffff',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20,
        textAlign:'center'
          
      },
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
      resizeMode:'cover'
  }
  })
  
  export default Har1RedDelightRow
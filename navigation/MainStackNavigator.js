import * as React from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native'


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import HarHome from '../screens/HarHome'
import GerHome from '../screens/GerHome'
import OhaHome from '../screens/OhaHome'
import FavHome from '../screens/FavHome'
import Har123 from '../screens/Har123'
import Har456 from '../screens/Har456'
import Har3Flamentyno from '../screens/Har3Flamentyno'
import FlamentynoPlant1 from '../screens/FlamentynoPlant1'
import PlantList from '../screens/PlantList'
import TrussDetails from '../screens/TrussDetails'
import PlantDetails from '../screens/PlantDetails'
import Har1YeloPlant1 from '../screens/Har1YeloPlant1'
import Har1Yelo from '../screens/Har1Yelo'
import Har1YeloTrussDetails from '../screens/Har1YeloTrussDetails'
import Har1Angelle from '../screens/Har1Angelle'
import Har1RedDelight from '../screens/Har1RedDelight'
import Har2Angelle from '../screens/Har2Angelle'
import Har3Km from '../screens/Har3Km'
import Har3Bambello from '../screens/Har3Bambello'
import Ger1Row from '../screens/Ger1Row'
import Ger1Merlice from '../screens/Ger1Merlice'
import Ger1Merlice2 from '../screens/Ger1Merlice2'
import Ger1MerlicePlant1 from '../screens/Ger1MerlicePlant1'
import Ger1Merlice2Plant1 from '../screens/Ger1Merlice2Plant1'
import Ger1MerliceTrussDetails from '../screens/Ger1MerliceTrussDetails'
import Ger1Merlice2TrussDetails from '../screens/Ger1Merlice2TrussDetails'
import Ger4Row from '../screens/Ger4Row'
import Ger4Provine from '../screens/Ger4Provine'
import Ger4Provine2 from '../screens/Ger4Provine2'
import Ger4ProvinePlant1 from '../screens/Ger4ProvinePlant1'
import Ger4Provine2Plant1 from '../screens/Ger4Provine2Plant1'
import Ger4ProvineTrussDetails from '../screens/Ger4ProvineTrussDetails'
import Ger4Provine2TrussDetails from '../screens/Ger4Provine2TrussDetails'


const Stack = createStackNavigator()

function MainStackNavigator() {



  return (


    <NavigationContainer>

      

      <Stack.Navigator initialRouteName='Home'

        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#FFB92B'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: 'black',
          headerBackTitleVisible: false
        }

        }



        headerMode='float'>

        <Stack.Screen name='Home' component={Home} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='HarHome' component={HarHome} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='GerHome' component={GerHome} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='FavHome' component={FavHome} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='OhaHome' component={OhaHome} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='Har123' component={Har123} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='Har456' component={Har456} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='Har3Flamentyno' component={Har3Flamentyno} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='PlantList' component={PlantList} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='PlantDetails' component={PlantDetails} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='TrussDetails' component={TrussDetails} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='Har1YeloPlant1' component={Har1YeloPlant1} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='Har1Yelo' component={Har1Yelo} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='FlamentynoPlant1' component={FlamentynoPlant1} options={{ title: 'T&G Global'}}/> 
          
        <Stack.Screen name='Har1YeloTrussDetails' component={Har1YeloTrussDetails} options={{ title: 'T&G Global'}}/> 

        <Stack.Screen name='Har1Angelle' component={Har1Angelle} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='Har1RedDelight' component={Har1RedDelight} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='Har2Angelle' component={Har2Angelle} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='Har3Km' component={Har3Km} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='Har3Bambello' component={Har3Bambello} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='Ger1Row' component={Ger1Row} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='Ger1Merlice' component={Ger1Merlice} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='Ger1Merlice2' component={Ger1Merlice2} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='Ger1MerlicePlant1' component={Ger1MerlicePlant1} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='Ger1Merlice2Plant1' component={Ger1Merlice2Plant1} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='Ger1MerliceTrussDetails' component={Ger1MerliceTrussDetails} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='Ger1Merlice2TrussDetails' component={Ger1Merlice2TrussDetails} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='Ger4Row' component={Ger4Row} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='Ger4Provine' component={Ger4Provine} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='Ger4Provine2' component={Ger4Provine2} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='Ger4ProvinePlant1' component={Ger4ProvinePlant1} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='Ger4Provine2Plant1' component={Ger4Provine2Plant1} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='Ger4ProvineTrussDetails' component={Ger4ProvineTrussDetails} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='Ger4Provine2TrussDetails' component={Ger4Provine2TrussDetails} options={{ title: 'T&G Global' }} />


      </Stack.Navigator>

    </NavigationContainer >



  )
}

const styles = StyleSheet.create({


  text: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    marginRight: 10
  },

  TouchableOpacityStyle: {


    alignItems: 'center',
    justifyContent: 'center',
    right: 5,

  },

  FloatingButtonStyle: {

    resizeMode: 'contain',
    width: 40,
    height: 40,
  },


})



export default MainStackNavigator
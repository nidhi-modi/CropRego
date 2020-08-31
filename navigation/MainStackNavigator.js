import * as React from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, Alert, Linking, View } from 'react-native'


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
import Har1YeloRow from '../screens/Har1YeloRow'
import Har1YeloTrussDetails from '../screens/Har1YeloTrussDetails'
import Har1Angelle from '../screens/Har1Angelle'
import Har1AngelleRow from '../screens/Har1AngelleRow'
import Har1RedDelight from '../screens/Har1RedDelight'
import Har1RedDelight2 from '../screens/Har1RedDelight2'
import Har1RedDelightRow from '../screens/Har1RedDelightRow'
import Har2Angelle from '../screens/Har2Angelle'
import Har2Angelle2 from '../screens/Har2Angelle2'
import Har2AngellePlant1 from '../screens/Har2AngellePlant1'
import Har2AngellePlant2 from '../screens/Har2AngellePlant2'
import Har2AngelleRow from '../screens/Har2AngelleRow'
import Har2AngelleDataChecker1 from '../screens/Har2AngelleDataChecker1'
import Har2AngelleDataChecker2 from '../screens/Har2AngelleDataChecker2'
import Har2AngelleTrussDetails1 from '../screens/Har2AngelleTrussDetails1'
import Har2AngelleTrussDetails2 from '../screens/Har2AngelleTrussDetails2'
import Har3Km from '../screens/Har3Km'
import Har3Km2 from '../screens/Har3Km2'
import Har3KmRow from '../screens/Har3KmRow'
import Har3KmPlant1 from '../screens/Har3KmPlant1'
import Har3KmPlant2 from '../screens/Har3KmPlant2'
import Har3KmTrussDetails1 from '../screens/Har3KmTrussDetails1'
import Har3KmTrussDetails2 from '../screens/Har3KmTrussDetails2'
import Har3KmDataChecker1 from '../screens/Har3KmDataChecker1'
import Har3KmDataChecker2 from '../screens/Har3KmDataChecker2'
import Har3Bambello from '../screens/Har3Bambello'
import Har3Bambello2 from '../screens/Har3Bambello2'
import Har3BambelloRow from '../screens/Har3BambelloRow'
import Har3BambelloPlant1 from '../screens/Har3BambelloPlant1'
import Har3BambelloPlant2 from '../screens/Har3BambelloPlant2'
import Har3BambelloTrussDetails1 from '../screens/Har3BambelloTrussDetails1'
import Har3BambelloTrussDetails2 from '../screens/Har3BambelloTrussDetails2'
import Har3BambelloDataChecker1 from '../screens/Har3BambelloDataChecker1'
import Har3BambelloDataChecker2 from '../screens/Har3BambelloDataChecker2'
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
import SiteSelection from '../screens/SiteSelection'
import Har1YeloDataChecker from '../screens/Har1YeloDataChecker'
import Har1AngellePlant1 from '../screens/Har1AngellePlant1'
import Har1AngelleTrussDetails from '../screens/Har1AngelleTrussDetails'
import Har1AngelleDataChecker from '../screens/Har1AngelleDataChecker'
import Har1RedDelightPlant1 from '../screens/Har1RedDelightPlant1'
import Har1RedDelightPlant2 from '../screens/Har1RedDelightPlant2'
import Har1RedDelightTrussDetails1 from '../screens/Har1RedDelightTrussDetails1'
import Har1RedDelightTrussDetails2 from '../screens/Har1RedDelightTrussDetails2'
import Har1RedDelightDataChecker1 from '../screens/Har1RedDelightDataChecker1'
import Har1RedDelightDataChecker2 from '../screens/Har1RedDelightDataChecker2'


const Stack = createStackNavigator();

function MainStackNavigator() {



  return (


    <NavigationContainer>



      <Stack.Navigator initialRouteName='SiteSelection'

        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#2C903D'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: 'white',
          headerBackTitleVisible: false
        }

        }



        headerMode='float'>

        <Stack.Screen name='Home' component={Home} options={{ headerLeft: () => null }} />

        <Stack.Screen name='HarHome' component={HarHome} options={({ navigation }) => ({
          headerLeft: () => null, headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'T&G Global'
        })} />

        <Stack.Screen name='GerHome' component={GerHome} options={{ headerLeft: () => null, title: 'T&G Global' }} />

        <Stack.Screen name='FavHome' component={FavHome} options={{ headerLeft: () => null, title: 'T&G Global' }} />

        <Stack.Screen name='OhaHome' component={OhaHome} options={{ headerLeft: () => null, title: 'T&G Global' }} />

        <Stack.Screen name='Har123' component={Har123} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'T&G Global'
        })} />


        <Stack.Screen name='Har456' component={Har456} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'T&G Global'
        })}
        />

        <Stack.Screen name='Har3Flamentyno' component={Har3Flamentyno} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='PlantList' component={PlantList} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='PlantDetails' component={PlantDetails} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='TrussDetails' component={TrussDetails} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='Har1YeloPlant1' component={Har1YeloPlant1} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 1 Yelo'
        })} />


        <Stack.Screen name='Har1AngellePlant1' component={Har1AngellePlant1} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 1 Angelle'
        })} />


        <Stack.Screen name='Har1Yelo' component={Har1Yelo} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('PlantList')}>

                <Image source={require('../assets/22.png')} style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginLeft: 15
              }}></View>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 1 Yelo'
        })} />


        <Stack.Screen name='FlamentynoPlant1' component={FlamentynoPlant1} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='Har1YeloTrussDetails' component={Har1YeloTrussDetails} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 1 Yelo'
        })} />

        <Stack.Screen name='Har1YeloRow' component={Har1YeloRow} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 1 Yelo'
        })} />

        <Stack.Screen name='Har1AngelleTrussDetails' component={Har1AngelleTrussDetails} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 1 Angelle'
        })} />

        <Stack.Screen name='Har1AngelleRow' component={Har1AngelleRow} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 1 Angelle'
        })} />


        <Stack.Screen name='Har1Angelle' component={Har1Angelle} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('PlantList')}>

                <Image source={require('../assets/22.png')} style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginLeft: 15
              }}></View>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 1 Angelle'
        })} />

        <Stack.Screen name='Har1RedDelight' component={Har1RedDelight} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('PlantList')}>

                <Image source={require('../assets/22.png')} style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginLeft: 15
              }}></View>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 1 Red Delight'
        })} />

        <Stack.Screen name='Har1RedDelight2' component={Har1RedDelight2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('PlantList')}>

                <Image source={require('../assets/22.png')} style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginLeft: 15
              }}></View>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 1 Red Delight'
        })} />

        <Stack.Screen name='Har1RedDelightRow' component={Har1RedDelightRow} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 1 Red Delight'
        })} />



        <Stack.Screen name='Har1RedDelightTrussDetails1' component={Har1RedDelightTrussDetails1} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 1 Red Delight'
        })} />


        <Stack.Screen name='Har1RedDelightTrussDetails2' component={Har1RedDelightTrussDetails2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 1 Red Delight'
        })} />


        <Stack.Screen name='Har1RedDelightPlant1' component={Har1RedDelightPlant1} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 1 Red Delight'
        })} />

        <Stack.Screen name='Har1RedDelightPlant2' component={Har1RedDelightPlant2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 1 Red Delight'
        })} />


        <Stack.Screen name='Har1RedDelightDataChecker1' component={Har1RedDelightDataChecker1} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 1 Red Delight'
        })} />

        <Stack.Screen name='Har1RedDelightDataChecker2' component={Har1RedDelightDataChecker2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 1 Red Delight'
        })} />


        <Stack.Screen name='Har2Angelle' component={Har2Angelle} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('PlantList')}>

                <Image source={require('../assets/22.png')} style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginLeft: 15
              }}></View>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 2 Angelle'
        })} />


        <Stack.Screen name='Har2Angelle2' component={Har2Angelle2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('PlantList')}>

                <Image source={require('../assets/22.png')} style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginLeft: 15
              }}></View>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 2 Angelle'
        })} />

        <Stack.Screen name='Har2AngelleRow' component={Har2AngelleRow} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 2 Angelle'
        })} />

        <Stack.Screen name='Har2AngellePlant1' component={Har2AngellePlant1} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 2 Angelle'
        })} />

        <Stack.Screen name='Har2AngellePlant2' component={Har2AngellePlant2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 2 Angelle'
        })} />

        <Stack.Screen name='Har2AngelleDataChecker1' component={Har2AngelleDataChecker1} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 2 Angelle'
        })} />

        <Stack.Screen name='Har2AngelleDataChecker2' component={Har2AngelleDataChecker2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 2 Angelle'
        })} />

        <Stack.Screen name='Har2AngelleTrussDetails1' component={Har2AngelleTrussDetails1} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 2 Angelle'
        })} />

        <Stack.Screen name='Har2AngelleTrussDetails2' component={Har2AngelleTrussDetails2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 2 Angelle'
        })} />


        <Stack.Screen name='Har3Km' component={Har3Km} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('PlantList')}>

                <Image source={require('../assets/22.png')} style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginLeft: 15
              }}></View>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 3 KM5512'
        })} />

        <Stack.Screen name='Har3Km2' component={Har3Km2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('PlantList')}>

                <Image source={require('../assets/22.png')} style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginLeft: 15
              }}></View>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 3 KM5512'
        })} />


        <Stack.Screen name='Har3KmRow' component={Har3KmRow} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 3 KM5512'
        })} />

        <Stack.Screen name='Har3KmPlant1' component={Har3KmPlant1} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 3 KM5512'
        })} />

        <Stack.Screen name='Har3KmPlant2' component={Har3KmPlant2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 3 KM5512'
        })} />

        <Stack.Screen name='Har3KmTrussDetails1' component={Har3KmTrussDetails1} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 3 KM5512'
        })} />

        <Stack.Screen name='Har3KmTrussDetails2' component={Har3KmTrussDetails2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 3 KM5512'
        })} />

        <Stack.Screen name='Har3KmDataChecker1' component={Har3KmDataChecker1} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 3 KM5512'
        })} />


        <Stack.Screen name='Har3KmDataChecker2' component={Har3KmDataChecker2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 3 KM5512'
        })} />


        <Stack.Screen name='Har3Bambello' component={Har3Bambello} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('PlantList')}>

                <Image source={require('../assets/22.png')} style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginLeft: 15
              }}></View>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 3 Bambello'
        })} />

        <Stack.Screen name='Har3Bambello2' component={Har3Bambello2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('PlantList')}>

                <Image source={require('../assets/22.png')} style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginLeft: 15
              }}></View>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 3 Bambello'
        })} />

        <Stack.Screen name='Har3BambelloRow' component={Har3BambelloRow} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 3 Bambello'
        })} />

        <Stack.Screen name='Har3BambelloPlant1' component={Har3BambelloPlant1} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 3 Bambello'
        })} />

        <Stack.Screen name='Har3BambelloPlant2' component={Har3BambelloPlant2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 3 Bambello'
        })} />

        <Stack.Screen name='Har3BambelloTrussDetails1' component={Har3BambelloTrussDetails1} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 3 Bambello'
        })} />

        <Stack.Screen name='Har3BambelloTrussDetails2' component={Har3BambelloTrussDetails2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 3 Bambello'
        })} />

        <Stack.Screen name='Har3BambelloDataChecker1' component={Har3BambelloDataChecker1} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 3 Bambello'
        })} />

        <Stack.Screen name='Har3BambelloDataChecker2' component={Har3BambelloDataChecker2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 3 Bambello'
        })} />

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

        <Stack.Screen name='SiteSelection' component={SiteSelection} options={{ title: 'T&G Global' }} />

        <Stack.Screen name='Har1YeloDataChecker' component={Har1YeloDataChecker} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 1 Yelo'
        })} />

        <Stack.Screen name='Har1AngelleDataChecker' component={Har1AngelleDataChecker} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdOTsC0nlLB0nzw9ELYSBkqKo0QFM6z_v6vs2dQPbd-tENjkQ/viewform') }} >

                <Image source={require('../assets/comments32.png')}

                  style={styles.FloatingButtonStyle2} />

              </TouchableOpacity>

              <View style={{
                marginRight: 3
              }}></View>
            </View>
          , title: 'HAR 1 Angelle'
        })} />



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

  TouchableOpacityStyle11: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },


  TouchableOpacityStyle: {


    alignItems: 'center',
    justifyContent: 'center',
    right: 5,

  },

  FloatingButtonStyle2: {

    resizeMode: 'contain',
    width: 28,
    height: 28,
  },



  TouchableOpacityStyle2: {


    alignItems: 'center',
    justifyContent: 'center',
    right: 5,

  },


})



export default MainStackNavigator
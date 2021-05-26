import * as React from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, Alert, Linking, View } from 'react-native'


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import HarHome from '../screens/HarHome'
import GerHome from '../screens/GerHome'
import OhaHome from '../screens/OhaHome'
import Har123 from '../screens/Har123'
import Har456 from '../screens/Har456'

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
import Har5AngellePlantList from '../screens/Har5AngellePlantList'
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
import Har4AvalantinoRow from '../screens/Har4AvalantinoRow'
import Har3Bambello from '../screens/Har3Bambello'
import Har3Bambello2 from '../screens/Har3Bambello2'
import Har3BambelloRow from '../screens/Har3BambelloRow'
import Har5AngellePlant1 from '../screens/Har5AngellePlant1'
import Har3BambelloPlant1 from '../screens/Har3BambelloPlant1'
import Har3BambelloPlant2 from '../screens/Har3BambelloPlant2'
import Har3BambelloTrussDetails1 from '../screens/Har3BambelloTrussDetails1'
import Har3BambelloTrussDetails2 from '../screens/Har3BambelloTrussDetails2'
import Har3BambelloDataChecker1 from '../screens/Har3BambelloDataChecker1'
import Har3BambelloDataChecker2 from '../screens/Har3BambelloDataChecker2'
import Ger1Row from '../screens/Ger1Row'
import Har5AngelleDataChecker1 from '../screens/Har5AngelleDataChecker1'
import Ger1Merlice from '../screens/Ger1Merlice'
import Ger1Merlice2 from '../screens/Ger1Merlice2'
import Har5Angelle from '../screens/Har5Angelle'
import Ger1MerlicePlant1 from '../screens/Ger1MerlicePlant1'
import Ger1Merlice2Plant1 from '../screens/Ger1Merlice2Plant1'
import Ger1MerliceTrussDetails from '../screens/Ger1MerliceTrussDetails'
import Ger1Merlice2TrussDetails from '../screens/Ger1Merlice2TrussDetails'
import Ger1MerlicePlantList from '../screens/Ger1MerlicePlantList'
import Har6Angelle from '../screens/Har6Angelle'
import Har6AngelleDataChecker1 from '../screens/Har6AngelleDataChecker1'
import Har6AngellePlant1 from '../screens/Har6AngellePlant1'
import Har6AngellePlantList from '../screens/Har6AngellePlantList'
import Har6AngelleRow from '../screens/Har6AngelleRow'
import Har6AngelleTrussDetails from '../screens/Har6AngelleTrussDetails'
import Ger4Row from '../screens/Ger4Row'
import Ger4Endeavour from '../screens/Ger4Endeavour'
import Ger4Endeavour2 from '../screens/Ger4Endeavour2'
import Ger4EndeavourPlant1 from '../screens/Ger4EndeavourPlant1'
import Ger4Endeavour2Plant1 from '../screens/Ger4Endeavour2Plant1'
import Ger4EndeavourTrussDetails from '../screens/Ger4EndeavourTrussDetails'
import Ger4Endeavour2TrussDetails from '../screens/Ger4Endeavour2TrussDetails'
import Ger4EndeavourPlantList from '../screens/Ger4EndeavourPlantList'
import Ger4EndeavourDataChecker1 from '../screens/Ger4EndeavourDataChecker1'
import Ger4EndeavourDataChecker2 from '../screens/Ger4EndeavourDataChecker2'
import Ger1MerliceDataChecker1 from '../screens/Ger1MerliceDataChecker1'
import Ger1MerliceDataChecker2 from '../screens/Ger1MerliceDataChecker2'
import Ger2Row from '../screens/Ger2Row'
import Ger2Merlice1 from '../screens/Ger2Merlice1'
import Ger2Merlice2 from '../screens/Ger2Merlice2'
import Ger2MerlicePlantList from '../screens/Ger2MerlicePlantList'
import Ger2MerlicePlant1 from '../screens/Ger2MerlicePlant1'
import Ger2MerlicePlant2 from '../screens/Ger2MerlicePlant2'
import Ger2MerliceDataChecker1 from '../screens/Ger2MerliceDataChecker1'
import Ger2MerliceDataChecker2 from '../screens/Ger2MerliceDataChecker2'
import Ger2MerliceTrussDetails1 from '../screens/Ger2MerliceTrussDetails1'
import Ger2MerliceTrussDetails2 from '../screens/Ger2MerliceTrussDetails2'
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
import Har1YeloPlantList from '../screens/Har1YeloPlantList'
import Har1AngellePlantList from '../screens/Har1AngellePlantList'
import Har1RedDelightPlantList from '../screens/Har1RedDelightPlantList'
import Har2AngellePlantList from '../screens/Har2AngellePlantList'
import Har3KmPlantList from '../screens/Har3KmPlantList'
import Har3BambelloPlantList from '../screens/Har3BambelloPlantList'
import Har4BambelloRow from '../screens/Har4BambelloRow'
import Har4Bambello from '../screens/Har4Bambello'
import Har4BambelloPlantList from '../screens/Har4BambelloPlantList'
import Har4BambelloPlant1 from '../screens/Har4BambelloPlant1'
import Har4BambelloDataChecker1 from '../screens/Har4BambelloDataChecker1'
import Har4BambelloTrussDetails1 from '../screens/Har4BambelloTrussDetails1'
import Har4KmRow from '../screens/Har4KmRow'
import Har4Km from '../screens/Har4Km'
import Har4KmPlant1 from '../screens/Har4KmPlant1'
import Har4KmDataChecker1 from '../screens/Har4KmDataChecker1'
import Har4KmTrussDetails1 from '../screens/Har4KmTrussDetails1'
import Har4KmPlantList from '../screens/Har4KmPlantList'
import Har4AnnasunRow from '../screens/Har4AnnasunRow'
import Har4Annasun from '../screens/Har4Annasun'
import Har4Avalantino from '../screens/Har4Avalantino'
import Har4AnnasunPlantList from '../screens/Har4AnnasunPlantList'
import Har4AnnasunDataChecker1 from '../screens/Har4AnnasunDataChecker1'
import Har4AvalantinoDataChecker from '../screens/Har4AvalantinoDataChecker'
import Har4AnnasunPlant1 from '../screens/Har4AnnasunPlant1'
import Har4AvalantinoPlant from '../screens/Har4AvalantinoPlant'
import Har4AnnasunTrussDetails1 from '../screens/Har4AnnasunTrussDetails1'
import Har4AvalantinoTrussDetails from '../screens/Har4AvalantinoTrussDetails'
import Har5AngelleRow from '../screens/Har5AngelleRow'
import Har4SunsetDelightRow from '../screens/Har4SunsetDelightRow'
import Har4SunsetDelight from '../screens/Har4SunsetDelight'
import Har4SunsetDelightPlant1 from '../screens/Har4SunsetDelightPlant1'
import Har4SunsetDelightDataChecker1 from '../screens/Har4SunsetDelightDataChecker1'
import Har4SunsetDelightPlantList1 from '../screens/Har4SunsetDelightPlantList1'
import Har4SunsetDelightTrussDetails1 from '../screens/Har4SunsetDelightTrussDetails1'
import Har5AngelleTrussDetails from '../screens/Har5AngelleTrussDetails'
import Har5ProvineRow from '../screens/Har5ProvineRow'
import Har5Provine from '../screens/Har5Provine'
import Har5Provine2 from '../screens/Har5Provine2'
import Har5ProvinePlantList from '../screens/Har5ProvinePlantList'
import Har5ProvineDataChecker1 from '../screens/Har5ProvineDataChecker1'
import Har5ProvineDataChecker2 from '../screens/Har5ProvineDataChecker2'
import Har5ProvinePlant1 from '../screens/Har5ProvinePlant1'
import Har5ProvinePlant2 from '../screens/Har5ProvinePlant2'
import Har5ProvineTrussDetails1 from '../screens/Har5ProvineTrussDetails1'
import Har5ProvineTrussDetails2 from '../screens/Har5ProvineTrussDetails2'
import Har4AvalantinoPlantList from '../screens/Har4AvalantinoPlantList'
import Har6ProvineRow from '../screens/Har6ProvineRow'
import Har6Provine from '../screens/Har6Provine'
import Har6Provine2 from '../screens/Har6Provine2'
import Har6Provine3 from '../screens/Har6Provine3'
import Har6ProvinePlantList from '../screens/Har6ProvinePlantList'
import Har6ProvineDataChecker1 from '../screens/Har6ProvineDataChecker1'
import Har6ProvineDataChecker2 from '../screens/Har6ProvineDataChecker2'
import Har6ProvineDataChecker3 from '../screens/Har6ProvineDataChecker3'
import Har6ProvinePlant1 from '../screens/Har6ProvinePlant1'
import Har6ProvinePlant2 from '../screens/Har6ProvinePlant2'
import Har6ProvinePlant3 from '../screens/Har6ProvinePlant3'
import Har6ProvineTrussDetails1 from '../screens/Har6ProvineTrussDetails1'
import Har6ProvineTrussDetails2 from '../screens/Har6ProvineTrussDetails2'
import Har6ProvineTrussDetails3 from '../screens/Har6ProvineTrussDetails3'
import Ger5Row from '../screens/Ger5Row'
import Ger5Angelle from '../screens/Ger5Angelle'
import Ger5Angelle2 from '../screens/Ger5Angelle2'
import Ger5Angelle3 from '../screens/Ger5Angelle3'
import Ger5Angelle4 from '../screens/Ger5Angelle4'
import Ger5AngellePlant1 from '../screens/Ger5AngellePlant1'
import Ger5AngellePlant2 from '../screens/Ger5AngellePlant2'
import Ger5AngellePlant3 from '../screens/Ger5AngellePlant3'
import Ger5AngellePlant4 from '../screens/Ger5AngellePlant4'
import Ger5AngelleTrussDetails1 from '../screens/Ger5AngelleTrussDetails1'
import Ger5AngelleTrussDetails2 from '../screens/Ger5AngelleTrussDetails2'
import Ger5AngelleTrussDetails3 from '../screens/Ger5AngelleTrussDetails3'
import Ger5AngelleTrussDetails4 from '../screens/Ger5AngelleTrussDetails4'
import Ger5AngellePlantList from '../screens/Ger5AngellePlantList'
import Ger5AngelleDataChecker1 from '../screens/Ger5AngelleDataChecker1'
import Ger5AngelleDataChecker2 from '../screens/Ger5AngelleDataChecker2'
import Ger5AngelleDataChecker3 from '../screens/Ger5AngelleDataChecker3'
import Ger5AngelleDataChecker4 from '../screens/Ger5AngelleDataChecker4'
import Ger3Row from '../screens/Ger3Row'
import Ger3Endeavour from '../screens/Ger3Endeavour'
import Ger3Endeavour2 from '../screens/Ger3Endeavour2'
import Ger3Endeavour2Plant1 from '../screens/Ger3Endeavour2Plant1'
import Ger3EndeavourPlant1 from '../screens/Ger3EndeavourPlant1'
import Ger3EndeavourTrussDetails from '../screens/Ger3EndeavourTrussDetails'
import Ger3Endeavour2TrussDetails from '../screens/Ger3Endeavour2TrussDetails'
import Ger3EndeavourPlantList from '../screens/Ger3EndeavourPlantList'
import Ger3EndeavourDataChecker1 from '../screens/Ger3EndeavourDataChecker1'
import Ger3EndeavourDataChecker2 from '../screens/Ger3EndeavourDataChecker2'
import RepHome from '../screens/RepHome'
import RepMerliceRow from '../screens/RepMerliceRow'
import RepAngelleRow from '../screens/RepAngelleRow'
import RepDuelleRow from '../screens/RepDuelleRow'
import RepKMRow from '../screens/RepKMRow'
import RepBambelloRow from '../screens/RepBambelloRow'
import RepMerlice from '../screens/RepMerlice'
import RepMerlice2 from '../screens/RepMerlice2'
import RepAngelle from '../screens/RepAngelle'
import RepAngelle2 from '../screens/RepAngelle2'
import RepDuelle from '../screens/RepDuelle'
import RepKM from '../screens/RepKM'
import RepBambello from '../screens/RepBambello'
import RepMerliceDataChecker1 from '../screens/RepMerliceDataChecker1'
import RepMerliceDataChecker2 from '../screens/RepMerliceDataChecker2'
import RepDuelleDataChecker1 from '../screens/RepDuelleDataChecker1'
import RepBambelloDataChecker1 from '../screens/RepBambelloDataChecker1'
import RepKMDataChecker1 from '../screens/RepKMDataChecker1'
import RepAngelleDataChecker1 from '../screens/RepAngelleDataChecker1'
import RepAngelleDataChecker2 from '../screens/RepAngelleDataChecker2'

import RepMerlicePlantList from '../screens/RepMerlicePlantList'
import RepAngellePlantList from '../screens/RepAngellePlantList'
import RepDuellePlantList from '../screens/RepDuellePlantList'
import RepKMPlantList from '../screens/RepKMPlantList'
import RepBambelloPlantList from '../screens/RepBambelloPlantList'
import RepBambelloPlant1 from '../screens/RepBambelloPlant1'
import RepAngellePlant1 from '../screens/RepAngellePlant1'
import RepAngellePlant2 from '../screens/RepAngellePlant2'
import RepKMPlant1 from '../screens/RepKMPlant1'
import RepMerliceTrussDetails1 from '../screens/RepMerliceTrussDetails1'
import RepMerliceTrussDetails2 from '../screens/RepMerliceTrussDetails2'
import RepDuelleTrussDetails1 from '../screens/RepDuelleTrussDetails1'
import RepKMTrussDetails1 from '../screens/RepKMTrussDetails1'
import RepBambelloTrussDetails1 from '../screens/RepBambelloTrussDetails1'
import RepAngelleTrussDetails1 from '../screens/RepAngelleTrussDetails1'
import RepAngelleTrussDetails2 from '../screens/RepAngelleTrussDetails2'


import RepMerlicePlant1 from '../screens/RepMerlicePlant1'
import RepMerlicePlant2 from '../screens/RepMerlicePlant2'
import RepDuellePlant1 from '../screens/RepDuellePlant1'
import Har1Annasum from '../screens/Har1Annasum'
import Har1AnnasumDataChecker from '../screens/Har1AnnasumDataChecker'
import Har1AnnasumPlant1 from '../screens/Har1AnnasumPlant1'
import Har1AnnasumPlantList from '../screens/Har1AnnasumPlantList'
import Har1AnnasumRow from '../screens/Har1AnnasumRow'
import Har1AnnasumTrussDetails from '../screens/Har1AnnasumTrussDetails'
import Har1HTL from '../screens/Har1HTL'
import Har1HTLDataChecker from '../screens/Har1HTLDataChecker'
import Har1HTLPlant1 from '../screens/Har1HTLPlant1'
import Har1HTLPlantList from '../screens/Har1HTLPlantList'
import Har1HTLRow from '../screens/Har1HTLRow'
import Har1HTLTrussDetails from '../screens/Har1HTLTrussDetails'
import Har1AvalantinoRow from '../screens/Har1AvalantinoRow'
import Har1Avalantino from '../screens/Har1Avalantino'
import Har1Avalantino2 from '../screens/Har1Avalantino2'
import Har1Avalantino3 from '../screens/Har1Avalantino3'
import Har1AvalantinoPlantList from '../screens/Har1AvalantinoPlantList'
import Har1AvalantinoDataChecker1 from '../screens/Har1AvalantinoDataChecker1'
import Har1AvalantinoDataChecker2 from '../screens/Har1AvalantinoDataChecker2'
import Har1AvalantinoDataChecker3 from '../screens/Har1AvalantinoDataChecker3'
import Har1AvalantinoPlant1 from '../screens/Har1AvalantinoPlant1'
import Har1AvalantinoPlant2 from '../screens/Har1AvalantinoPlant2'
import Har1AvalantinoPlant3 from '../screens/Har1AvalantinoPlant3'
import Har1AvalantinoTrussDetails1 from '../screens/Har1AvalantinoTrussDetails1'
import Har1AvalantinoTrussDetails2 from '../screens/Har1AvalantinoTrussDetails2'
import Har1AvalantinoTrussDetails3 from '../screens/Har1AvalantinoTrussDetails3'
import Har2Angelle3 from '../screens/Har2Angelle3'
import Har2AngelleDataChecker3 from '../screens/Har2AngelleDataChecker3'
import Har2AngelleTrussDetails3 from '../screens/Har2AngelleTrussDetails3'
import Har2AngellePlant3 from '../screens/Har2AngellePlant3'
import Har3Angelle from '../screens/Har3Angelle'
import Har3Angelle2 from '../screens/Har3Angelle2'
import Har3AngelleDataChecker1 from '../screens/Har3AngelleDataChecker1'
import Har3AngelleDataChecker2 from '../screens/Har3AngelleDataChecker2'
import Har3AngellePlant1 from '../screens/Har3AngellePlant1'
import Har3AngellePlant2 from '../screens/Har3AngellePlant2'
import Har3AngellePlantList from '../screens/Har3AngellePlantList'
import Har3AngelleRow from '../screens/Har3AngelleRow'
import Har3AngelleTrussDetails1 from '../screens/Har3AngelleTrussDetails1'
import Har3AngelleTrussDetails2 from '../screens/Har3AngelleTrussDetails2'
import Oha1Row from '../screens/Oha1Row'
import Oha2NRow from '../screens/Oha2NRow'
import Oha2SRow from '../screens/Oha2SRow'
import Oha1Merlice from '../screens/Oha1Merlice'
import Oha1Merlice2 from '../screens/Oha1Merlice2'
import Oha1MerlicePlantList from '../screens/Oha1MerlicePlantList'
import Oha1MerliceTrussDetails1 from '../screens/Oha1MerliceTrussDetails1'
import Oha1MerliceTrussDetails2 from '../screens/Oha1MerliceTrussDetails2'
import Oha1MerlicePlant1 from '../screens/Oha1MerlicePlant1'
import Oha1MerlicePlant2 from '../screens/Oha1MerlicePlant2'
import Oha1MerliceDataChecker1 from '../screens/Oha1MerliceDataChecker1'
import Oha1MerliceDataChecker2 from '../screens/Oha1MerliceDataChecker2'
import Oha2NMerlice from '../screens/Oha2NMerlice'
import Oha2NMerlice2 from '../screens/Oha2NMerlice2'
import Oha2NMerliceDataChecker1 from '../screens/Oha2NMerliceDataChecker1'
import Oha2NMerliceDataChecker2 from '../screens/Oha2NMerliceDataChecker2'
import Oha2NMerlicePlantList from '../screens/Oha2NMerlicePlantList'
import Oha2NMerlicePlant1 from '../screens/Oha2NMerlicePlant1'
import Oha2NMerlicePlant2 from '../screens/Oha2NMerlicePlant2'
import Oha2NMerliceTrussDetails1 from '../screens/Oha2NMerliceTrussDetails1'
import Oha2NMerliceTrussDetails2 from '../screens/Oha2NMerliceTrussDetails2'
import Oha2SMerlice from '../screens/Oha2SMerlice'
import Oha2SMerliceDataChecker1 from '../screens/Oha2SMerliceDataChecker1'
import Oha2SMerlicePlant1 from '../screens/Oha2SMerlicePlant1'
import Oha2SMerlicePlantList from '../screens/Oha2SMerlicePlantList'
import Oha2SMerliceTrussDetails1 from '../screens/Oha2SMerliceTrussDetails1'



const Stack = createStackNavigator();

function MainStackNavigator() {



  return (


    <NavigationContainer>



      <Stack.Navigator initialRouteName='SiteSelection'

        screenOptions={{
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

        <Stack.Screen name='GerHome' component={GerHome} options={({ navigation }) => ({
          headerLeft: () => null,
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


        <Stack.Screen name='OhaHome' component={OhaHome} options={({ navigation }) => ({
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

        <Stack.Screen name='Har1YeloPlantList' component={Har1YeloPlantList} options={({ navigation }) => ({
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

        <Stack.Screen name='Har1AngellePlantList' component={Har1AngellePlantList} options={({ navigation }) => ({
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

        <Stack.Screen name='Har2AngellePlantList' component={Har2AngellePlantList} options={({ navigation }) => ({
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

        <Stack.Screen name='Har1RedDelightPlantList' component={Har1RedDelightPlantList} options={({ navigation }) => ({
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


        <Stack.Screen name='Har3KmPlantList' component={Har3KmPlantList} options={({ navigation }) => ({
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

        <Stack.Screen name='Har3BambelloPlantList' component={Har3BambelloPlantList} options={({ navigation }) => ({
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
                onPress={() => navigation.navigate('Har1YeloPlantList')}>

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

        <Stack.Screen name='Har6AngelleRow' component={Har6AngelleRow} options={({ navigation }) => ({
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
          , title: 'HAR 6 Angelle'
        })} />

        <Stack.Screen name='Har6AngelleTrussDetails' component={Har6AngelleTrussDetails} options={({ navigation }) => ({
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
          , title: 'HAR 6 Angelle'
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
                onPress={() => navigation.navigate('Har1AngellePlantList')}>

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

        <Stack.Screen name='Har6Angelle' component={Har6Angelle} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Har6AngellePlantList')}>

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
          , title: 'HAR 6 Angelle'
        })} />

        <Stack.Screen name='Har1RedDelight' component={Har1RedDelight} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Har1RedDelightPlantList')}>

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
                onPress={() => navigation.navigate('Har1RedDelightPlantList')}>

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

        <Stack.Screen name='Har5AngelleTrussDetails' component={Har5AngelleTrussDetails} options={({ navigation }) => ({
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
          , title: 'HAR 5 Angelle'
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

        <Stack.Screen name='Har5AngelleDataChecker1' component={Har5AngelleDataChecker1} options={({ navigation }) => ({
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
          , title: 'HAR 5 Angelle'
        })} />

        <Stack.Screen name='Har6AngelleDataChecker1' component={Har6AngelleDataChecker1} options={({ navigation }) => ({
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
          , title: 'HAR 6 Angelle'
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
                onPress={() => navigation.navigate('Har2AngellePlantList')}>

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
                onPress={() => navigation.navigate('Har2AngellePlantList')}>

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

        <Stack.Screen name='Har6AngellePlant1' component={Har6AngellePlant1} options={({ navigation }) => ({
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
          , title: 'HAR 6 Angelle'
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
                onPress={() => navigation.navigate('Har3KmPlantList')}>

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
                onPress={() => navigation.navigate('Har3KmPlantList')}>

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
                onPress={() => navigation.navigate('Har3BambelloPlantList')}>

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

        <Stack.Screen name='Har5Angelle' component={Har5Angelle} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Har5AngellePlantList')}>

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
          , title: 'HAR 5 Angelle'
        })} />

        <Stack.Screen name='Har3Bambello2' component={Har3Bambello2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Har3BambelloPlantList')}>

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

        <Stack.Screen name='Har5AngellePlant1' component={Har5AngellePlant1} options={({ navigation }) => ({
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
          , title: 'HAR 5 Angelle'
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

        <Stack.Screen name='Har4BambelloRow' component={Har4BambelloRow} options={({ navigation }) => ({
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
          , title: 'HAR 4 Bambello'
        })} />

        <Stack.Screen name='Har4Bambello' component={Har4Bambello} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Har4BambelloPlantList')}>

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
          , title: 'HAR 4 Bambello'
        })} />

        <Stack.Screen name='Har4BambelloPlantList' component={Har4BambelloPlantList} options={({ navigation }) => ({
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
          , title: 'HAR 4 Bambello'
        })} />

        <Stack.Screen name='Har6AngellePlantList' component={Har6AngellePlantList} options={({ navigation }) => ({
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
          , title: 'HAR 6 Angelle'
        })} />

        <Stack.Screen name='Har5AngellePlantList' component={Har5AngellePlantList} options={({ navigation }) => ({
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
          , title: 'HAR 5 Angelle'
        })} />


        <Stack.Screen name='Har5AngelleRow' component={Har5AngelleRow} options={({ navigation }) => ({
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
          , title: 'HAR 5 Angelle'
        })} />

        <Stack.Screen name='Har4BambelloPlant1' component={Har4BambelloPlant1} options={({ navigation }) => ({
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
          , title: 'HAR 4 Bambello'
        })} />

        <Stack.Screen name='Har4BambelloDataChecker1' component={Har4BambelloDataChecker1} options={({ navigation }) => ({
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
          , title: 'HAR 4 Bambello'
        })} />

        <Stack.Screen name='Har4BambelloTrussDetails1' component={Har4BambelloTrussDetails1} options={({ navigation }) => ({
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
          , title: 'HAR 4 Bambello'
        })} />

        <Stack.Screen name='Har4Km' component={Har4Km} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Har4KmPlantList')}>

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
          , title: 'HAR 4 KM5512'
        })} />

        <Stack.Screen name='Har4KmPlant1' component={Har4KmPlant1} options={({ navigation }) => ({
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
          , title: 'HAR 4 KM5512'
        })} />

        <Stack.Screen name='Har4KmRow' component={Har4KmRow} options={({ navigation }) => ({
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
          , title: 'HAR 4 KM5512'
        })} />

        <Stack.Screen name='Har4KmDataChecker1' component={Har4KmDataChecker1} options={({ navigation }) => ({
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
          , title: 'HAR 4 KM5512'
        })} />

        <Stack.Screen name='Har4KmTrussDetails1' component={Har4KmTrussDetails1} options={({ navigation }) => ({
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
          , title: 'HAR 4 KM5512'
        })} />

        <Stack.Screen name='Har4KmPlantList' component={Har4KmPlantList} options={({ navigation }) => ({
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
          , title: 'HAR 4 KM5512'
        })} />


        <Stack.Screen name='Har4AnnasunRow' component={Har4AnnasunRow} options={({ navigation }) => ({
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
          , title: 'HAR 4 Annasun'
        })} />

        <Stack.Screen name='Har4Annasun' component={Har4Annasun} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Har4AnnasunPlantList')}>

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
          , title: 'HAR 4 Annasun'
        })} />

        <Stack.Screen name='Har4AvalantinoRow' component={Har4AvalantinoRow} options={({ navigation }) => ({
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
          , title: 'HAR 4 Avalantino'
        })} />



        <Stack.Screen name='Har4Avalantino' component={Har4Avalantino} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Har4AvalantinoPlantList')}>

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
          , title: 'HAR 4 Avalantino'
        })} />

        <Stack.Screen name='Har4AvalantinoPlantList' component={Har4AvalantinoPlantList} options={({ navigation }) => ({
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
          , title: 'HAR 4 Avalantino'
        })} />

        <Stack.Screen name='Har4AnnasunPlantList' component={Har4AnnasunPlantList} options={({ navigation }) => ({
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
          , title: 'HAR 4 Annasun'
        })} />


        <Stack.Screen name='Har4AnnasunDataChecker1' component={Har4AnnasunDataChecker1} options={({ navigation }) => ({
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
          , title: 'HAR 4 Annasun'
        })} />


        <Stack.Screen name='Har4AvalantinoDataChecker' component={Har4AvalantinoDataChecker} options={({ navigation }) => ({
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
          , title: 'HAR 4 Avalantino'
        })} />

        <Stack.Screen name='Har4AnnasunPlant1' component={Har4AnnasunPlant1} options={({ navigation }) => ({
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
          , title: 'HAR 4 Annasun'
        })} />

        <Stack.Screen name='Har4AvalantinoPlant' component={Har4AvalantinoPlant} options={({ navigation }) => ({
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
          , title: 'HAR 4 Avalantino'
        })} />

        <Stack.Screen name='Har4AnnasunTrussDetails1' component={Har4AnnasunTrussDetails1} options={({ navigation }) => ({
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
          , title: 'HAR 4 Annasun'
        })} />


        <Stack.Screen name='Har4AvalantinoTrussDetails' component={Har4AvalantinoTrussDetails} options={({ navigation }) => ({
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
          , title: 'HAR 4 Avalantino'
        })} />

        <Stack.Screen name='Ger1Row' component={Ger1Row} options={({ navigation }) => ({
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
          , title: 'GER 1 Merlice'
        })} />


        <Stack.Screen name='Ger1MerliceDataChecker2' component={Ger1MerliceDataChecker2} options={({ navigation }) => ({
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
          , title: 'GER 1 Merlice'
        })} />


        <Stack.Screen name='Ger1MerlicePlantList' component={Ger1MerlicePlantList} options={({ navigation }) => ({
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
          , title: 'GER 1 Merlice'
        })} />

        <Stack.Screen name='Ger1Merlice' component={Ger1Merlice} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Ger1MerlicePlantList')}>

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
          , title: 'GER 1 Merlice'
        })} />

        <Stack.Screen name='Ger1Merlice2' component={Ger1Merlice2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Ger1MerlicePlantList')}>

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
          , title: 'GER 1 Merlice'
        })} />

        <Stack.Screen name='Ger1MerlicePlant1' component={Ger1MerlicePlant1} options={({ navigation }) => ({
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
          , title: 'GER 1 Merlice'
        })} />

        <Stack.Screen name='Ger1MerliceDataChecker1' component={Ger1MerliceDataChecker1} options={({ navigation }) => ({
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
          , title: 'GER 1 Merlice'
        })} />



        <Stack.Screen name='Ger1Merlice2Plant1' component={Ger1Merlice2Plant1} options={({ navigation }) => ({
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
          , title: 'GER 1 Merlice'
        })} />

        <Stack.Screen name='Ger1MerliceTrussDetails' component={Ger1MerliceTrussDetails} options={({ navigation }) => ({
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
          , title: 'GER 1 Merlice'
        })} />

        <Stack.Screen name='Ger1Merlice2TrussDetails' component={Ger1Merlice2TrussDetails} options={({ navigation }) => ({
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
          , title: 'GER 1 Merlice'
        })} />

        <Stack.Screen name='Ger4Row' component={Ger4Row} options={({ navigation }) => ({
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
          , title: 'GER 4 Endeavour'
        })} />

        <Stack.Screen name='Ger4Endeavour' component={Ger4Endeavour} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Ger4EndeavourPlantList')}>

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
          , title: 'GER 4 Endeavour'
        })} />

        <Stack.Screen name='Ger4Endeavour2' component={Ger4Endeavour2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Ger4EndeavourPlantList')}>

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
          , title: 'GER 4 Endeavour'
        })} />

        <Stack.Screen name='Ger4EndeavourPlantList' component={Ger4EndeavourPlantList} options={({ navigation }) => ({
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
          , title: 'GER 4 Endeavour'
        })} />

        <Stack.Screen name='Ger4EndeavourPlant1' component={Ger4EndeavourPlant1} options={({ navigation }) => ({
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
          , title: 'GER 4 Endeavour'
        })} />

        <Stack.Screen name='Ger4Endeavour2Plant1' component={Ger4Endeavour2Plant1} options={({ navigation }) => ({
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
          , title: 'GER 4 Endeavour'
        })} />

        <Stack.Screen name='Ger4EndeavourTrussDetails' component={Ger4EndeavourTrussDetails} options={({ navigation }) => ({
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
          , title: 'GER 4 Endeavour'
        })} />

        <Stack.Screen name='Ger4Endeavour2TrussDetails' component={Ger4Endeavour2TrussDetails} options={({ navigation }) => ({
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
          , title: 'GER 4 Endeavour'
        })} />

        <Stack.Screen name='Ger4EndeavourDataChecker2' component={Ger4EndeavourDataChecker2} options={({ navigation }) => ({
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
          , title: 'GER 4 Endeavour'
        })} />

        <Stack.Screen name='Ger4EndeavourDataChecker1' component={Ger4EndeavourDataChecker1} options={({ navigation }) => ({
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
          , title: 'GER 4 Endeavour'
        })} />

        <Stack.Screen name='Ger2Row' component={Ger2Row} options={({ navigation }) => ({
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
          , title: 'GER 2 Merlice'
        })} />

        <Stack.Screen name='Ger2Merlice1' component={Ger2Merlice1} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Ger2MerlicePlantList')}>

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
          , title: 'GER 2 Merlice'
        })} />

        <Stack.Screen name='Ger2Merlice2' component={Ger2Merlice2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Ger2MerlicePlantList')}>

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
          , title: 'GER 2 Merlice'
        })} />

        <Stack.Screen name='Ger2MerlicePlantList' component={Ger2MerlicePlantList} options={({ navigation }) => ({
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
          , title: 'GER 2 Merlice'
        })} />

        <Stack.Screen name='Ger2MerlicePlant1' component={Ger2MerlicePlant1} options={({ navigation }) => ({
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
          , title: 'GER 2 Merlice'
        })} />

        <Stack.Screen name='Ger2MerlicePlant2' component={Ger2MerlicePlant2} options={({ navigation }) => ({
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
          , title: 'GER 2 Merlice'
        })} />

        <Stack.Screen name='Ger2MerliceDataChecker1' component={Ger2MerliceDataChecker1} options={({ navigation }) => ({
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
          , title: 'GER 2 Merlice'
        })} />

        <Stack.Screen name='Ger2MerliceDataChecker2' component={Ger2MerliceDataChecker2} options={({ navigation }) => ({
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
          , title: 'GER 2 Merlice'
        })} />

        <Stack.Screen name='Ger2MerliceTrussDetails1' component={Ger2MerliceTrussDetails1} options={({ navigation }) => ({
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
          , title: 'GER 2 Merlice'
        })} />

        <Stack.Screen name='Ger2MerliceTrussDetails2' component={Ger2MerliceTrussDetails2} options={({ navigation }) => ({
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
          , title: 'GER 2 Merlice'
        })} />

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


        <Stack.Screen name='Har4SunsetDelightRow' component={Har4SunsetDelightRow} options={({ navigation }) => ({
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
          , title: 'HAR 4 Sunset Delight'
        })} />

        <Stack.Screen name='Har4SunsetDelightDataChecker1' component={Har4SunsetDelightDataChecker1} options={({ navigation }) => ({
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
          , title: 'HAR 4 Sunset Delight'
        })} />

        <Stack.Screen name='Har4SunsetDelightTrussDetails1' component={Har4SunsetDelightTrussDetails1} options={({ navigation }) => ({
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
          , title: 'HAR 4 Sunset Delight'
        })} />

        <Stack.Screen name='Har4SunsetDelightPlant1' component={Har4SunsetDelightPlant1} options={({ navigation }) => ({
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
          , title: 'HAR 4 Sunset Delight'
        })} />

        <Stack.Screen name='Har4SunsetDelightPlantList1' component={Har4SunsetDelightPlantList1} options={({ navigation }) => ({
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
          , title: 'HAR 4 Sunset Delight'
        })} />

        <Stack.Screen name='Har4SunsetDelight' component={Har4SunsetDelight} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Har4SunsetDelightPlantList1')}>

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
          , title: 'HAR 4 Sunset Delight'
        })} />

        <Stack.Screen name='Har5Provine' component={Har5Provine} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Har5ProvinePlantList')}>

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
          , title: 'HAR 5 Provine'
        })} />

        <Stack.Screen name='Har5Provine2' component={Har5Provine2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Har5ProvinePlantList')}>

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
          , title: 'HAR 5 Provine'
        })} />

        <Stack.Screen name='Har5ProvinePlant1' component={Har5ProvinePlant1} options={({ navigation }) => ({
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
          , title: 'HAR 5 Provine'
        })} />

        <Stack.Screen name='Har5ProvinePlant2' component={Har5ProvinePlant2} options={({ navigation }) => ({
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
          , title: 'HAR 5 Provine'
        })} />

        <Stack.Screen name='Har5ProvineRow' component={Har5ProvineRow} options={({ navigation }) => ({
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
          , title: 'HAR 5 Provine'
        })} />

        <Stack.Screen name='Har5ProvineDataChecker1' component={Har5ProvineDataChecker1} options={({ navigation }) => ({
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
          , title: 'HAR 5 Provine'
        })} />

        <Stack.Screen name='Har5ProvineDataChecker2' component={Har5ProvineDataChecker2} options={({ navigation }) => ({
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
          , title: 'HAR 5 Provine'
        })} />

        <Stack.Screen name='Har5ProvineTrussDetails1' component={Har5ProvineTrussDetails1} options={({ navigation }) => ({
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
          , title: 'HAR 5 Provine'
        })} />

        <Stack.Screen name='Har5ProvineTrussDetails2' component={Har5ProvineTrussDetails2} options={({ navigation }) => ({
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
          , title: 'HAR 5 Provine'
        })} />

        <Stack.Screen name='Har5ProvinePlantList' component={Har5ProvinePlantList} options={({ navigation }) => ({
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
          , title: 'HAR 5 Provine'
        })} />

        <Stack.Screen name='Har6Provine' component={Har6Provine} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Har6ProvinePlantList')}>

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
          , title: 'HAR 6 Provine'
        })} />

        <Stack.Screen name='Har6Provine2' component={Har6Provine2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Har6ProvinePlantList')}>

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
          , title: 'HAR 6 Provine'
        })} />

        <Stack.Screen name='Har6Provine3' component={Har6Provine3} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Har6ProvinePlantList')}>

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
          , title: 'HAR 6 Provine'
        })} />

        <Stack.Screen name='Har6ProvineRow' component={Har6ProvineRow} options={({ navigation }) => ({
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
          , title: 'HAR 6 Provine'
        })} />

        <Stack.Screen name='Har6ProvinePlantList' component={Har6ProvinePlantList} options={({ navigation }) => ({
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
          , title: 'HAR 6 Provine'
        })} />

        <Stack.Screen name='Har6ProvineDataChecker1' component={Har6ProvineDataChecker1} options={({ navigation }) => ({
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
          , title: 'HAR 6 Provine'
        })} />

        <Stack.Screen name='Har6ProvineDataChecker2' component={Har6ProvineDataChecker2} options={({ navigation }) => ({
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
          , title: 'HAR 6 Provine'
        })} />

        <Stack.Screen name='Har6ProvineDataChecker3' component={Har6ProvineDataChecker3} options={({ navigation }) => ({
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
          , title: 'HAR 6 Provine'
        })} />

        <Stack.Screen name='Har6ProvinePlant1' component={Har6ProvinePlant1} options={({ navigation }) => ({
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
          , title: 'HAR 6 Provine'
        })} />

        <Stack.Screen name='Har6ProvinePlant3' component={Har6ProvinePlant3} options={({ navigation }) => ({
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
          , title: 'HAR 6 Provine'
        })} />

        <Stack.Screen name='Har6ProvinePlant2' component={Har6ProvinePlant2} options={({ navigation }) => ({
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
          , title: 'HAR 6 Provine'
        })} />

        <Stack.Screen name='Har6ProvineTrussDetails1' component={Har6ProvineTrussDetails1} options={({ navigation }) => ({
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
          , title: 'HAR 6 Provine'
        })} />

        <Stack.Screen name='Har6ProvineTrussDetails2' component={Har6ProvineTrussDetails2} options={({ navigation }) => ({
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
          , title: 'HAR 6 Provine'
        })} />

        <Stack.Screen name='Har6ProvineTrussDetails3' component={Har6ProvineTrussDetails3} options={({ navigation }) => ({
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
          , title: 'HAR 6 Provine'
        })} />

        <Stack.Screen name='Ger5Angelle' component={Ger5Angelle} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Ger5AngellePlantList')}>

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
          , title: 'GER 5 Angelle'
        })} />

        <Stack.Screen name='Ger5Angelle2' component={Ger5Angelle2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Ger5AngellePlantList')}>

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
          , title: 'GER 5 Angelle'
        })} />

        <Stack.Screen name='Ger5Angelle3' component={Ger5Angelle3} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Ger5AngellePlantList')}>

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
          , title: 'GER 5 Angelle'
        })} />

        <Stack.Screen name='Ger5Angelle4' component={Ger5Angelle4} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Ger5AngellePlantList')}>

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
          , title: 'GER 5 Angelle'
        })} />




        <Stack.Screen name='Ger5AngellePlantList' component={Ger5AngellePlantList} options={({ navigation }) => ({
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
          , title: 'GER 5 Angelle'
        })} />

        <Stack.Screen name='Ger5AngellePlant2' component={Ger5AngellePlant2} options={({ navigation }) => ({
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
          , title: 'GER 5 Angelle'
        })} />

        <Stack.Screen name='Ger5AngellePlant3' component={Ger5AngellePlant3} options={({ navigation }) => ({
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
          , title: 'GER 5 Angelle'
        })} />

        <Stack.Screen name='Ger5AngellePlant4' component={Ger5AngellePlant4} options={({ navigation }) => ({
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
          , title: 'GER 5 Angelle'
        })} />

        <Stack.Screen name='Ger5AngellePlant1' component={Ger5AngellePlant1} options={({ navigation }) => ({
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
          , title: 'GER 5 Angelle'
        })} />

        <Stack.Screen name='Ger5Row' component={Ger5Row} options={({ navigation }) => ({
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
          , title: 'GER 5 Angelle'
        })} />

        <Stack.Screen name='Ger5AngelleDataChecker1' component={Ger5AngelleDataChecker1} options={({ navigation }) => ({
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
          , title: 'GER 5 Angelle'
        })} />

        <Stack.Screen name='Ger5AngelleDataChecker2' component={Ger5AngelleDataChecker2} options={({ navigation }) => ({
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
          , title: 'GER 5 Angelle'
        })} />

        <Stack.Screen name='Ger5AngelleDataChecker3' component={Ger5AngelleDataChecker3} options={({ navigation }) => ({
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
          , title: 'GER 5 Angelle'
        })} />

        <Stack.Screen name='Ger5AngelleDataChecker4' component={Ger5AngelleDataChecker4} options={({ navigation }) => ({
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
          , title: 'GER 5 Angelle'
        })} />

        <Stack.Screen name='Ger5AngelleTrussDetails1' component={Ger5AngelleTrussDetails1} options={({ navigation }) => ({
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
          , title: 'GER 5 Angelle'
        })} />

        <Stack.Screen name='Ger5AngelleTrussDetails2' component={Ger5AngelleTrussDetails2} options={({ navigation }) => ({
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
          , title: 'GER 5 Angelle'
        })} />

        <Stack.Screen name='Ger5AngelleTrussDetails3' component={Ger5AngelleTrussDetails3} options={({ navigation }) => ({
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
          , title: 'GER 5 Angelle'
        })} />

        <Stack.Screen name='Ger5AngelleTrussDetails4' component={Ger5AngelleTrussDetails4} options={({ navigation }) => ({
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
          , title: 'GER 5 Angelle'
        })} />

        <Stack.Screen name='Ger3Endeavour' component={Ger3Endeavour} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Ger3EndeavourPlantList')}>

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
          , title: 'GER 3 Endavour'
        })} />

        <Stack.Screen name='Ger3Endeavour2' component={Ger3Endeavour2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Ger3EndeavourPlantList')}>

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
          , title: 'GER 3 Endeavour'
        })} />

        <Stack.Screen name='Ger3EndeavourPlantList' component={Ger3EndeavourPlantList} options={({ navigation }) => ({
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
          , title: 'GER 3 Endeavour'
        })} />

        <Stack.Screen name='Ger3Endeavour2Plant1' component={Ger3Endeavour2Plant1} options={({ navigation }) => ({
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
          , title: 'GER 3 Endeavour'
        })} />

        <Stack.Screen name='Ger3EndeavourPlant1' component={Ger3EndeavourPlant1} options={({ navigation }) => ({
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
          , title: 'GER 3 Endeavour'
        })} />

        <Stack.Screen name='Ger3Row' component={Ger3Row} options={({ navigation }) => ({
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
          , title: 'GER 3 Endeavour'
        })} />

        <Stack.Screen name='Ger3EndeavourDataChecker1' component={Ger3EndeavourDataChecker1} options={({ navigation }) => ({
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
          , title: 'GER 3 Endeavour'
        })} />

        <Stack.Screen name='Ger3EndeavourDataChecker2' component={Ger3EndeavourDataChecker2} options={({ navigation }) => ({
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
          , title: 'GER 3 Endeavour'
        })} />

        <Stack.Screen name='Ger3EndeavourTrussDetails' component={Ger3EndeavourTrussDetails} options={({ navigation }) => ({
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
          , title: 'GER 3 Endeavour'
        })} />

        <Stack.Screen name='Ger3Endeavour2TrussDetails' component={Ger3Endeavour2TrussDetails} options={({ navigation }) => ({
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
          , title: 'GER 3 Endeavour'
        })} />

        <Stack.Screen name='RepHome' component={RepHome} options={({ navigation }) => ({
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

        <Stack.Screen name='RepMerliceRow' component={RepMerliceRow} options={({ navigation }) => ({
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
          , title: 'REP Merlice'
        })} />

        <Stack.Screen name='RepAngelleRow' component={RepAngelleRow} options={({ navigation }) => ({
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
          , title: 'REP Angelle'
        })} />

        <Stack.Screen name='RepDuelleRow' component={RepDuelleRow} options={({ navigation }) => ({
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
          , title: 'REP Duelle'
        })} />

        <Stack.Screen name='RepKMRow' component={RepKMRow} options={({ navigation }) => ({
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
          , title: 'REP KM5512'
        })} />

        <Stack.Screen name='RepBambelloRow' component={RepBambelloRow} options={({ navigation }) => ({
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
          , title: 'REP Bambello'
        })} />

        <Stack.Screen name='RepMerlice' component={RepMerlice} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('RepMerlicePlantList')}>

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
          , title: 'REP Merlice'
        })} />

        <Stack.Screen name='RepMerlice2' component={RepMerlice2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('RepMerlicePlantList')}>

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
          , title: 'REP Merlice'
        })} />

        <Stack.Screen name='RepAngelle' component={RepAngelle} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('RepAngellePlantList')}>

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
          , title: 'REP Angelle'
        })} />

        <Stack.Screen name='RepAngelle2' component={RepAngelle2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('RepAngellePlantList')}>

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
          , title: 'REP Angelle'
        })} />

        <Stack.Screen name='RepDuelle' component={RepDuelle} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('RepDuellePlantList')}>

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
          , title: 'REP Duelle'
        })} />

        <Stack.Screen name='RepKM' component={RepKM} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('RepKMPlantList')}>

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
          , title: 'REP KM5512'
        })} />

        <Stack.Screen name='RepBambello' component={RepBambello} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('RepBambelloPlantList')}>

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
          , title: 'REP Bambello'
        })} />

        <Stack.Screen name='RepMerliceDataChecker1' component={RepMerliceDataChecker1} options={({ navigation }) => ({
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
          , title: 'REP Merlice'
        })} />

        <Stack.Screen name='RepMerliceDataChecker2' component={RepMerliceDataChecker2} options={({ navigation }) => ({
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
          , title: 'REP Merlice'
        })} />


        <Stack.Screen name='RepDuelleDataChecker1' component={RepDuelleDataChecker1} options={({ navigation }) => ({
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
          , title: 'REP Duelle'
        })} />

<Stack.Screen name='RepAngelleDataChecker1' component={RepAngelleDataChecker1} options={({ navigation }) => ({
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
          , title: 'REP Angelle'
        })} />

<Stack.Screen name='RepAngelleDataChecker2' component={RepAngelleDataChecker2} options={({ navigation }) => ({
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
          , title: 'REP Angelle'
        })} />

<Stack.Screen name='RepBambelloDataChecker1' component={RepBambelloDataChecker1} options={({ navigation }) => ({
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
          , title: 'REP Bambello'
        })} />

<Stack.Screen name='RepKMDataChecker1' component={RepKMDataChecker1} options={({ navigation }) => ({
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
          , title: 'REP KM5512'
        })} />



        <Stack.Screen name='RepMerlicePlant1' component={RepMerlicePlant1} options={({ navigation }) => ({
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
          , title: 'REP Merlice'
        })} />


        <Stack.Screen name='RepKMPlant1' component={RepKMPlant1} options={({ navigation }) => ({
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
          , title: 'REP KM5512'
        })} />

        <Stack.Screen name='RepMerlicePlant2' component={RepMerlicePlant2} options={({ navigation }) => ({
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
          , title: 'REP Merlice'
        })} />

        <Stack.Screen name='RepDuellePlant1' component={RepDuellePlant1} options={({ navigation }) => ({
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
          , title: 'REP Duelle'
        })} />

        <Stack.Screen name='RepAngellePlant1' component={RepAngellePlant1} options={({ navigation }) => ({
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
          , title: 'REP Angelle'
        })} />

        <Stack.Screen name='RepAngellePlant2' component={RepAngellePlant2} options={({ navigation }) => ({
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
          , title: 'REP Angelle'
        })} />

        <Stack.Screen name='RepBambelloPlant1' component={RepBambelloPlant1} options={({ navigation }) => ({
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
          , title: 'REP Bambello'
        })} />

        <Stack.Screen name='RepMerlicePlantList' component={RepMerlicePlantList} options={({ navigation }) => ({
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
          , title: 'REP Merlice'
        })} />

        <Stack.Screen name='RepAngellePlantList' component={RepAngellePlantList} options={({ navigation }) => ({
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
          , title: 'REP Angelle'
        })} />

        <Stack.Screen name='RepDuellePlantList' component={RepDuellePlantList} options={({ navigation }) => ({
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
          , title: 'REP Duelle'
        })} />

        <Stack.Screen name='RepKMPlantList' component={RepKMPlantList} options={({ navigation }) => ({
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
          , title: 'REP KM5512'
        })} />

        <Stack.Screen name='RepBambelloPlantList' component={RepBambelloPlantList} options={({ navigation }) => ({
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
          , title: 'REP Bambello'
        })} />

        <Stack.Screen name='RepMerliceTrussDetails1' component={RepMerliceTrussDetails1} options={({ navigation }) => ({
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
          , title: 'REP Merlice'
        })} />

        <Stack.Screen name='RepMerliceTrussDetails2' component={RepMerliceTrussDetails2} options={({ navigation }) => ({
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
          , title: 'REP Merlice'
        })} />

        <Stack.Screen name='RepDuelleTrussDetails1' component={RepDuelleTrussDetails1} options={({ navigation }) => ({
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
          , title: 'REP Duelle'
        })} />

<Stack.Screen name='RepBambelloTrussDetails1' component={RepBambelloTrussDetails1} options={({ navigation }) => ({
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
          , title: 'REP Bambello'
        })} />

<Stack.Screen name='RepKMTrussDetails1' component={RepKMTrussDetails1} options={({ navigation }) => ({
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
          , title: 'REP KM5512'
        })} />

<Stack.Screen name='RepAngelleTrussDetails1' component={RepAngelleTrussDetails1} options={({ navigation }) => ({
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
          , title: 'REP Angelle'
        })} />

<Stack.Screen name='RepAngelleTrussDetails2' component={RepAngelleTrussDetails2} options={({ navigation }) => ({
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
          , title: 'REP Angelle'
        })} />



        <Stack.Screen name='Har1AnnasumRow' component={Har1AnnasumRow} options={({ navigation }) => ({
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
          , title: 'HAR 1 Annasun'
        })} />


        <Stack.Screen name='Har1Annasum' component={Har1Annasum} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Har1AnnasumPlantList')}>

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
          , title: 'HAR 1 Annasun'
        })} />

        <Stack.Screen name='Har1AnnasumDataChecker' component={Har1AnnasumDataChecker} options={({ navigation }) => ({
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
          , title: 'HAR 1 Annasun'
        })} />

        <Stack.Screen name='Har1AnnasumPlant1' component={Har1AnnasumPlant1} options={({ navigation }) => ({
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
          , title: 'HAR 1 Annasun'
        })} />

        <Stack.Screen name='Har1AnnasumPlantList' component={Har1AnnasumPlantList} options={({ navigation }) => ({
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
          , title: 'HAR 1 Annasun'
        })} />

        <Stack.Screen name='Har1AnnasumTrussDetails' component={Har1AnnasumTrussDetails} options={({ navigation }) => ({
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
          , title: 'HAR 1 Annasun'
        })} />


        <Stack.Screen name='Har1HTLRow' component={Har1HTLRow} options={({ navigation }) => ({
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
          , title: 'HAR 1 HTL1606242'
        })} />


        <Stack.Screen name='Har1HTL' component={Har1HTL} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Har1HTLPlantList')}>

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
          , title: 'HAR 1 HTL1606242'
        })} />


        <Stack.Screen name='Har1HTLDataChecker' component={Har1HTLDataChecker} options={({ navigation }) => ({
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
          , title: 'HAR 1 HTL1606242'
        })} />

        <Stack.Screen name='Har1HTLPlant1' component={Har1HTLPlant1} options={({ navigation }) => ({
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
          , title: 'HAR 1 HTL1606242'
        })} />


        <Stack.Screen name='Har1HTLPlantList' component={Har1HTLPlantList} options={({ navigation }) => ({
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
          , title: 'HAR 1 HTL1606242'
        })} />

        <Stack.Screen name='Har1HTLTrussDetails' component={Har1HTLTrussDetails} options={({ navigation }) => ({
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
          , title: 'HAR 1 HTL1606242'
        })} />


        <Stack.Screen name='Har1AvalantinoRow' component={Har1AvalantinoRow} options={({ navigation }) => ({
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
          , title: 'HAR 1 Avalantino'
        })} />


        <Stack.Screen name='Har1Avalantino' component={Har1Avalantino} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Har1AvalantinoPlantList')}>

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
          , title: 'HAR 1 Avalantino'
        })} />

        <Stack.Screen name='Har1Avalantino2' component={Har1Avalantino2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Har1AvalantinoPlantList')}>

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
          , title: 'HAR 1 Avalantino'
        })} />

        <Stack.Screen name='Har1Avalantino3' component={Har1Avalantino3} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Har1AvalantinoPlantList')}>

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
          , title: 'HAR 1 Avalantino'
        })} />


        <Stack.Screen name='Har1AvalantinoPlantList' component={Har1AvalantinoPlantList} options={({ navigation }) => ({
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
          , title: 'HAR 1 Avalantino'
        })} />

        <Stack.Screen name='Har3AngellePlantList' component={Har3AngellePlantList} options={({ navigation }) => ({
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
          , title: 'HAR 3 Angelle'
        })} />

        <Stack.Screen name='Har1AvalantinoDataChecker1' component={Har1AvalantinoDataChecker1} options={({ navigation }) => ({
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
          , title: 'HAR 1 Avalantino'
        })} />

        <Stack.Screen name='Har1AvalantinoDataChecker2' component={Har1AvalantinoDataChecker2} options={({ navigation }) => ({
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
          , title: 'HAR 1 Avalantino'
        })} />

        <Stack.Screen name='Har1AvalantinoDataChecker3' component={Har1AvalantinoDataChecker3} options={({ navigation }) => ({
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
          , title: 'HAR 1 Avalantino'
        })} />

        <Stack.Screen name='Har1AvalantinoPlant1' component={Har1AvalantinoPlant1} options={({ navigation }) => ({
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
          , title: 'HAR 1 Avalantino'
        })} />

        <Stack.Screen name='Har1AvalantinoPlant2' component={Har1AvalantinoPlant2} options={({ navigation }) => ({
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
          , title: 'HAR 1 Avalantino'
        })} />

        <Stack.Screen name='Har1AvalantinoPlant3' component={Har1AvalantinoPlant3} options={({ navigation }) => ({
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
          , title: 'HAR 1 Avalantino'
        })} />


        <Stack.Screen name='Har1AvalantinoTrussDetails1' component={Har1AvalantinoTrussDetails1} options={({ navigation }) => ({
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
          , title: 'HAR 1 Avalantino'
        })} />

        <Stack.Screen name='Har1AvalantinoTrussDetails2' component={Har1AvalantinoTrussDetails2} options={({ navigation }) => ({
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
          , title: 'HAR 1 Avalantino'
        })} />


        <Stack.Screen name='Har1AvalantinoTrussDetails3' component={Har1AvalantinoTrussDetails3} options={({ navigation }) => ({
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
          , title: 'HAR 1 Avalantino'
        })} />

        <Stack.Screen name='Har2Angelle3' component={Har2Angelle3} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Har2AngellePlantList')}>

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

        <Stack.Screen name='Har2AngelleDataChecker3' component={Har2AngelleDataChecker3} options={({ navigation }) => ({
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

        <Stack.Screen name='Har2AngelleTrussDetails3' component={Har2AngelleTrussDetails3} options={({ navigation }) => ({
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

        <Stack.Screen name='Har2AngellePlant3' component={Har2AngellePlant3} options={({ navigation }) => ({
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

        <Stack.Screen name='Har3AngelleDataChecker1' component={Har3AngelleDataChecker1} options={({ navigation }) => ({
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
          , title: 'HAR 3 Angelle'
        })} />

        <Stack.Screen name='Har3AngelleDataChecker2' component={Har3AngelleDataChecker2} options={({ navigation }) => ({
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
          , title: 'HAR 3 Angelle'
        })} />


        <Stack.Screen name='Har3Angelle' component={Har3Angelle} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Har3AngellePlantList')}>

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
          , title: 'HAR 3 Angelle'
        })} />

        <Stack.Screen name='Har3Angelle2' component={Har3Angelle2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Har3AngellePlantList')}>

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
          , title: 'HAR 3 Angelle'
        })} />

        <Stack.Screen name='Har3AngellePlant1' component={Har3AngellePlant1} options={({ navigation }) => ({
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
          , title: 'HAR 3 Angelle'
        })} />

        <Stack.Screen name='Har3AngellePlant2' component={Har3AngellePlant2} options={({ navigation }) => ({
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
          , title: 'HAR 3 Angelle'
        })} />

        <Stack.Screen name='Har3AngelleRow' component={Har3AngelleRow} options={({ navigation }) => ({
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
          , title: 'HAR 3 Angelle'
        })} />

        <Stack.Screen name='Har3AngelleTrussDetails1' component={Har3AngelleTrussDetails1} options={({ navigation }) => ({
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
          , title: 'HAR 3 Angelle'
        })} />

        <Stack.Screen name='Har3AngelleTrussDetails2' component={Har3AngelleTrussDetails2} options={({ navigation }) => ({
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
          , title: 'HAR 3 Angelle'
        })} />

        <Stack.Screen name='Oha1Row' component={Oha1Row} options={({ navigation }) => ({
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
          , title: 'OHA 1 Merlice'
        })} />

        <Stack.Screen name='Oha2NRow' component={Oha2NRow} options={({ navigation }) => ({
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
          , title: 'OHA 2N Merlice'
        })} />

        <Stack.Screen name='Oha2SRow' component={Oha2SRow} options={({ navigation }) => ({
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
          , title: 'OHA 2S Merlice'
        })} />

        <Stack.Screen name='Oha1Merlice' component={Oha1Merlice} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Oha1MerlicePlantList')}>

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
          , title: 'OHA 1 Merlice'
        })} />

        <Stack.Screen name='Oha1Merlice2' component={Oha1Merlice2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Oha1MerlicePlantList')}>

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
          , title: 'OHA 1 Merlice'
        })} />

        <Stack.Screen name='Oha1MerlicePlantList' component={Oha1MerlicePlantList} options={({ navigation }) => ({
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
          , title: 'OHA 1 Merlice'
        })} />

        <Stack.Screen name='Oha1MerliceTrussDetails1' component={Oha1MerliceTrussDetails1} options={({ navigation }) => ({
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
          , title: 'OHA 1 Merlice'
        })} />

        <Stack.Screen name='Oha1MerliceTrussDetails2' component={Oha1MerliceTrussDetails2} options={({ navigation }) => ({
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
          , title: 'OHA 1 Merlice'
        })} />

        <Stack.Screen name='Oha1MerlicePlant1' component={Oha1MerlicePlant1} options={({ navigation }) => ({
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
          , title: 'OHA 1 Merlice'
        })} />

        <Stack.Screen name='Oha1MerlicePlant2' component={Oha1MerlicePlant2} options={({ navigation }) => ({
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
          , title: 'OHA 1 Merlice'
        })} />

        <Stack.Screen name='Oha1MerliceDataChecker1' component={Oha1MerliceDataChecker1} options={({ navigation }) => ({
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
          , title: 'OHA 1 Merlice'
        })} />

        <Stack.Screen name='Oha1MerliceDataChecker2' component={Oha1MerliceDataChecker2} options={({ navigation }) => ({
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
          , title: 'OHA 1 Merlice'
        })} />

        <Stack.Screen name='Oha2NMerlice' component={Oha2NMerlice} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Oha2NMerlicePlantList')}>

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
          , title: 'OHA 2N Merlice'
        })} />

        <Stack.Screen name='Oha2NMerlice2' component={Oha2NMerlice2} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Oha2NMerlicePlantList')}>

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
          , title: 'OHA 2N Merlice'
        })} />

        <Stack.Screen name='Oha2NMerlicePlantList' component={Oha2NMerlicePlantList} options={({ navigation }) => ({
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
          , title: 'OHA 2N Merlice'
        })} />

        <Stack.Screen name='Oha2NMerliceDataChecker1' component={Oha2NMerliceDataChecker1} options={({ navigation }) => ({
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
          , title: 'OHA 2N Merlice'
        })} />

        <Stack.Screen name='Oha2NMerliceDataChecker2' component={Oha2NMerliceDataChecker2} options={({ navigation }) => ({
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
          , title: 'OHA 2N Merlice'
        })} />

        <Stack.Screen name='Oha2NMerlicePlant1' component={Oha2NMerlicePlant1} options={({ navigation }) => ({
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
          , title: 'OHA 2N Merlice'
        })} />

        <Stack.Screen name='Oha2NMerlicePlant2' component={Oha2NMerlicePlant2} options={({ navigation }) => ({
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
          , title: 'OHA 2N Merlice'
        })} />

        <Stack.Screen name='Oha2NMerliceTrussDetails1' component={Oha2NMerliceTrussDetails1} options={({ navigation }) => ({
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
          , title: 'OHA 2N Merlice'
        })} />

        <Stack.Screen name='Oha2NMerliceTrussDetails2' component={Oha2NMerliceTrussDetails2} options={({ navigation }) => ({
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
          , title: 'OHA 2N Merlice'
        })} />

        <Stack.Screen name='Oha2SMerlice' component={Oha2SMerlice} options={({ navigation }) => ({
          headerRight: () =>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle2}
                onPress={() => navigation.navigate('Oha2SMerlicePlantList')}>

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
          , title: 'OHA 2S Merlice'
        })} />

        <Stack.Screen name='Oha2SMerliceDataChecker1' component={Oha2SMerliceDataChecker1} options={({ navigation }) => ({
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
          , title: 'OHA 2S Merlice'
        })} />

        <Stack.Screen name='Oha2SMerlicePlant1' component={Oha2SMerlicePlant1} options={({ navigation }) => ({
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
          , title: 'OHA 2S Merlice'
        })} />

        <Stack.Screen name='Oha2SMerlicePlantList' component={Oha2SMerlicePlantList} options={({ navigation }) => ({
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
          , title: 'OHA 2S Merlice'
        })} />

        <Stack.Screen name='Oha2SMerliceTrussDetails1' component={Oha2SMerliceTrussDetails1} options={({ navigation }) => ({
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
          , title: 'OHA 2S Merlice'
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
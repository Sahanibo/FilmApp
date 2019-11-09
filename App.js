/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Search from './Component/Search'
import Menu from './Component/Menu'

import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const RootStack = createStackNavigator(
  {
    MenuScreen : Menu,
    SearchScreen: Search
  },
  {
    initialRouteName:'MenuScreen'
  }
);
const Appcontainer = createAppContainer(RootStack)


export default class App extends React.Component {
  someEvent() {
 
    this.navigator &&
      this.navigator.dispatch(
        NavigationActions.navigate({ routeName: Search })
      );
  }
  
  
  render(){
    return (
      <Appcontainer
      ref={nav => {
        this.navigator = nav;
      }}
      />

  
    )
  }
}

const styles = StyleSheet.create({
   mainview: {
    fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
});



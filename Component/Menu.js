import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, ImageBackground, Image } from 'react-native';
import AwesomeButtonRick from "react-native-really-awesome-button";


export class Menu extends Component {
    static navigationOptions = {
        title: 'FILMAPP',
        headerStyle: {
        backgroundColor: '#066B8B',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#fff'
    };
  render() {
    return (


        <ImageBackground source={require('./film.jpg')}
        style ={styles.backgroundImage}>          
         
       

      
          <View style={styles.container}>
        
          <Text style={styles.text}> Start searching a movie </Text>
          <Text style={styles.textemoji}> 👇 </Text>

          <AwesomeButtonRick

          style={styles.button}
          type="primary"
          
          onPress={next => {
            this.props.navigation.navigate('SearchScreen')
            next();
           
          }}
          >

            Search 
          </AwesomeButtonRick>

          

          {/* <Button 
          style={styles.button}
          title="Search"
          onPress={() => this.props.navigation.navigate('SearchScreen')} /> */}


          </View>


        </ImageBackground>

    )
  }
};


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },


  text: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 0,
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight:'bold'
  },

  textemoji: {
    textAlign: 'center',
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  button:{
    // height: 36,
    
    alignItems: 'center',
  }
});


export default Menu;

import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text} from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'
import AwesomeButtonRick from "react-native-really-awesome-button";

class Search extends React.Component {

    constructor(props){
        super(props)
        this.state = { 
            films: [],
            searchedText: "" 
        }
    }

    _searchTextInputChanged(text) {
        this.setState({ searchedText: text })
    }
 

    _loadFilms(){

        console.log(this.state.searchedText)
        if (this.state.searchedText.length > 0){

            getFilmsFromApiWithSearchedText(this.state.searchedText).then(data => {
        
                this.setState ({films: data.results})
             })
        }

    }

    static navigationOptions = {
        title: 'Search A Movie 🎞',
        headerStyle: {
            backgroundColor: '#066B8B',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerTintColor: '#fff'
    };
    render(){
        
        return(
        <View style={styles.view}>
            <TextInput style={styles.textinput} 
            placeholder='Enter a movie title' 
            onChangeText={(text) => this._searchTextInputChanged(text)} 
            onSubmitEditing={() => this._loadFilms()}
            />
            <View style={styles.buttoncontainer}>
                <AwesomeButtonRick

                style={styles.button}
                type="primary"

                onPress={next => {
                this._loadFilms()
                next();
                
                }}
                >

                Search 
                </AwesomeButtonRick>
            </View>

{/* 
            <Button 
            style={styles.button}
            title='Search' onPress={() => this._loadFilms()} /> */}

            
            <FlatList 
            
            data={this.state.films}
            keyExtractor={(item) => item.id.toString()}   
            renderItem={({item}) => <FilmItem film = {item} />}
              
           
            />
         
        </View>

        )
    }
  
}

const styles = StyleSheet.create( {
    view: {
        flex: 1,
        
        backgroundColor: '#0BA5D3'

    },

    textinput: {
        marginTop: 5,
        marginLeft: 5, 
        marginRight: 5,
        height: 50, 
        borderColor: '#000000', 
        backgroundColor:'white',
        borderWidth: 1, 
        paddingLeft: 5
    },

    buttoncontainer:{
    // height: 36,
    justifyContent:'center',
    alignItems: 'center',
    }
    
})

export default Search
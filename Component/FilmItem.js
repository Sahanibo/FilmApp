import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text, Image} from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'


class FilmItem extends React.Component {
    render(){
        const film = this.props.film
        return(
            <View style= {styles.view}>
                <Image
                    style={styles.image}
                    source={{uri: getImageFromApi(film.poster_path)}}
                />
                <View style= {styles.content}>
                    <View style={styles.header}>
                        <TextInput style= {styles.texttitrefilm}>{film.title}</TextInput>
                        <TextInput style= {styles.textvote}>{film.vote_average}</TextInput>
                    </View>

                    <View style={styles.description}>
                        <Text style={styles.textdescription} numberOfLines={6}>{film.overview}</Text>

                    </View>

                    <View style={styles.date}>
                        <Text style={styles.date}>Release Date: {film.release_date}</Text>

                    </View>
                    
                </View>   
            </View>


        )
    }
  
}

const styles = StyleSheet.create( {

    view: {
        height: 190,
        flexDirection: 'row'

    },

    image: {
        
        width: 120,
        height: 180,
        margin: 5,
        

    },

    content: {
        flex: 1,
        margin: 5
    },

    header: {
        flex: 3,
        flexDirection: 'row'
    },

    texttitrefilm: {
        fontWeight: 'bold',
        fontSize: 14,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    
    },

    textvote: {
        fontWeight: 'bold',
        fontSize: 26,
        color: 'white'
    },

    description: {
        flex: 7
    },

    textdescription: {
        fontStyle: 'italic',
        color: 'white'
    },

    date_text: {
        textAlign: 'right',
        fontSize: 14
    }

  

    
})

export default FilmItem
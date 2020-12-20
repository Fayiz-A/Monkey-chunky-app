import * as React from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableOpacity,
} from 'react-native';
import { Audio } from 'expo-av'

export default class PhonicSoundButton extends React.Component {


   playPhonicSound = async (wordChunk) => {
      var soundURL = "https://whitehatjrcontent.s3.ap-south-1.amazonaws.com/phones/" + wordChunk.toUpperCase() + ".mp3"
      await Audio.Sound.createAsync({
         uri: soundURL,
      }, {
         shouldPlay: true
      }
      )
   }

   render() {
      return (<View style = {styles.phonicSoundButtonSurrounding}>
         <TouchableOpacity 
         style = {styles.phonicSoundButton} 
         onPress={() => { this.playPhonicSound(this.props.soundChunk) }}>
            <Text style={styles.displayText}>
               {this.props.wordChunk}</Text></TouchableOpacity>
      </View>)
   }
}

const styles = StyleSheet.create({
   phonicSoundButton: {
      width: '60%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 10,
      marginLeft: 300,
      marginTop: 10,
      backgroundColor: 'red'
   },
   displayText: {
      textAlign: 'center',
      fontSize: 30,
      color: 'white'
    },
    phonicSoundButtonSurrounding: {
       flexDirection: "row"
    }
})
import * as React from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableOpacity,
} from 'react-native';
import { Audio } from 'expo-av'

export default class PhonicSoundButton extends React.Component {

   constructor() {
      super();

      this.state = {
         indexList: []
      }
   }

   playPhonicSound = async (wordChunk, index) => {
      

      var indexList = this.state.indexList;
      indexList.push(index);

      this.setState({
         indexList: indexList
      });

      var soundURL = "https://whitehatjrcontent.s3.ap-south-1.amazonaws.com/phones/" + wordChunk.toUpperCase() + ".mp3"
      await Audio.Sound.createAsync({
         uri: soundURL,
      }, {
         shouldPlay: true
      }
      )
   }

   render() {
      let index = this.props.index;
      return (<View style = {styles(this.state.indexList, index).phonicSoundButtonSurrounding}>
         <TouchableOpacity 
         style = {styles(this.state.indexList, index).phonicSoundButton} 
         onPress={() => { this.playPhonicSound(this.props.soundChunk, index) }}>
            <Text style={styles(this.state.indexList, index).displayText}>
               {this.props.wordChunk}</Text></TouchableOpacity>
      </View>)
   }
}

const styles = (indexList, index) => StyleSheet.create({
   phonicSoundButton: {
      width: '60%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 10,
      marginLeft: 300,
      marginTop: 10,
      backgroundColor: 'red',
      opacity: indexList.includes(index) ? 0.5:1.0
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
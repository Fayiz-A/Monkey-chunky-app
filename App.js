import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { Header } from 'react-native-elements';
import phonemesJson from './databases/phonemes_db';
import PhonicSoundButton from './components/PhonicSoundButton';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      displayText: [],
      soundChunk: [],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Monkey Chunky',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

        <Image style={styles.imageIcon} source={{ uri: 'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png', }} />
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            // let text = this.state.text;
            // let result = phonemesJson.text.chunks.map((data) => {
            //   this.setState({displayText: data})
            let text = this.state.text.trim().toLowerCase().replace(" ", "");

            console.log(text);

            phonemesJson[text] ? 
            this.setState({
              displayText: phonemesJson[text].chunks,
              soundChunk: phonemesJson[text].phones,
            }):alert('This yet doesn\'t exist in our database');
            console.log(phonemesJson[this.state.text]);
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <View>
          {this.state.displayText.map((data, index) => {
            return (
              <View>
                <PhonicSoundButton wordChunk = {data} soundChunk = {this.state.soundChunk[this.state.displayText.indexOf(data)]} index={index}></PhonicSoundButton>
              </View>
            )
          })}
        </View>
               )
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 100,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayTextButton: { width: '60%', height: 50, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 10, margin: 5, backgroundColor: 'grey' },
  imageIcon: {
    width: 170,
    height: 170,
    marginLeft: 600,
    marginTop: 140
  }
});
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {Header} from 'react-native-elements';

// import CustomTextInput from './components/TextInput';

export default class App extends React.Component{

  constructor() {
    super();
    this.state = {
      displayText: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          // leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Monkey Chunky App', style: { color: '#fff', fontSize: 20, width: 1400 } }}
          // rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.setState({
            displayText: text,
          })}
          // value={value}
        />
        {/* <TouchableOpacity onPress={() => {
          this.setState({
          })
        }}><Text>Show Text</Text></TouchableOpacity> */}
        <Text>{this.state.displayText}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

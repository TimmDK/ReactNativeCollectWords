
import React, { Component} from 'react';
 
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.AppButtonContainer}>
      <Text style={styles.AppButtonText}>{title}</Text>
    </TouchableOpacity>
);

class App extends Component {

    constructor(props){
      super(props)
      
      this.state = {
        wordInput: '',
        showWords: false,
        words: []
      }
    }

    render(){
        return(
        <View style={{padding: 50,}}>
            <Text style={{ fontSize: 24 }}>Collect Words</Text>
            <TextInput style={{marginVertical: 10, padding: 5, borderWidth: 1, borderColor: "whitesmoke"}} 
                onChangeText={(text) => this.setState({wordInput:text})} name="wordInput" placeholder="Word" />
            <AppButton title="Add Word" onPress={() => this.state.words.push(this.state.wordInput)} />
            <AppButton title="Delete Word(s)" onPress={() => this.setState({words: []})}  />
            <AppButton title="Show Word(s)" onPress={() => this.setState({showWords: !this.state.showWords})} />
            <Text>{this.state.showWords && this.state.words.toString()}</Text>
        </View>
        );    
    }
};

const styles = StyleSheet.create({
    AppButtonContainer:{
        backgroundColor: 'lightgrey',
        padding: 5,
        marginBottom: 10,
    },

    AppButtonText:{
        color: 'black',
        fontSize: 15,
        fontWeight: "300"
    }
});

export default App;

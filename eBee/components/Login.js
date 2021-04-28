import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  Button
} from 'react-native';
const t = require('tcomb-form-native');
const _ = require('lodash');

var Form = t.form.Form;

var LoginForm = t.struct({
  email: t.String,
  password: t.String
});

const formStyle = _.cloneDeep(Form.stylesheet);
formStyle.textbox.normal.width = 200;
formStyle.textbox.normal.height = 30;
formStyle.textbox.normal.borderRadius = 0;
formStyle.textbox.normal.marginBottom = 0;
formStyle.textbox.error.width = 200;
formStyle.textbox.error.height = 30;
formStyle.textbox.error.borderRadius = 0;

var options = {
  stylesheet: formStyle,
  fields: {
    password: {
      password: true,
      secureTextEntry: true
    }
  }
};

export default class Login extends Component {

  static navigationOptions = {
    header: null
  }
  

  constructor(props) {
    super(props);
    this.state = {
      timePassed: false,
      value: null
    };
  }

  clearForm() {
    this.setState({
        value: null,
    });
  };

  handleSubmit() {
      this.clearForm();
  }

  render () {
    const { navigate } = this.props.navigation;

    /*setTimeout(() => {this.setState({timePassed: true})}, 2000);*/
    if (!this.state.timePassed) {
      setTimeout(() => {this.setState({timePassed: true})}, 2000);
      return (
        <View style={styles.container}>
          <Image style={{width: 200, height: 140}}
                source={require('../assets/ebeeLogo.png')}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.loginContainer}>
          <Image style={{width: 130, height: 60}}
                source={require('../assets/smallLogo.png')}
          />
          <View style={styles.input}>
            <Form
              ref={this.form}
              type={LoginForm}
              options={options}
            />
            <Text style={styles.forgotButton}>Forgot Password</Text>
          </View>
          <TouchableOpacity style={styles.conButton} onPress={() => navigate('CardView')}>
            <Text style={styles.conButton}>Connect</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
              onPress={()=> navigate('Signup')}
            >
              <Text style={styles.text, {margin: 20}}>
                Not connected yet?
                <Text style={{fontWeight: 'bold'}} onSelect={() => navigate('Signup')}> Sign Up </Text>
                here!
              </Text>
          </TouchableOpacity>
          
        </View>
      );
    }
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEC947',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginContainer: {
    backgroundColor: '#FEC947',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    margin: 50,
    padding: 5,
    marginBottom: 25,
    width: 200
  },
  text: {
    textAlign: 'left',
    fontSize: 15,
    color: '#000000'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: 200,
    height: 30,
    color: '#000000',
    backgroundColor: '#fff',
    margin: 10,
    marginLeft: 0,
    paddingLeft: 5
  },
  conButton: {
    backgroundColor: 'black',
    fontSize: 12,
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    color: 'white',
    height: 25,
    width: 70,
    paddingTop: 5
  },
  forgotButton: {
    color: "#000",
    fontSize: 13,
    marginTop: 0,
    alignSelf: 'flex-end'
  }
});

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
import { ScrollView } from 'react-native-gesture-handler';
import FlipComponent from 'react-native-flip-component';

class FrontCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.businessCard}>
        <Text style={{fontSize: 20, alignSelf: 'center', margin: 5}}>{this.props.name}</Text>
        <Image 
          style={
            { margin: 15,  
              alignSelf: 'center', 
              width: 90, 
              height: 90,
              borderWidth: 1,
              borderColor: 'black'
            }
          }
          source={this.props.picture} />
        <Image style={{margin: 10, alignSelf: 'center', width: 50, height: 30}} source={require('../assets/IBM-logo-blue.png')}/>
        <Text style={{fontSize: 12.5, alignSelf: 'center', margin: 5}}>{this.props.jobTitle}</Text>
        <Text style={{fontSize: 17, alignSelf: 'center', margin: 5}}>{this.props.number}</Text>
        <Text style={{fontSize: 15, alignSelf: 'center', margin: 5}}>{this.props.email}</Text>
        <Text style={{fontSize: 15, alignSelf: 'center', margin: 10}}>{this.props.linkedin}</Text>
        <Text style={{fontSize: 15, alignSelf: 'center', margin: 10}}>{this.props.personalsite}</Text>
        <Image style={{alignSelf: 'flex-end', marginTop: 30, width: 20, height: 20}} source={require('../assets/information.png')} />
      </View>
    );
  }
};

class BackCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.businessCard}>
        <Text style={{fontSize: 20, alignSelf: 'center', margin: 5}}>Additional Information</Text>
        <View style={{borderBottomWidth: 1, borderBottomColor: 'black'}}></View>
        <Text>{this.props.info}</Text>
      </View>
    );
  }
};

export default class CardView extends Component {

    constructor(props) {
      super(props); 
      this.state = {
        emailValue: '',
        isFlipped: false
      }
    }

    static navigationOptions = {
      header: null
    };

    render() {
      const { navigate } = this.props.navigation;
      const cece = require('../assets/canese.jpeg');
      const jay = require('../assets/jay.jpg');
      const jesse = require('../assets/canese.jpeg');
      return (
        <View style={styles.fullpage}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigate('Home')}
              style={{paddingLeft: 25}}
            >
              <Text style={{color: 'gray'}}>Sign Out</Text>
            </TouchableOpacity>
            <Image style={{width: 90, height: 40, alignSelf: 'center'}} source={require('../assets/smallLogo.png')}/>
          </View>
            <View style={styles.body}>
              <View style={styles.searchBox}>
                <TextInput 
                  style={styles.searchEmail}
                  placeholder="Search business card by email"
                  onChangeText={(emailValue) => this.setState({emailValue})}
                  value={this.state.emailValue} 
                />
                <TouchableOpacity style={styles.searchButton} onPress={this.onSearch}>
                  <Text style={{color: 'white', fontSize: 13, alignSelf: 'center'}}>Search</Text>
                </TouchableOpacity>
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator='false'
                centerContent='true'
                style={{marginLeft: 25, marginRight: 25}}
              >
              <FlipComponent
                isFlipped={this.state.isFlipped}
                frontView={
                <View>
                  <FrontCard 
                    picture={cece}
                    name="Canese Curvin"
                    jobTitle="Application Developer Apprentice"
                    number="225-555-1234"
                    email="Canese.Curvin@ibm.com"
                    linkedin="www.linkedin.com/ccurvin"
                    personalsite="www.personalsite.dev"
                  />
                </View>
                }
                backView={
                <View>
                  <BackCard 
                    info="This is some info about that person"
                  />
                </View>
                }
              />
              <FlipComponent
                isFlipped={this.state.isFlipped}
                frontView={
                <View>
                  <FrontCard
                    picture={jay} 
                    name="Jonathan Wright"
                    jobTitle="Basketball Coach"
                    number="225-555-4321"
                    email="jwright@ball.net"
                    linkedin="www.linkedin.com/jwright"
                    personalsite="www.letshoop.net"
                  />
                </View>
                }
                backView={
                <View><BackCard info="This is some info about that person"/></View>
                }
              />
              <FlipComponent
                isFlipped={this.state.isFlipped}
                frontView={
                <View>
                  <FrontCard
                    picture={jesse}
                    name="Jesse Robertson"
                    jobTitle="JDA Developer"
                    number="225-555-5678"
                    email="Jesse.Robertson@ibm.com"
                    linkedin="www.linkedin.com/jrob"
                    personalsite="www.jesse.dev"
                  />
                </View>
                }
                backView={
                <View><BackCard info="This is some info about that person"/></View>
                }
              />
            </ScrollView>
            <TouchableOpacity 
              style={styles.signout} 
              onPress={() => {
                this.setState({isFlipped: !this.state.isFlipped})
              }}
            >
              <Text style={{color: 'white', alignSelf: 'center', fontSize: 11}}>Flip</Text>
            </TouchableOpacity>
              
          </View>
          <View style={styles.footer}></View>
        </View>
      ); 
    }
};

const styles = StyleSheet.create({
  fullpage: {
    flex: 1,
  },
  header: {
    height: 140,
    backgroundColor: '#FEC947',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 40
  },
  body: {
    flex: 1,
    backgroundColor: '#F2F0E7',
    paddingBottom: 40
  },
  searchBox: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 400,
    margin: 30,
    marginTop: 30
  },
  searchEmail: {
    height: 40,
    width: 270,
    margin: 10,
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 8
  },
  searchButton: {
    alignContent: 'center',
    justifyContent: 'center',
    height: 40,
    width: 55,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'black',
    borderRadius: 8
  },
  businessCard: {
    height: 450,
    width: 250,
    backgroundColor: 'white',
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 15,
    margin: 55,
    marginTop: 0,
    padding: 20,
    alignSelf: 'center',
  },
  signout: {
    backgroundColor: 'black',
    fontSize: 11,
    textAlign: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'white',
    height: 25,
    width: 70,
    paddingTop: 2
  },
  footer: {
    height: 80,
    backgroundColor: '#FEC947'
  }
})
import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Image
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements';
const t = require('tcomb-form-native');

var Form = t.form.Form;

var User = t.struct({
    firstName: t.String,
    lastName: t.String,
    email: t.String,
    primaryNumber: t.String,
    company: t.String,
    jobTitle: t.String
});

var Links = t.struct({
    website: t.String,
    website2: t.maybe(t.String),
    website3: t.maybe(t.String)
})

var options = {
    auto: 'placeholder',
    fields: {
        firstName: {
            placeholder: 'First Name'
        },
        lastName: {
            placeholder: 'Last Name'
        },
        email: {
            placeholder: 'Email'
        },
        primaryNumber: {
            placeholder: 'Primary Number'
        },
        company: {
            placeholder: 'Company'
        },
        jobTitle: {
            placeholder: 'Job Title'
        },
        website: {
            placeholder: 'LinkedIn'
        },
        website2: {
            placeholder: 'Personal Website'
        },
        website3: {
            placeholder: 'GitHub'
        }
    }
};

export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChoosePhoto = this.handleChoosePhoto.bind(this);
        this.state = {
            value: null,
            photo: null,
            logo: null,
            checked: false
        };
    }

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#FEC947',
            fontSize: 12,
            height: 100
        }
    };

    clearForm() {
        this.setState({
            value: null,
            photo: null,
            logo: null
        });
    }

    handleSubmit() {
        const value = this.form.getValue();
        console.log(`value: ${value}`);
        this.clearForm();
    }

    handleChoosePhoto = () => {
        const options = {
            noData: true,
            allowsEditing: true,
            aspect: [4, 3]
        };

        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                this.setState({photo: response});
            }
        });
    };

    handleChooseLogo = () => {
        const options = {
            noData: true,
            allowsEditing: true,
            aspect: [4, 3]
        };

        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                this.setState({logo: response});
            }
        });
    };

    termAgree = () => {
        if(this.state.checked === false) {
            this.setState({checked: true});
        } else {
            this.setState({checked: false})
        }
    };

    render () {
        const { photo } = this.state;
        const { logo } = this.state;
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.view}>
                <ScrollView style={styles.body}>
                    <Text style={styles.signup}>Sign Up</Text>
                    <View style={styles.upload}>
                        <View style={styles.uploadContainer, {marginRight: 90}}>
                            <TouchableOpacity style={styles.photoButton} onPress={this.handleChoosePhoto}>
                                <Text>Choose Photo</Text>
                            </TouchableOpacity>
                            <View style={styles.photo}>
                                {photo && (
                                    <Image
                                        source={{uri: photo.uri}}
                                        style={{ width: 100, height: 100}}
                                    />
                                )}   
                            </View>  
                        </View>
                        <View style={styles.uploadContainer}>
                            <TouchableOpacity style={styles.photoButton} onPress={this.handleChooseLogo}>
                                <Text>Choose Logo</Text>
                            </TouchableOpacity>
                            <View style={styles.photo}>
                                {logo && (
                                    <Image
                                        source={{uri: logo.uri}}
                                        style={{ width: 100, height: 100}}
                                    />
                                )}   
                            </View>  
                        </View>
                        
                    </View>
                    
                    <Form
                        ref={c => (this.form = c)}
                        type={User}
                        options={options}
                    />
                    <Text style={styles.signup}>Website(s)</Text>
                    <Form
                        ref={c => (this.form = c)}
                        type={Links}
                        options={options}
                    />
                    <CheckBox
                        left
                        title="Terms and Conditions"
                        checked={this.state.checked}
                        onIconPress={this.termAgree}
                        containerStyle={{backgroundColor: 'none'}}
                        checkedColor='black'
                        textStyle={{color: 'black'}}
                    />
                    <Button title="Sign Up" onPress={() => navigate('CardView')} />
                    <View style={{height: 30}}></View>
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent:'space-between',
        backgroundColor: '#F2F0E7'
    },
    body: {
        flex: 1,
        backgroundColor: '#F2F0E7',
        width: 300,
        marginLeft: 35
    },
    signup: {
        fontSize: 35,
        color: 'black',
        alignSelf: 'flex-start',
        marginTop: 10,
        marginBottom: 20
    },
    upload: {
        flexDirection: 'row',
        alignContent: 'flex-start'
    },
    photoButton: {
        marginRight: 15,
        marginBottom: 15
    },
    photo: {
        width: 102,
        height: 102,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        marginBottom: 30
    },
    form: {
        width: 600
    },
    footer: {
        backgroundColor: '#FEC947',
        alignSelf: 'flex-end',
        width: 500,
        height: 100,
        marginLeft: 0

    }
});
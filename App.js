import React from 'react';
import {
  Text,
  View,
  TouchableOpacity} from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles.js'

export default class App extends React.Component {

  state={
    focuse: [
      false,
      false
    ],
    loading: false,
  }

  // lifeCycle methods


  // local methods
  inputFocusStyle = (index, blur) => {
    const { focuse }  = this.state;

    console.log('focuse', index, blur)

    // if we have blur param it means we should leave focus on the inputStyle
    // And leaving focus means we should set it false
    focuse[index] = blur ? false : true;
    this.setState({
      focuse
    })
  }

  // Handle form submit
  handleSubmit = () => {
    // set loading to true
    this.setState({
      loading: true
    })


    // When promise resolved, set loading as false
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 1000)
  };

  // ForgotPass pressed
  handleForgotPass = () => {
    console.log("Handle forgot pass pressed")
  }

  // Handle signup
  handleSignup = () => {
    console.log("Handle sign up")
  }

  // Handle facebook LOGIN
  handleFbLogin = () => {
    console.log("Handle facebook login")
  }

  // Handle google login
  handleGoogleLogin = () => {
    console.log("Handle google login")
  }

  render() {
    const { focuse, loading } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}> LOGIN TO YOUR EXISTING ACCOUNT </Text>
        <View style={styles.formContainer}>
          <Input
            placeholder="Email address or mobile number"
            containerStyle={[
              styles.inputContainerStyle,
              focuse[0] ? { borderColor: 'gray'} : { borderColor: '#dadada'}
            ]}
            inputStyle={styles.inputStyle}
            onFocus={() => this.inputFocusStyle(0)}
            onBlur={() => this.inputFocusStyle(0, 'blur')}
          />
          <Input
              placeholder="Password"
              containerStyle={[
                styles.inputContainerStyle,
                focuse[1] ? { borderColor: 'gray'} : { borderColor: '#dadada'}
              ]}
              inputStyle={styles.inputStyle}
              onFocus={() => this.inputFocusStyle(1)}
              onBlur={() => this.inputFocusStyle(1, 'blur')}
            />
          <TouchableOpacity onPress={this.handleForgotPass}>
            <Text style={styles.forgotPass} >
              Forgot password ?
            </Text>
          </TouchableOpacity>
          <Button
              text={'LOGIN'}
              loading={loading}
              loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
              textStyle={{ fontWeight: "700" }}
              buttonStyle={styles.buttonStyle}
              containerStyle={styles.buttonContainerStyle}
              onPress={this.handleSubmit}
            />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', width: 200}}>
          <TouchableOpacity style={styles.socialIcon} onPress={this.handleFbLogin}>
            <Icon style={styles.socialIcon_icons_facebook} name='facebook' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIconGoogle} onPress={this.handleGoogleLogin}>
            <Icon style={styles.socialIcon_icons_google}  name='google' />
          </TouchableOpacity>
        </View>
        <View style={{marginBottom: 200, flexDirection: 'row', marginTop: 20}}>
          <Text style={{color: 'gray'}}>
            Do you have an account?
          </Text>
          <TouchableOpacity onPress={this.handleSignup}>
            <Text style={styles.signUp} >
              Sign up now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
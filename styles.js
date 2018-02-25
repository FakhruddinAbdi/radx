import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    width: 220,
    textAlign: 'center',
  },
  // Form styles
  formContainer:{
    marginTop: 20,
    flex: 1,
  },

  // Input styles
  inputContainerStyle:{
    width: 350,
    borderColor: '#dadada',
    borderWidth: 1,
    height: 30,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 30,
    paddingLeft: 30,
    marginTop: 20,

    // boxShadow:'5px 10px #888888'
  },
  inputStyle:{
    fontSize: 13
  },

  //Button styles
  buttonStyle:{
    height: 45,
    width: 350,
    paddingRight: 20,
    paddingLeft: 20,
    borderColor: "transparent",
    borderWidth: 0,
    marginTop: 20
  },
  buttonContainerStyle: {
    flex: 0
  },

  // forgotPass
  forgotPass: {
    color: 'gray',
    textAlign: 'right',
    marginTop: 10
  },

  // signUp
  signUp: {
    color: 'black',
    paddingLeft: 5
  },

  // Social iconss
  socialIcon: {
    backgroundColor: '#3b5998',
     padding: 30
   },
   socialIconGoogle: {
     padding: 30,
      borderColor: 'gray',
       borderWidth: 1
   },
   socialIcon_icons_facebook: {
     fontSize: 30,
      color: 'white'
    },
    socialIcon_icons_google: {
      fontSize: 30,
       color: 'black'
     }
});

import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {Header} from '../../components';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
const LoginScreen = () => { 
    const [isactive, setIsActive] = useState(true);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <View style={styles.container}>
              {isactive ? <LoginForm setIsActive={setIsActive} active={isactive} /> : <SignupForm />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

export default LoginScreen;

{
  /* Boxes for login and Signup */
}
{
  /* <Text>Welcome</Text>
        <View style={styles.box}>
        <View style={styles.formbox}>
        {/* Login */
}
{
  /* <TouchableOpacity
              style={styles.formtitle}
              onPress={() =>isActive(true)}>
              {/* radio */
}
{
  /* <TouchableOpacity style={styles.radio}>
                <TouchableOpacity style={styles.insideradio}></TouchableOpacity>
              </TouchableOpacity>
              <Text style={styles.title}>Create Account New to amazon?</Text>
            </TouchableOpacity> */
}
{
  /* {active?<LoginForm/>:null} */
}
{
  /* Signup */
}
{
  /* //     <TouchableOpacity */
}
{
  /* //       style={styles.formtitle2}
        //       onPress={() =>isActive(false)}>
        //       {/* radio */
}
{
  /* //       <TouchableOpacity style={styles.radio}>
        //         <TouchableOpacity style={styles.insideradio}></TouchableOpacity>
        //       </TouchableOpacity>
        //       <Text style={styles.title}>Sign-In Already a customer?</Text>
    //             </TouchableOpacity> */
}
{
  /* {active?null:<SignupForm/>}
                     </View>
                    </View>  */
}

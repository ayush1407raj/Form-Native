import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Form() {
  const [name ,setName] = useState('')
  const [email ,setEmail] = useState('')
  const [message ,setMessage] = useState('')
  const [emailError ,setEmailError] = useState('')
  const [nameError ,setNameError] = useState('')
  const [messageError ,setMessageError] = useState('')

  const OnSubmit = () => {
    let regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    // console.log(name)
    setNameError('')
    setEmailError('')
    setMessageError('')

    if (name ==''){
      setNameError("Please Enter Valid Name")
    }
    else if (email == '' || !regex.test(email)){
      setEmailError("Please Enter Valid Mail")
    }
    
    else if (message==''){
      setMessageError("Please Enter Valid Message")
    }
    else{
      return true
    } 
    

  }
  return (
    <View style={styles.container}>

      <Text style={styles.Head}>FORM</Text>
      <StatusBar style="auto" /> 
      
      <TextInput
        placeholder="Name"
        onChangeText={(text) => {setName(text)}} 
        style={styles.Text}
      />
      <Text style={styles.Texterror}>{nameError ? nameError:''}</Text>


      <TextInput
        placeholder="Email"
        onChangeText={(text) => {setEmail(text)}} 
        style={styles.Text}
      />
      <Text style={styles.Texterror}>{emailError ? emailError:''}</Text>

      <TextInput
        placeholder="Message"
        onChangeText={(text) => {setMessage(text)}} 
        style={styles.Message}
      />
      <Text style={styles.Texterror}>{messageError ? messageError:''}</Text>


      <Button style={styles.btn}
       title="Submit"  onPress={()=>{OnSubmit()}} 
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',  
 },
  Head:{
    fontSize: 37,
    marginBottom: 30,
    fontWeight: 'bold',
    color: ' rgb(24, 135, 175);',
    fontfamily: 'Franklin Gothic Medium',
    letterSpacing: 1,

  },
  Text:{
    borderWidth: 2, 
    borderColor:'lightblue',
     margin:9, 
     padding:14,
      width:240, 
      borderRadius:8
  },
  Message:{
    borderWidth: 1, 
    borderColor:'lightblue',
     margin:14, 
     padding:14,
      width:240,
      height: 110, 
      borderRadius:7
  },
  Texterror:{
    color:'red',
    fontSize: 10,
    marginTop:-2,
  }
});


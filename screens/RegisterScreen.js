import React, { Component, useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { Input, Button } from '@rneui/base';
import { auth } from '../firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const RegisterScreen = () => {
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const[password,setPassword] = useState('');
    const [imageUrl,setImageUrl] = useState('');
    const register = () =>{

auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }
  return (
    <View style={styles.container}>
        <Input
        placeholder="Enter your Name" 
        label="Name"
        leftIcon={{type: 'material', name: 'badge'}}
        value={name}
        onChangeText={text =>setName(text)}
        />
        <Input
        placeholder="Enter your Email" 
        label="Email"
        leftIcon={{type: 'material', name: 'email'}}
        value={email}
        onChangeText={text =>setEmail(text)}
        />
        <Input
        placeholder="Enter your password" 
        label="Password"
        leftIcon={{type: 'material', name: 'lock'}}
        value={password}
        onChangeText={text =>setPassword(text)}
        secureTextEntry
        />
        <Input
        placeholder="Enter your Image Url" 
        label="Profile Picture"
        leftIcon={{type: 'material', name: 'face'}}
        value={imageUrl}
        onChangeText={text =>setImageUrl(text)}
        />

        <Button title="Register" style={styles.button}/>
        
      </View>
  )
}

export default RegisterScreen
const styles = StyleSheet.create({
    button:{
        width:200,
        marginTop:10
    },
    container:{
        flex:1,
        alignItems:'center',
        padding:10
    }
})
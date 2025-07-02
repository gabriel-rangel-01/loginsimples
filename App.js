import React, { useState } from 'react';

import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';


const loginScreen = ({ navegation }) => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

const handLelogin = () => {

  if (true) {
    navigation.navegate('HomeScreen');
  }else {
    alert('por favor, preencha todos os campos.');
  }
};

return (
  <View style={styles.conteiner}>
  <TextInput style={styles.input} placeholder='E-mail' value={email} onChangeText={setEmail}/>
  <TextInput style={styls.input} placeholder='senha' secureTextEntry={true} value={password} onChangeText={setPassword}/>
  <Pressable style={styles.buttons} onPress={handLelogin}>
  <Text style= {styles.buttonText}>Login</Text></Pressable>
 </View>
 );
};

const styles = StyleSheet.create({
  conteiner:{
    backgroundColor: '#6A0C0B'
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    padding: 20,
    color white,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#FBCA03',
    color: 'white',
    borderwidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#AA0505',
    padding: 10,
    borderRadius: 5,
    corderColor: '#FBCA03',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
export default loginScreen;




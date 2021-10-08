
import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground,TouchableOpacity, } from 'react-native';

export default function App() {

let [chuck,setChuck] = React.useState('')

const fetchApiCall = () => {
  fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", {
    "method": "GET",
    "headers": {
      "accept": "application/json",
      "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
      "x-rapidapi-key": "5d2b81df15msh88151fcd965cdf8p188f3cjsn2dddb2192314"
    }
  })
  .then(response => response.json())
  .then(response => {
    setChuck(response.value);
  })
  .catch(err => {
    console.error(err);
  });
	}

  

  return (
    <View style={styles.container}>
      <ImageBackground  source={require('./assets/images/norris.jpg')}
       style={styles.image}>
      
      <View style={styles.textContainer}>
      <Text style={styles.text}>{chuck}</Text>
      </View>
        <TouchableOpacity style={styles.button}
        onPress={fetchApiCall}
        >
         <Text style={styles.btnText}>GET A CHUCK NORRIS FACT</Text>
        </TouchableOpacity>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize:70,
    color:'white',
    bottom:286,
    textAlign:'center',
  },
image:{
  justifyContent:'center', 
  width:'100%',
  height:'100%',
  resizeMode:'cover'
 
},
button:{
  backgroundColor:'#ff8c00',
  height:80,
  width:'80%',
  borderRadius:10,
  alignItems:'center',
  justifyContent:'center',
  marginLeft:40,
  marginRight:40,
  top:200
},
btnText:{
  color:'white',
  fontSize:25,
  fontWeight:'bold'
},
textContainer:{
  alignItems:'center',
  justifyContent:'center',
},
text:{
  color:'white',
  fontSize:30,
  fontWeight:'bold',
  textAlign:'center'
}
});




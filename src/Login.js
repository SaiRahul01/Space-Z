import { View, Text, StyleSheet,TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'
import FA from 'react-native-vector-icons/FontAwesome'

const Login = () => {
    const loginuser=()=>{
        ToastAndroid.show("Logged into Space !",2000)
    }




  return (
    <View style={ss.root}>
      <View style={{borderWidth:0,borderColor:'white',marginTop:150,margin:28}}>
      <Text style={{color:'white',justifyContent:'center', alignItems:'center',fontSize:28}}>Welcome to Space Z</Text>
      </View>

      <View style={{marginLeft:30,marginRight:30,marginTop:50,padding:10,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
        <View>
        <FA name='space-shuttle' style={{color:'white',transform:[{rotate:'0deg'}]}} size={40}/>
        </View>
        <View style={{flexGrow:3,marginLeft:30}}>
        <TextInput placeholder='Enter Key' placeholderTextColor={'white'} style={{borderWidth:0,borderColor:'white',padding:15,backgroundColor:'#5F939A',height:50,color:'white'}} selectionColor='white' secureTextEntry={true}/>
        </View>
        
      </View>


      <TouchableOpacity onPress={loginuser}>
      <View style={{borderWidth:0,borderColor:'blue',marginTop:60,padding:40}}>
       <View style={ss.btn}>
       
       <Text style={{color:'white',fontSize:20}}>Take Me In</Text>
       
       </View>
      </View>
      </TouchableOpacity>

    </View>
  )
}
const ss=StyleSheet.create({
    root:{
        margin:40,
       
        height:50,
        marginTop:-50,
        justifyContent:'center',
        margin:30,
        
         height:600,
         borderWidth:0,
         borderColor:'green'
    },
    btn:{
      borderWidth:1,
      borderColor:'red',
      height:40,
      marginLeft:70,
      marginRight:70,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#EA4C89',
      borderRadius:3
    }
})

export default Login
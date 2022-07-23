import { View, Text ,SafeAreaView, TouchableOpacity , StyleSheet , ImageBackground} from 'react-native'
import React from 'react'
import { getPixelSizeForLayoutSize } from 'react-native/Libraries/Utilities/PixelRatio'
import inappbg from '../../assets/images/inappbg.jpg'
import Axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import MI from 'react-native-vector-icons/MaterialIcons'
import II from 'react-native-vector-icons/Ionicons'


const Logout = (props) => {
    const [joke, setjoke] = useState('')

    const gg = () =>{
        Axios.get('http://api.icndb.com/jokes/random').then((res)=>{
           
            // setjoke(res.data.jokes.joke.text)
            console.log(res.data.value.joke);
            setjoke(res.data.value.joke)

            
        }).then((err)=>{
            console.log(err);
        })
    }

    useEffect(() => {
      gg()
    }, [])
    


  return (
    <ImageBackground source={inappbg} resizeMode="cover" style={{flex:1,justifyContent:'center',height:'100%',width:'100%'}}>
    <SafeAreaView>
    <Text style={{color:'white',marginBottom:50,width:'80%',marginLeft:'auto',marginRight:'auto',fontSize:20}}>Just a Short Joke Before you go </Text>
    <View style={{borderColor:'white',borderWidth:1,width:'80%',marginLeft:'auto',marginRight:'auto',padding:10,backgroundColor:'#0F3D3E'}}>
        

    <Text style={{color:'white'}}> 
        {joke}

    </Text>

    </View>
    <TouchableOpacity style={ss.root1} onPress={gg}>
        <Text style={{color:'white'}}>Show me One More</Text>
        <MI name='refresh' style={{color:'white'}} size={25}/>
    </TouchableOpacity>


    <TouchableOpacity style={ss.root} onPress={()=>props.setisloggedin(false)}>
        <Text style={{color:'white'}}>Go Back To Earth </Text>
        <II name='earth' size={25} style={{color:'white'}}/>
    </TouchableOpacity>
    </SafeAreaView>
    
    </ImageBackground>
  )
}

const ss = StyleSheet.create({
    root:{
        marginTop:'40%',marginLeft:'22%',
        backgroundColor:'#EA4C89',
        height:50,
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:7,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    root1:{
        marginTop:'10%',marginLeft:'22%',
        backgroundColor:'#EA4C89',
        height:50,
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:7,
        flexDirection:'row',justifyContent:'space-around',
        alignItems:'center'
    }
})

export default Logout
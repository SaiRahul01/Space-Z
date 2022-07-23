import { View, Text,SafeAreaView,StyleSheet,Pressable,TouchableOpacity,Image ,ImageBackground} from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { config } from '../../config';
import Axios from 'axios'
import inappbg from '../../assets/images/inappbg.jpg'

const Apod = () => {

  const [imgurl, setimgurl] = useState('')

  
  const request=()=>{
    const urll = 'https://api.nasa.gov/planetary/apod?api_key=' + config['API-KEY']
      Axios.get(urll).then((resp)=>{
        console.log(resp.data.url);
        setimgurl(resp.data.url)
      })
  }
  return (
   <ImageBackground source={inappbg} resizeMode="cover" style={{flex:1,justifyContent:'center',height:'100%',width:'100%'}}>
     <SafeAreaView>
        <View style={{marginTop:'10%',borderWidth:0,justifyContent:'center',marginBottom:100,width:'80%',marginLeft:'auto',marginRight:'auto'}}>
      <Text style={{fontSize:22,textAlign:'center',color:'white'}} >Astronomy Picture of the Day</Text>
    
    </View>

    {imgurl?<View style={styles.imgcontainer}>
      <Image source={{uri:imgurl}} style={{height:250,width:250,marginLeft:'auto',marginRight:'auto'}} resizeMode='cover' />
    </View>:<View></View>}


     <TouchableOpacity onPress={request}>
     <View style={styles.container}>
      
      <Text style={{color:'white'}}>Get Image</Text>
      
      </View>
     </TouchableOpacity>
    </SafeAreaView>
   </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container: {
   
 
    height:50,
    width:160,
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:60,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    backgroundColor:'#EA4C89'
  },
  imgcontainer:{
    borderWidth:1,
    borderColor:'white',
    justifyContent:'center',
    width:255,
    marginLeft:'auto',
    marginRight:'auto'
  }

});
export default Apod
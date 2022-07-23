import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import Axios from 'axios';
import { useState } from 'react';
import Login from './src/Login';
import mainbg from './assets/images/mainbg.jpg'
import { config } from './config';
export default function App() {
  const [imgurl, setimgurl] = useState('')
  const [isloggedin, setisloggedin] = useState(true)

  const doit=()=>{
    const urll = 'https://api.nasa.gov/planetary/apod?api_key=' + config['API-KEY']
      Axios.get(urll).then((resp)=>{
        console.log(resp.data.url);
        setimgurl(resp.data.url)
      })
  }

  

  if(isloggedin)
  {
    return (
        <View style={styles.container}>
      
          <Pressable onPress={doit}>
          <Text>Get</Text>
          </Pressable>
          {imgurl?<Image source={{uri:imgurl}} resizeMode="cover" style={{height:180,width:180}} />:<Text></Text>}
          
          <StatusBar style="auto" />
        
        </View>
    )
  }
  return (<ImageBackground source={mainbg}  resizeMode="cover" style={{flex:1,justifyContent:'center',height:'100%',width:'100%'}}>
              <View >
                  <Login/>
              </View>
          </ImageBackground>)
}

const styles = StyleSheet.create({
  container: {
    marginTop:'70%',
    marginLeft:'20%',
    marginRight:'20%',
    borderWidth:2
  },
});

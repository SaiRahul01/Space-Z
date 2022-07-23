import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import { Image, ImageBackground, Pressable, StyleSheet, Text, View ,AsyncStorage} from 'react-native';
import Axios from 'axios';
import { useState } from 'react';
import Login from './src/Login';
import mainbg from './assets/images/mainbg.jpg'
import { NavigationContainer } from '@react-navigation/native';
import { config } from './config';
import Tabs from './src/TabNavigation/Tabs';


export default function App() {
  LogBox.ignoreAllLogs()
 
  const [isloggedin, setisloggedin] = useState(false)



  

  if( AsyncStorage.getItem("isloggedin")===true   || isloggedin)
  {
    return (
        // <View style={styles.container}>
      
        //   <Pressable onPress={doit}>
        //   <Text>Get</Text>
        //   </Pressable>
        //   {imgurl?<Image source={{uri:imgurl}} resizeMode="cover" style={{height:180,width:180}} />:<Text></Text>}
          
        //   <StatusBar style="auto" />
        
        // </View>
        <NavigationContainer>
          <Tabs isloggedin={isloggedin} setisloggedin={setisloggedin} />
        </NavigationContainer>
    )
  }
  return (<ImageBackground source={mainbg}  resizeMode="cover" style={{flex:1,justifyContent:'center',height:'100%',width:'100%'}}>
              <View >
                  <Login isloggedin={isloggedin} setisloggedin={setisloggedin}/>
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

import { View, Text,SafeAreaView, ImageBackground,StyleSheet, Pressable, ScrollView,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import inappbg from '../../assets/images/inappbg.jpg'
import { config } from '../../config';
import Axios from 'axios'

const Neows = () => {
  const [neosdata, setneosdata] = useState([])
  const request=()=>{
    const urll = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=' + config['API-KEY']
      Axios.get(urll).then((resp)=>{
       
        setneosdata(resp.data.photos.slice(0,20))
        console.log("See -> "+resp.data);
        console.log(resp);
      }).then((err)=>{
        console.log(err);
      })
  }
  useEffect(() => {
    request()
  }, [])
  

  return (
    <ImageBackground source={inappbg} resizeMode="cover" style={{flex:1,justifyContent:'center',height:'100%',width:'100%'}}>
      <SafeAreaView>
      <View style={ss.root}>
      <Text style={{color:'white',textAlign:'center',fontSize:30}}>Mars Rovers Images</Text>
      
      
    

    </View>

    {/* <View style={{marginTop:50,marginLeft:50,borderWidth:1,borderColor:'blue',height:40,backgroundColor:'green',width:'50%',marginLeft:'auto',marginRight:'auto',alignItems:'center'}}> 
    <Pressable onPress={()=>{request()}} >
      <Text style={{color:'white',textAlign:'center'}}>Click</Text>
    </Pressable>
    </View> */}

    <View style={{marginTop:50,marginLeft:50,borderWidth:0,borderColor:'blue',height:440,width:'90%',marginLeft:'auto',marginRight:'auto',alignItems:'center'}}>

      
          <ScrollView style={{borderWidth:0,borderColor:'red',width:'100%',padding:10,height:150}}>
            {
              neosdata.map((item)=>(
                <View key={item.id} style={ss.card}>

                  <View>
                  <Image source={{uri:item.img_src}} resizeMode="cover" style={{height:100,width:100}}/>
                  </View>
                  <View style={{justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                  <Text style={{color:'white'}}>Rover ID : {item.rover.id}</Text>
                  {/* <Text style={{color:'white'}}>Camera ID : {item.camera.id}</Text> */}
                  <Text style={{color:'white'}}>Camera Name : {item.camera.name}</Text>
                  <Text style={{color:'white'}}>Launch Date : {item.rover.launch_date}</Text>
                  <Text style={{color:'white'}}>Landing Date : {item.rover.landing_date}</Text>
                  <Text style={{color:'white'}}>Status : {item.rover.status}</Text>
                  <Text style={{color:'white'}}>Last Updated {item.earth_date}</Text>

                  </View>
                  
                </View>
              ))
            }
          </ScrollView>
      

    
    </View>

    
    </SafeAreaView>
    </ImageBackground>
  )
}
const ss = StyleSheet.create({
  root:{
    borderWidth:0,
    borderColor:'white',
    marginTop:'20%',
    width:'80%',
    marginLeft:'auto',
    marginRight:'auto'
  },
  card:{
    borderWidth:1,
    borderColor:'white',
    width:'100%',
    height:150,
    marginLeft:'auto',
    marginRight:'auto',
    flexDirection:'row',
    alignItems:"center",
    justifyContent:'space-between',
    padding:10,
    marginTop:20,
    marginBottom:10
  }
})

export default Neows
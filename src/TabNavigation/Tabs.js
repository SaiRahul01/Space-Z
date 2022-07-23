import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FA from 'react-native-vector-icons/FontAwesome'
import Apod from './Apod';
import Neows from './Neows';
import II from 'react-native-vector-icons/Ionicons';
import Logout from './Logout';
import MI from 'react-native-vector-icons/MaterialIcons'

import Mrp from './Mrp';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'

const Tabs = (props) => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarShowLabel:false}}>
        <Tab.Screen  name='A' component={Apod} options={{tabBarIcon:()=>(<FA name='image' size={25}/>)}}/>
        <Tab.Screen  name='B' component={Neows} options={{tabBarIcon:()=>(<II name='planet' size={25}/>)}}/>
        {/* <Tab.Screen  name='C' component={Mrp} options={{tabBarIcon:()=>(<MCI name='google-earth' size={25}/>)}}/> */}
        <Tab.Screen  name='D'  options={{tabBarIcon:()=>(<MI name='settings' size={25}/>)}}>
          {()=> <Logout {...props}/>}
        </Tab.Screen>
        
    </Tab.Navigator>
  )
}

export default Tabs
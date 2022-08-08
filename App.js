import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon  from "react-native-vector-icons/MaterialIcons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


import Firstpage from "./src/Screens/Firstpage";
import OTP from "./src/Screens/OTP";
import Register from "./src/Screens/Register";
import Schoolboard from "./src/Screens/Schoolboard";
import Fractionalshares from "./src/Screens/Fractionalshares";
import Learnasyougo from "./src/Screens/Learnasyougo";
import Kidsandteens from "./src/Screens/Kidsandteens";
import Fullscreen from "./src/Screens/Fullscreen";
import Anothertitlepage from "./src/Screens/Anothertitlepage";


import DrawerContainer from "./src/Drawer_folder/DrawerContainer";



// import ThirdPage from "./src/Bottom/ThirdPage";
import Home from "./src/Bottom/Home";
import Recent from "./src/Bottom/Recent";
import Exam from "./src/Bottom/Exams";
import Profile from "./src/Bottom/Profile";
import Biology from './src/Bottom/Biology';




//TopTab
// import Chapter from './src/TopTabNav/Navigation';
// import MyTopTab from './src/TopTabNav/Navigation';
// import Navigation from "./src/TopTabNav/Navigation";
import Videos from "./src/TopTabNav/Videos";
import ChapterTest from "./src/TopTabNav/ChapterTest";
import Resources from "./src/TopTabNav/Resources";
import QNBank from "./src/TopTabNav/QNBank";




const Stack=createStackNavigator();
const BottomTab=createBottomTabNavigator();
const Drawer=createDrawerNavigator();
const TopTab=createMaterialTopTabNavigator();



function MyStack(){
  return(
    <Stack.Navigator initialRouteName='Firstpage'>
      <Stack.Screen name='Firstpage' component={Firstpage}></Stack.Screen>
      <Stack.Screen name='OTP' component={OTP}></Stack.Screen>
      <Stack.Screen name='Register' component={Register}></Stack.Screen>
      <Stack.Screen name='Schoolboard' component={Schoolboard}></Stack.Screen>
      <Stack.Screen name='Fractionalshares' component={Fractionalshares}></Stack.Screen>
      <Stack.Screen name='Learnasyougo' component={Learnasyougo}></Stack.Screen>
      <Stack.Screen name='Kidsandteens' component={Kidsandteens}></Stack.Screen>
      <Stack.Screen name='Fullscreen' component={Fullscreen}></Stack.Screen>
      <Stack.Screen name='Anothertitlepage' component={Anothertitlepage}></Stack.Screen>


      {/* <Stack.Screen name='ThirdPage' component={ThirdPage}></Stack.Screen> */}
      <Stack.Screen name='BottomTab' component={MyBottomTab} options={{headerShown:false}}></Stack.Screen>
      <Stack.Screen name='Drawer' component={MyDrawer} ></Stack.Screen>

      {/* <Stack.Screen name='Navigation' component={Navigation}></Stack.Screen> */}
      

      
      
     
    </Stack.Navigator>
  )
}

function MyBottomTab(){
  return(
      <BottomTab.Navigator 
      screenOptions={{
        headerShown:false,
        tabBarLabelStyle:{fontSize:16,fontWeight:'bold'},
        tabBarItemStyle:{width:100},
        tabBarStyle:{backgroundColor:'#fff',elevation:10,marginLeft:10,marginRight:10,borderRadius:10,borderColor:'gray',marginBottom:5,borderTopWidth:0.5,borderTopColor:'gray'}
        }}>
      {/* <BottomTab.Screen name='ThirdPage' component={ThirdPage}></BottomTab.Screen> */}
      <BottomTab.Screen name='Home' component={Home}
          options={{ 
           
            tabBarActiveTintColor:'red',
            tabBarInactiveTintColor:'gray',
            tabBarIcon:({focused})=> focused? <Icon name='house' size={23} color='green'></Icon>:<Icon name='house' size={23} color='gray'></Icon>
          }}
          ></BottomTab.Screen>

      <BottomTab.Screen name='Recent' component={Recent}
          options={{
            
            tabBarActiveTintColor:'red',
            tabBarInactiveTintColor:'gray',
            tabBarIcon:({focused})=> focused? <Icon name='category' size={23} color='green'></Icon>:<Icon name='category' size={23} color='gray'></Icon>
          }}
          ></BottomTab.Screen>


      <BottomTab.Screen name='Exam' component={Exam}
          options={{
           
            tabBarActiveTintColor:'red',
            tabBarInactiveTintColor:'gray',
            tabBarIcon:({focused})=> focused? <Icon name='house' size={23} color='green'></Icon>:<Icon name='house' size={23} color='gray'></Icon>
          }}
          ></BottomTab.Screen>

<BottomTab.Screen name='Profile' component={Profile} 
          options={{
           
            tabBarActiveTintColor:'red',
            tabBarInactiveTintColor:'gray',
            tabBarIcon:({focused})=> focused? <Icon name='house' size={23} color='green'></Icon>:<Icon name='house' size={23} color='gray'></Icon>
          }}
          ></BottomTab.Screen>

          <BottomTab.Screen name='Biology' component={Biology} options={()=>({tabBarStyle:{display:"none",},tabBarButton:()=>null})}></BottomTab.Screen>
          <BottomTab.Screen name='TopTab' component={MyTopTab} options={()=>({tabBarStyle:{display:"none",},tabBarButton:()=>null})}></BottomTab.Screen>
         
      </BottomTab.Navigator>
  )
}


function MyDrawer(){
  return(
    <Drawer.Navigator drawerContent={(props)=> <DrawerContainer {...props}></DrawerContainer>} >
        <Drawer.Screen name='Home' component={Home}></Drawer.Screen>
       
    </Drawer.Navigator>
  )
}


function MyTopTab(){
  return(
    <TopTab.Navigator screenOptions={{tabBarLabelStyle:{fontSize:10},tabBarItemStyle:{width:100},tabBarStyle:{backgroundColor:'white'}}}>
      <TopTab.Screen  name="Videos" component={Videos} ></TopTab.Screen>
      <TopTab.Screen name="ChapterTest" component={ChapterTest}></TopTab.Screen>
      <TopTab.Screen name="Resources" component={Resources}></TopTab.Screen>
      <TopTab.Screen name="QNBank" component={QNBank}></TopTab.Screen>
    </TopTab.Navigator>
  )
}






export default function App(){
  return(
    <NavigationContainer>
      <MyStack></MyStack>
      
    </NavigationContainer>
  )
  
}
import React from 'react';
import { StyleSheet,View,Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




const Stack=createStackNavigator();




const NavigationToMovie=props=>{
  props.navigation.navigate('Movies')
}
//Home Component
const Home = props => {
  return(
    <View style={styles.container}>
        {/* <Text>Home Screen</Text> */}
        <Button title='Go to Movies screen' onPress={()=> NavigationToMovie(props)}></Button>
    </View>
  );
}



const NavigationToHome=props=>{
  props.navigation.navigate('Home')
}

//Movies Component
const Movies = props => {
  return(
    <View style={styles.container}>
        {/* <Text>Home Screen</Text> */}
        <Button title='Go to Home screen' onPress={()=> NavigationToHome(props)}></Button>
    </View>
  );
}



export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen name="Movies" component={Movies}></Stack.Screen>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles=StyleSheet.create(
  {
      container:{
          flex:1,
          backgroundColor:'#fff',
          alignItems:'center',
          justifyContent:'center',
          height:'100%',
          width:'100%'
        }
  }
)
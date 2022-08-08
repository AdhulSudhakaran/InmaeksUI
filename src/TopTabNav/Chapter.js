import React,{Component} from "react";
import { View,StyleSheet,Text,TouchableHighlight} from "react-native";
import Icon  from "react-native-vector-icons/MaterialIcons";

import MyTopTab  from "../../App";


export default class Chapter extends Component{
    render(){
        return(
            <View style={styles.container}>

                <View style={styles.topContainer}>
                    <View style={{flexDirection:'row'}}>
                        <TouchableHighlight onPress={()=>this.props.navigation.navigate('Biology')} style={{height:30,width:30,alignItems:'center',justifyContent:'center',borderColor:'white',borderWidth:1,marginLeft:20,marginTop:20,borderRadius:4}}>
                            <Icon style={{marginLeft:5}} name="arrow-back-ios" color='#12b05e' size={16}></Icon>
                        </TouchableHighlight>

                    
                        <View style={{marginLeft:80,marginTop:15}}>
                            <Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>Biology</Text>
                        </View>
                    </View>

                    <View style={{paddingLeft:20,paddingRight:30,marginTop:20}}>
                        <Text style={{fontSize:25,fontWeight:'600',color:'#fff'}}>Long Chapters can be shown here</Text>                        
                    </View>

                    <View style={{flexDirection:'row',marginLeft:20,marginTop:5}}>
                        
                        <View style={{flexDirection:'row'}}>
                            <Icon style={{marginTop:4}} name="radio-button-checked" size={16} color='#00ff7b'></Icon>
                            <Text style={{color:'#00ff7b',fontSize:16,marginLeft:5}}>12 Chapters</Text>
                        </View>

                        <View style={{marginLeft:20,flexDirection:'row'}}>
                            <Icon style={{marginTop:4}} name="radio-button-checked" size={16} color='#00ff7b'></Icon>
                            <Text style={{color:'#00ff7b',fontSize:16,marginLeft:5}}>124 Hours</Text>
                        </View>
                    </View>                    
                    </View>
                    <MyTopTab/>
                 
                </View>

        )
    }

}
const styles=StyleSheet.create(
    {
        container:{
            height:'100%',
            width:'100%',
            backgroundColor:'#e9eef7',
            alignItems:'center',
            
        },
        topContainer:{
            height:'35%',
            width:'100%',
            backgroundColor:'#222152',
        },
    })
import React,{Component} from "react";
import { StyleSheet,View,Text } from "react-native";

export default class Resources extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>this is Resources page</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create(
    {
        container:{
            height:'100%',
            width:'100%',
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }
    }
)
import React,{Component} from "react";
import { StyleSheet,View,Text } from "react-native";

export default class Recent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>this is recent page</Text>
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
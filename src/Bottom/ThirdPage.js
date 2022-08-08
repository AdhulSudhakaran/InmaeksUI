import React,{Component} from "react";
import { View,StyleSheet,Text ,TouchableHighlight} from "react-native";



export default class ThirdPage extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Third Page</Text>
                {/* <TouchableHighlight onPress={()=>this.props.navigation.navigate('SecondPage')} style={{height:40,width:'70%',alignItems:'center',justifyContent:'center',backgroundColor:'orange'}}>
                    <Text>Go to Second Page</Text>
                </TouchableHighlight> */}
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
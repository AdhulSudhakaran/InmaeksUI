import React,{Component} from "react";
import { View,StyleSheet,ScrollView,Text,TouchableHighlight} from "react-native";

import Icon  from "react-native-vector-icons/MaterialIcons";

export default class Test extends Component{
    render(){
        return(
            <View style={styles.container}>
                
                <View style={styles.topContainer}>
                    <TouchableHighlight style={{height:30,width:30,alignItems:'center',justifyContent:'center',borderColor:'white',borderWidth:1,marginLeft:20,marginTop:20,borderRadius:4}} onPress={()=>this.props.navigation.navigate('Home')}>
                        <Icon style={{marginLeft:5}} name="arrow-back-ios" color='#12b05e' size={16}></Icon>
                    </TouchableHighlight>

                
                    <View style={{marginLeft:20,marginTop:50}}>
                        <Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>Biology</Text>
                    </View>

                    <View style={{flexDirection:'row',marginLeft:20}}>
                        
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
                

                <ScrollView style={{height:'100%',width:'100%',paddingLeft:20}}>
                    <View style={{width:'100%'}}>

                        <View style={styles.chapterContainer}>
                            <View>
                                <Text onPress={()=>this.props.navigation.navigate('TopTab')} style={{color:'black',fontSize:20,paddingLeft:20,paddingRight:20,fontWeight:'600'}}>Long chapter name can be shown here</Text>
                            </View>

                            <View style={{marginLeft:20,marginTop:5,flexDirection:'row'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Icon style={{marginTop:2}} name="radio-button-checked" size={16} color='#00ff7b'></Icon>
                                    <Text style={{marginLeft:5}}>Chapter 1</Text>
                                </View>
                                <View style={{flexDirection:'row',marginLeft:30}}>
                                    <Icon style={{marginTop:2}} name="radio-button-checked" size={16} color='#00ff7b'></Icon>
                                    <Text style={{marginLeft:5}}>3 parts</Text>
                                </View>
                            </View>
                        </View>   

                        <View style={styles.chapterContainer2}>
                            <View>
                                <Text style={{color:'black',fontSize:20,paddingLeft:20,paddingRight:20,fontWeight:'600'}}>Long chapter name can be shown here</Text>
                            </View>

                            <View style={{marginLeft:20,marginTop:5,flexDirection:'row'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Icon style={{marginTop:2}} name="radio-button-checked" size={16} color='#00ff7b'></Icon>
                                    <Text style={{marginLeft:5}}>Chapter 1</Text>
                                </View>
                                <View style={{flexDirection:'row',marginLeft:30}}>
                                    <Icon style={{marginTop:2}} name="radio-button-checked" size={16} color='#00ff7b'></Icon>
                                    <Text style={{marginLeft:5}}>3 parts</Text>
                                </View>
                            </View>
                        </View> 

                        <View style={styles.chapterContainer2}>
                            <View>
                                <Text style={{color:'black',fontSize:20,paddingLeft:20,paddingRight:20,fontWeight:'600'}}>Long chapter name can be shown here</Text>
                            </View>

                            <View style={{marginLeft:20,marginTop:5,flexDirection:'row'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Icon style={{marginTop:2}} name="radio-button-checked" size={16} color='#00ff7b'></Icon>
                                    <Text style={{marginLeft:5}}>Chapter 1</Text>
                                </View>
                                <View style={{flexDirection:'row',marginLeft:30}}>
                                    <Icon style={{marginTop:2}} name="radio-button-checked" size={16} color='#00ff7b'></Icon>
                                    <Text style={{marginLeft:5}}>3 parts</Text>
                                </View>
                            </View>
                        </View> 
                        <View style={styles.chapterContainer2}>
                            <View>
                                <Text style={{color:'black',fontSize:20,paddingLeft:20,paddingRight:20,fontWeight:'600'}}>Long chapter name can be shown here</Text>
                            </View>

                            <View style={{marginLeft:20,marginTop:5,flexDirection:'row'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Icon style={{marginTop:2}} name="radio-button-checked" size={16} color='#00ff7b'></Icon>
                                    <Text style={{marginLeft:5}}>Chapter 1</Text>
                                </View>
                                <View style={{flexDirection:'row',marginLeft:30}}>
                                    <Icon style={{marginTop:2}} name="radio-button-checked" size={16} color='#00ff7b'></Icon>
                                    <Text style={{marginLeft:5}}>3 parts</Text>
                                </View>
                            </View>
                        </View> 

                        <View style={styles.chapterContainer2}>
                            <View>
                                <Text style={{color:'black',fontSize:20,paddingLeft:20,paddingRight:20,fontWeight:'600'}}>Long chapter name can be shown here</Text>
                            </View>

                            <View style={{marginLeft:20,marginTop:5,flexDirection:'row'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Icon style={{marginTop:2}} name="radio-button-checked" size={16} color='#00ff7b'></Icon>
                                    <Text style={{marginLeft:5}}>Chapter 1</Text>
                                </View>
                                <View style={{flexDirection:'row',marginLeft:30}}>
                                    <Icon style={{marginTop:2}} name="radio-button-checked" size={16} color='#00ff7b'></Icon>
                                    <Text style={{marginLeft:5}}>3 parts</Text>
                                </View>
                            </View>
                        </View> 

                        <View style={styles.chapterContainer2}>
                            <View>
                                <Text style={{color:'black',fontSize:20,paddingLeft:20,paddingRight:20,fontWeight:'600'}}>Long chapter name can be shown here</Text>
                            </View>

                            <View style={{marginLeft:20,marginTop:5,flexDirection:'row'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Icon style={{marginTop:2}} name="radio-button-checked" size={16} color='#00ff7b'></Icon>
                                    <Text style={{marginLeft:5}}>Chapter 1</Text>
                                </View>
                                <View style={{flexDirection:'row',marginLeft:30}}>
                                    <Icon style={{marginTop:2}} name="radio-button-checked" size={16} color='#00ff7b'></Icon>
                                    <Text style={{marginLeft:5}}>3 parts</Text>
                                </View>
                            </View>
                        </View> 

                        
                        
                    </View>
                </ScrollView>
            
               
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
            height:200,
            width:'100%',
            backgroundColor:'#222152',
            
            
           

        },
        
        chapterContainer:{
            
            height:100,
            width:'95%',
            elevation:10,
            backgroundColor:'white',
            // bottom:15,
            // borderWidth:0.5,
            // borderColor:'gray',
            borderRadius:8,
            marginTop:10
        },
        chapterContainer2:{
            height:100,
            width:'95%',
            elevation:10,
            backgroundColor:'white',
            bottom:15,
            // borderWidth:0.5,
            // borderColor:'gray',
            borderRadius:8,
            marginTop:30
        }
    }
)
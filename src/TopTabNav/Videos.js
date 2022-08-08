import React,{Component} from "react";
import { View,StyleSheet,Text,TouchableHighlight,Image} from "react-native";
import Icon  from "react-native-vector-icons/MaterialIcons";

export default class Videos extends Component{
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

                        
                                    <View style={styles.classContainer}>
                                        <Image style={{height:'65%',width:'100%',borderTopLeftRadius:8,borderTopRightRadius:8}} source={require('../../assets/teacher.jpg')}></Image>
                                        <Text style={{fontSize:20,fontWeight:'700',color:'#000',paddingLeft:15,paddingRight:15}}>Long chapter name can be shown here</Text>
                                        <View style={{flexDirection:'row',marginLeft:20,marginTop:5}}>
                                        
                                            <View style={{flexDirection:'row'}}>
                                                <Icon style={{marginTop:4}} name="radio-button-checked" size={16} color='#00ff7b'></Icon>
                                                <Text style={{color:'gray',fontSize:16,marginLeft:5}}>12 Chapters</Text>
                                            </View>

                                            <View style={{marginLeft:20,flexDirection:'row'}}>
                                                <Icon style={{marginTop:4}} name="radio-button-checked" size={16} color='#00ff7b'></Icon>
                                                <Text style={{color:'gray',fontSize:16,marginLeft:5}}>124 Hours</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.classContainer2}>
                                        <Image style={{height:'65%',width:'100%',borderTopLeftRadius:8,borderTopRightRadius:8}} source={require('../../assets/teacher.jpg')}></Image>
                                        <Text style={{fontSize:20,fontWeight:'700',color:'#000',paddingLeft:15,paddingRight:15}}>Long chapter name can be shown here</Text>
                                        <View style={{flexDirection:'row',marginLeft:20,marginTop:5}}>
                                        
                                            <View style={{flexDirection:'row'}}>
                                                <Icon style={{marginTop:4}} name="radio-button-checked" size={16} color='#00ff7b'></Icon>
                                                <Text style={{color:'gray',fontSize:16,marginLeft:5}}>12 Chapters</Text>
                                            </View>

                                            <View style={{marginLeft:20,flexDirection:'row'}}>
                                                <Icon style={{marginTop:4}} name="radio-button-checked" size={16} color='#00ff7b'></Icon>
                                                <Text style={{color:'gray',fontSize:16,marginLeft:5}}>124 Hours</Text>
                                            </View>
                                        </View>
                                    </View>
                            

                </View>
                

                
            
               
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
        classContainer:{
            height:250,
            width:'90%',
            backgroundColor:'#fff',
            marginTop:50,
            marginLeft:20,
            marginRight:20,
            elevation:10,
            borderRadius:8
        },
        classContainer2:{
            height:250,
            width:'90%',
            backgroundColor:'#fff',
            marginTop:10,
            marginLeft:20,
            marginRight:20,
            elevation:10,
            borderRadius:8
        }
        
        
    }
)
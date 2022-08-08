import React,{Component} from 'react';
import{
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
    Image,ScrollView,SafeAreaView
} from 'react-native';

import Icon  from 'react-native-vector-icons/MaterialIcons';

export default class Profile extends Component{
    render(){
        return(
            <ScrollView>
                <View style={{width:'100%'}}>
                        
                <View style={styles.container}>
                    <View style={styles.profileContainer}>
                        <View style={{height:40,width:'50%',backgroundColor:'transparent',marginTop:10,flexDirection:'row',alignItems:'center',justifyContent:'center',marginLeft:200}}>
                        <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>Profile</Text>
                        <Icon style={{marginLeft:100}} name='notifications' size={16} color='white'></Icon>
                        <TouchableHighlight style={{height:30,width:30,alignItems:'center',justifyContent:'center',borderWidth:2,borderColor:'gray',marginLeft:10,marginRight:40}}>
                                <Icon name='grid-view' size={16} color='green'/>
                        </TouchableHighlight>

                        </View>
                    </View>

                    <View style={{height:'75%',width:'80%',backgroundColor:'white',bottom:230,borderRadius:15,elevation:0.5,marginTop:10}}> 
                        <View style={{flexDirection:'row',height:75,width:'100%',marginTop:10,alignItems:'center',justifyContent:'center',paddingRight:100}}>
                            <View style={{height:60,width:60,borderRadius:50,backgroundColor:'white',borderColor:'green',borderWidth:2,borderColor:'green'}}>
                                <Image style={{height:'100%',width:'100%',borderRadius:50}} source={require('../../assets/joe_profile_photo.jpg')}></Image>
                            </View>
                            <View style={{alignItems:'center',justifyContent:'center',marginLeft:5}}>
                                <Text style={{marginLeft:10,fontSize:18,color:'#000',fontWeight:'bold'}}>Aaron Taylor</Text>
                                <Text style={{color:'#a8a8a8',marginRight:35}}>ID : 1234</Text>
                            </View>
                        </View>
                        <Text style={{height:50,color:'#000',fontWeight:'bold',marginLeft:20,fontSize:16}}>Personal Info</Text>
                        <Text style={{height:1,borderBottomWidth:0.5,borderBottomColor:'gray'}}></Text>

                        <View style={{height:40,width:'90%',backgroundColor:'white',marginTop:10,flexDirection:'row',alignItems:'center',justifyContent:'flex-start',borderBottomWidth:0.5,borderBottomColor:'gray',marginLeft:15}}>
                            <Text>Account Settings</Text>
                            <Text style={{marginLeft:20,marginRight:10,color:'black',fontWeight:'bold'}}>Aaron Taylor</Text>
                        </View>
                        <View style={{height:40,width:'90%',backgroundColor:'white',marginTop:10,flexDirection:'row',alignItems:'center',justifyContent:'flex-start',borderBottomWidth:0.5,borderBottomColor:'gray',marginLeft:15}}>
                            <Text>Email</Text>
                            <Text style={{marginLeft:20,marginRight:10,color:'black',fontWeight:'bold'}}>emailidid123@server.com</Text>
                        </View>
                        <View style={{height:40,width:'90%',backgroundColor:'white',marginTop:10,flexDirection:'row',alignItems:'center',justifyContent:'flex-start',borderBottomWidth:0.5,borderBottomColor:'gray',marginLeft:15,marginBottom:3}}>
                            <Text>Number</Text>
                            <Text style={{marginLeft:20,marginRight:10,color:'black',fontWeight:'bold'}}>+91 9876543210</Text>
                        </View>

                        <Text style={{color:'black',fontSize:18,fontWeight:'600',marginTop:15,marginLeft:15}}>Course Info</Text>

                        <View style={{height:40,width:'90%',backgroundColor:'white',marginTop:15,flexDirection:'row',alignItems:'center',justifyContent:'flex-start',borderBottomWidth:0.5,borderBottomColor:'gray',marginLeft:15,borderTopWidth:0.5,borderTopColor:'gray'}}>
                            <Text>Center</Text>
                            <Text style={{marginLeft:20,marginRight:10,color:'black',fontWeight:'bold'}}>Inmakes edu</Text>
                        </View>
                        <View style={{height:40,width:'90%',backgroundColor:'white',marginTop:10,flexDirection:'row',alignItems:'center',justifyContent:'flex-start',borderBottomWidth:0.5,borderBottomColor:'gray',marginLeft:15}}>
                            <Text>Course</Text>
                            <Text style={{marginLeft:20,marginRight:10,color:'black',fontWeight:'bold'}}>Plus Two Science</Text>
                        </View>
                        <View style={{height:40,width:'90%',backgroundColor:'white',marginTop:10,flexDirection:'row',alignItems:'center',justifyContent:'flex-start',borderBottomWidth:0.5,borderBottomColor:'gray',marginLeft:15}}>
                            <Text>Payment Status</Text>
                            <Text style={{marginLeft:20,marginRight:10,color:'black',fontWeight:'bold'}}>Free</Text>
                        </View>
                        <View style={{height:40,width:'90%',backgroundColor:'white',marginTop:10,flexDirection:'row',alignItems:'center',justifyContent:'flex-start',marginLeft:15}}>
                            <Text>Expiry Date</Text>
                            <Text style={{marginLeft:20,marginRight:10,color:'black',fontWeight:'bold'}}>Not Applicable</Text>
                        </View>
                    </View>

                    <View style={{height:50,width:'80%',backgroundColor:'green',bottom:227,borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'center',elevation:10}}>
                        <Icon name='credit-card' size={30} color='white'></Icon>
                        <Text style={{color:'white',fontWeight:'500',marginLeft:10}}>Custom Payment</Text>
                        <Icon style={{marginLeft:60}} name='chevron-right' size={20} color='white' ></Icon>
                    </View>

                    <View style={{height:100,width:'100%'}}></View>

                    
            </View>
                </View>
            </ScrollView>
           
        )
    }
}

const styles=StyleSheet.create(
    {
        container:{
            height:'100%',
            width:'100%',
            backgroundColor:'#ebebeb',
            alignItems:'center'
        },
        profileContainer:{
            height:'40%',
            width:'100%',
            backgroundColor:'#0a0a38',
            alignItems:'center',
            
        },
        bottomNavigation:{
            height:60,
            width:'80%',
            backgroundColor:'white',
            marginTop:5,
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'row',
           
            flexDirection:'row',
            borderRadius:10,
            // marginBottom:10,
           elevation:10,
            bottom:230,
            borderBottomWidth:4,
            borderBottomColor:'green'
        },
    }
)
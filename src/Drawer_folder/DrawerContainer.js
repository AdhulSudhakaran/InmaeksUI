import React,{Component} from 'react';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import{
    View,StyleSheet,Text,TouchableHighlight
}from 'react-native';


export default class DrawerContainer extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={{flexDirection:'row',height:100,width:'100%',marginTop:20,alignItems:'center',justifyContent:'center'}}>
                    <View style={{height:70,width:70,borderRadius:50,backgroundColor:'white',borderColor:'green',borderWidth:2,borderColor:'green'}}></View>
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Text style={{marginLeft:10,fontSize:18,color:'#ffffff',fontWeight:'bold'}}>Aaron Taylor</Text>
                        <Text style={{color:'#a8a8a8',marginRight:35}}>ID : 1234</Text>
                    </View>
                    <Icon style={{marginLeft:30}} name='navigate-next' size={20} color='white'></Icon>
                </View>

                <View style={{height:40,width:'70%',backgroundColor:'transparent', marginTop:20,alignItems:'center',justifyContent:'center',flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#a8a8a8',marginLeft:10,marginRight:10}}>
                    <View style={{height:30,width:30,borderWidth:2,borderColor:'green'}}></View>
                    <Text style={{marginLeft:15,color:'white',marginRight:70}}>Exam Corner</Text>
                </View>
                <View style={{height:40,width:'70%',backgroundColor:'transparent', marginTop:10,alignItems:'center',justifyContent:'center',flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#a8a8a8',marginLeft:10,marginRight:10}}>
                    <View style={{height:30,width:30,borderWidth:2,borderColor:'green'}}></View>
                    <Text style={{marginLeft:15,color:'white',marginRight:65}}>Subscriptions</Text>
                </View>
                <View style={{height:40,width:'70%',backgroundColor:'transparent', marginTop:10,alignItems:'center',justifyContent:'center',flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#a8a8a8',marginLeft:10,marginRight:10}}>
                    <View style={{height:30,width:30,borderWidth:2,borderColor:'green'}}></View>
                    <Text style={{marginLeft:15,color:'white',marginRight:95}}>Analytics</Text>
                </View>
                <View style={{height:40,width:'70%',backgroundColor:'transparent', marginTop:10,alignItems:'center',justifyContent:'center',flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#a8a8a8',marginLeft:10,marginRight:10}}>
                    <View style={{height:30,width:30,borderWidth:2,borderColor:'green'}}></View>
                    <Text style={{marginLeft:15,color:'white',marginRight:80}}>Downloads</Text>
                </View>
                <View style={{height:40,width:'70%',backgroundColor:'transparent', marginTop:10,alignItems:'center',justifyContent:'center',flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#a8a8a8',marginLeft:10,marginRight:10}}>
                    <View style={{height:30,width:30,borderWidth:2,borderColor:'green'}}></View>
                    <Text style={{marginLeft:15,color:'white',marginRight:70}}>Notifications</Text>
                </View>
                <View style={{height:40,width:'70%',backgroundColor:'transparent', marginTop:10,alignItems:'center',justifyContent:'center',flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#a8a8a8',marginLeft:10,marginRight:10}}>
                    <View style={{height:30,width:30,borderWidth:2,borderColor:'green'}}></View>
                    <Text style={{marginLeft:15,color:'white',marginRight:90}}>Referrals</Text>
                </View>
                <View style={{height:40,width:'70%',backgroundColor:'transparent', marginTop:10,alignItems:'center',justifyContent:'center',flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#a8a8a8',marginLeft:10,marginRight:10}}>
                    <View style={{height:30,width:30,borderWidth:2,borderColor:'green'}}></View>
                    <Text style={{marginLeft:15,color:'white',marginRight:85}}>Share app</Text>
                </View>
                <View style={{height:40,width:'70%',backgroundColor:'transparent', marginTop:10,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                    <View style={{height:30,width:30,borderWidth:2,borderColor:'red'}}></View>
                    <Text style={{marginLeft:15,color:'red',marginRight:100,fontWeight:'bold',fontSize:16}}>Logout</Text>
                </View>

                <TouchableHighlight style={{height:40,width:'60%',borderWidth:2,borderColor:'green',alignItems:'center',justifyContent:'center',marginTop:50,borderRadius:5}}>
                    <Text style={{color:'green',fontWeight:'bold'}}>Enquire now</Text>
                </TouchableHighlight>

            </View>
        )
    }
}

const styles=StyleSheet.create(
    {
        container:{
            height:'100%',
            width:'100%',
            backgroundColor:'#0a0a38',
            alignItems:'center',
        }
    }
)
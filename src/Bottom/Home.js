import Icon  from "react-native-vector-icons/MaterialIcons";

import App from '../DropDown/Dropdown'
import React,{Component} from "react";
import{
    View,
    StyleSheet,
    ScrollView,
    Text,
    TouchableHighlight,
    Image,
    TouchableOpacity
}from 'react-native';





export default class Home extends Component{
    render(){
        return(
                 <View style={styles.container}>

                    <View style={styles.topContainer}>

                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('Drawer')} style={{height:30,width:30,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#a8a8a8',marginLeft:20}}>
                        <Icon  name="grid-view" size={20} color='green'></Icon>
                    </TouchableHighlight>

                    

                    <Image style={{height:'45%',width:'32%',marginLeft:10}} source={require('../../assets/main_logo.png')}></Image>

                    <TouchableHighlight style={{height:35,width:92,justifyContent:'center',borderWidth:1,borderColor:'green',marginLeft:85,borderRadius:5}}>
                    <View style={{flexDirection:'row'}}>
                            {/* <Icon style={{marginLeft:5}} name="grid-view" size={20} color='green'></Icon> */}
                            <Image style={{height:18,width:18,marginLeft:5,marginTop:1}} source={require('../../assets/circle.jpg')}></Image>
                            <Text style={{marginLeft:5,fontSize:14}}>Classes</Text>
                    </View>
                    </TouchableHighlight>
                    </View>

                    <ScrollView style={{height:'100%',width:'100%'}}>

                        <View style={styles.scrollChildView}>
                            
                            

                           

                            <Text style={{color:'black',marginRight:270,fontSize:14,marginTop:10}}>Goodmorning</Text>
                            <Text style={{color:'black',fontSize:20,fontWeight:'bold',marginRight:240}}>Aaron Taylor</Text>

                            <View style={styles.plusTwoAndScienceContainer}>
                                <App></App>
                            </View>

                            <View style={{height:80,width:'100%'}}>
                                <ScrollView horizontal={true} style={{height:'100%',width:'100%'}}>
                                
                                    <View style={{flexDirection:'row',paddingLeft:20,paddingRight:20,width:'100%',justifyContent:'center'}}>
                                        <View style={styles.courses}>
                                            <Image style={{height:20,width:20,marginLeft:5}} source={require('../../assets/circle.jpg')}></Image>
                                            <Text style={{marginLeft:5,fontWeight:'bold',color:'black',marginRight:8}} onPress={()=>this.props.navigation.navigate('Biology')}>Biology</Text>
                                        </View>
                                        <View style={styles.courses2}>
                                            <Image style={{height:20,width:20,marginLeft:5}} source={require('../../assets/circle.jpg')}></Image>
                                            <Text style={{marginLeft:5,fontWeight:'bold',color:'black',marginRight:8}}>Physics</Text>
                                        </View>
                                        <View style={styles.courses2}>
                                            <Image style={{height:20,width:20,marginLeft:5}} source={require('../../assets/circle.jpg')}></Image>
                                            <Text style={{marginLeft:5,fontWeight:'bold',color:'black',marginRight:8}}>Maths</Text>
                                        </View>
                                        <View style={styles.courses2}>
                                            <Image style={{height:20,width:20,marginLeft:5}} source={require('../../assets/circle.jpg')}></Image>
                                            <Text style={{marginLeft:5,fontWeight:'bold',color:'black',marginRight:8}}>Chemistry</Text>
                                        </View>
                                        <View style={styles.courses2}>
                                            <Image style={{height:20,width:20,marginLeft:5}} source={require('../../assets/circle.jpg')}></Image>
                                            <Text style={{marginLeft:5,fontWeight:'bold',color:'black',marginRight:8}}>Chemistry</Text>
                                        </View>
                                    </View>
                                 </ScrollView>
                            </View>

                            <Text style={{color:'black',marginRight:250}}>Recent courses</Text>
                            
                            <View style={{height:160,width:'100%',marginLeft:20,paddingLeft:10}}>
                                <ScrollView horizontal={true} style={{height:'100%',width:'100%'}}>

                                    <View style={{flexDirection:'row'}}>
                                        <View style={styles.courseTitle}>
                                            <Image style={{height:'100%',width:'100%',borderRadius:8}} source={require('../../assets/courses.png')}></Image>
                                        </View>
                                        <View style={styles.courseTitle2}>
                                            <Image style={{height:'100%',width:'100%',borderRadius:8}} source={require('../../assets/courses.png')}></Image>
                                        </View>
                                        <View style={styles.courseTitle2}>
                                            <Image style={{height:'100%',width:'100%',borderRadius:8}} source={require('../../assets/courses.png')}></Image>
                                        </View>
                                        <View style={styles.courseTitle2}>
                                            <Image style={{height:'100%',width:'100%',borderRadius:8}} source={require('../../assets/courses.png')}></Image>
                                        </View>
                                    </View>

                                </ScrollView>
                            </View>

                            <View style={{height:500,width:'100%',paddingBottom:30}}>

                            <ScrollView horizontal={true} style={{height:'100%',width:'100%'}}>

                                <View style={{flexDirection:'row',paddingLeft:20,paddingRight:20}}>
                                    <View style={styles.bottomContainer}>
                                        <View style={{height:100,width:100,borderRadius:50,backgroundColor:'#3c5f6e',marginLeft:40,marginTop:40}}></View>
                                        <Text style={{fontSize:20,color:'#fff',fontWeight:'bold',marginLeft:40,marginTop:20}}>Target live classes</Text>
                                        <Text style={{color:'#70848c',paddingLeft:40,paddingRight:30,marginTop:10}}>Live classes by best teachers from LearningHub to clear your doubts and to provde individual attention</Text>
                                        <TouchableHighlight style={styles.btn}>
                                                <Text style={{color:'white',fontWeight:'bold'}}>Book a free class</Text>
                                        </TouchableHighlight>
                                    </View>
                                    <View style={styles.bottomContainer2}>
                                        <View style={{height:100,width:100,borderRadius:50,backgroundColor:'#3c5f6e',marginLeft:40,marginTop:40}}></View>
                                        <Text style={{fontSize:20,color:'#fff',fontWeight:'bold',marginLeft:40,marginTop:20}}>Avail free online counselling section</Text>
                                        <Text style={{color:'#70848c',paddingLeft:40,paddingRight:30,marginTop:10}}>By learningHub's career experts</Text>
                                        <TouchableHighlight style={styles.btn2}>
                                                <Text style={{color:'white',fontWeight:'bold'}}>Schedule a call</Text>
                                        </TouchableHighlight>
                                    </View>
                                </View>

                        </ScrollView>

                            </View>


                           
                           
                        </View>
        
                    </ScrollView>

                    {/* <View style={styles.bottomNavigation}>
                        <Icon name="house" size={15} color='green'></Icon>
                        <Icon name="play-arrow" size={15} color='gray'></Icon>
                        <Text onPress>Resent</Text>
                        <Icon name="description" size={15} color='gray'></Icon>
                        <Text>Exams</Text>
                        <Icon name="account-box" size={15} color='gray'></Icon>
                        <Text>Profile</Text>
                        <Icon name="mail" size={15} color='gray'></Icon>
                        <Text>Contact</Text>
                    </View> */}
                   
                   
                 </View>
          
        )
    }
}


const styles=StyleSheet.create(
    {
        container:{
            height:'100%',
            width:'100%',
            backgroundColor:'white',
            flex:1,
            
        },
        scrollChildView:{
            width:'100%',
            alignItems:'center',
            justifyContent:'center'
        },
        topContainer:{
            height:60,
            width:'100%',
            backgroundColor:'white',
            marginTop:20,
            //justifyContent:'center',
            alignItems:'center',
            flexDirection:'row',
            marginBottom:10,
            borderColor:'#dbd7d7',
            borderBottomWidth:1
        },
        plusTwoAndScienceContainer:{
            height:60,
            width:'90%',
            backgroundColor:'#222152',
            marginTop:20,
            borderRadius:5 
        },
        courses:{
            height:40,
            width:'17%',
            backgroundColor:'white',
            marginTop:20,
            borderRadius:10,
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'row',
            borderWidth:2,
            borderColor:'black'
        },
        courses2:{
            height:40,
            width:'20%',
            backgroundColor:'white',
            marginTop:20,
            borderRadius:10,
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'row',
            borderWidth:2,
            borderColor:'black',
            marginLeft:10
        },
        scrollChildView2:{
            width:'100%',
            alignItems:'center',
            justifyContent:'center'
        },
        courseTitle:{
            height:150,
            width:250,
            backgroundColor:'orange',
            marginTop:10,
            borderRadius:5
        },
        courseTitle2:{
            height:150,
            width:250,
            backgroundColor:'orange',
            marginTop:10,
            borderRadius:5,
            marginLeft:10
        },
        bottomContainer:{
            height:400,
            width:280,
            backgroundColor:'#152e38',
            marginTop:20,
            borderRadius:8,
            marginBottom:20,elevation:10
        },
        bottomContainer2:{
            height:400,
            width:280,
            backgroundColor:'#152e38',
            marginTop:20,
            borderRadius:8,
            marginBottom:20,
            marginLeft:20,elevation:10
        },
        btn:{
            height:60,
            width:'60%',
            backgroundColor:'green',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:10,
            marginLeft:40,
            marginTop:20
        },
        btn2:{
            height:60,
            width:'60%',
            backgroundColor:'green',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:10,
            marginLeft:40,
            marginTop:40
        },
        bottomNavigation:{
            height:40,
            width:'69%',
            backgroundColor:'transparent',
            marginTop:5,
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'row',
            marginBottom:10,
            borderColor:'#dbd7d7',
            // borderBottomWidth:1,
            marginLeft:60,
            flexDirection:'row',
            borderRadius:10,
            // marginBottom:10,
            borderWidth:0,
            borderColor:'gray',
           
        },
        
    }
)
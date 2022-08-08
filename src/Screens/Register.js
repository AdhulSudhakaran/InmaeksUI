import Icon  from 'react-native-vector-icons/MaterialIcons';
import App from '../DropDown/Dropdown'


import React,{Component} from 'react';
import{
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    TouchableHighlight
}from 'react-native'



export default class Register  extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.container2}>
                    <Image style={styles.logo} source={require('../../assets/main_logo.png')}></Image>
                </View>

                {/* <View style={styles.container3}>
                   <Image style={styles.iconDown} source={require('../assets/logo.png')}></Image>
                </View> */}

                <Text style={{fontSize:18,fontWeight:'bold',color:'black', marginTop:40 ,marginBottom:1}}>Enter your mobile number</Text>
                <Text style={{marginBottom:10}}>We will send you an OTP to verify</Text>
                
                <View style={styles.bottomContainer}>
                    <TextInput style={styles.txt_inp} placeholder='Mobile Number' placeholderTextColor='#8a97ab'></TextInput>
                    <TextInput style={styles.txt_inp} placeholder='Email' placeholderTextColor='#8a97ab'></TextInput>
                    <App></App>
                    {/* <TextInput style={styles.txt_inp} placeholder='Select State' placeholderTextColor='#8a97ab'></TextInput> */}
                    <TextInput style={styles.txt_inp2} placeholder='Pin code' placeholderTextColor='#8a97ab'></TextInput>

                    <TouchableHighlight style={styles.btn}  underlayColor='white' onPress={()=>this.props.navigation.navigate('Schoolboard')}>
                        <Text style={styles.btn_txt}>Register</Text>
                    </TouchableHighlight>

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
            backgroundColor:'#fff',
            alignItems:'center',
            justifyContent:'center',
            flex:4
            
        },
        container2:{
            height:'30%',
            width:'100%',
            backgroundColor:'#fff',
            alignItems:'center',
            justifyContent:'center'
        },
        logo:{
            height:40,
            width:180,
            marginTop:20
        },
        container3:{
            height:'20%',
            width:'100%',
            backgroundColor:'#fff',
            alignItems:'center',
            justifyContent:'center'
        },
        iconDown:{
            height:100,
            width:100
        },
        bottomContainer:{
            height:'60%',
            width:'100%',
            backgroundColor:'#0c0f24',
            marginTop:1,
            borderTopEndRadius:15,
            borderTopLeftRadius:15,
            alignItems:'center',
            justifyContent:'center'
        },
        txt_inp:{
           // color:'white',
            backgroundColor:'#313a47',
            fontSize:16,
            height:50,
            width:'90%',
            borderRadius:8,
            paddingLeft:15,
            marginTop:20
        },
        txt_inp2:{
            // color:'white',
             backgroundColor:'#313a47',
             fontSize:16,
             height:50,
             width:'90%',
             borderRadius:8,
             paddingLeft:15,
            //marginTop:10
         },
        btn:{
            height:'13%',
            width:'90%',
            backgroundColor:'#00e348',
            alignItems:'center',
            justifyContent:'center',
            marginTop:30,
            borderRadius:5,
            marginBottom:30
        },
        btn_txt:{
            fontSize:16,
            color:'white',
            fontWeight:'bold',

        },
    }
)
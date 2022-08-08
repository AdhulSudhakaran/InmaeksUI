import Icon  from 'react-native-vector-icons/MaterialIcons';
import React,{Component} from 'react';
import{
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    TouchableHighlight
}from 'react-native'

export default class OTP  extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.container2}>
                    <Image style={styles.logo} source={require('../../assets/inmakes.webp')}></Image>
                </View>

                <View style={styles.container3}>
                   <Image style={styles.iconDown} source={require('../../assets/logo.png')}></Image>
                </View>

                <Text style={styles.txt1}>Verification Code</Text>
                <Text>Please type the varification code send to</Text>
                <Text style={{fontSize:16,color:'black', marginTop:20}}>+91 {this.props.route.params.mobileNumber}</Text>


                <View style={styles.bottomContainer}>

                    <View style={styles.otpContainer}>
                        <TextInput backgroundColor='#313a47' style={{height:40,width:40,marginBottom:10}} maxLength={1}></TextInput>
                        <TextInput backgroundColor='#313a47' style={{height:40,width:40,marginBottom:10,marginLeft:5}} maxLength={1}></TextInput>
                        <TextInput backgroundColor='#313a47' style={{height:40,width:40,marginBottom:10,marginLeft:5}} maxLength={1}></TextInput>
                        <TextInput backgroundColor='#313a47' style={{height:40,width:40,marginBottom:10,marginLeft:5}} maxLength={1}></TextInput>
                        <TextInput backgroundColor='#313a47' style={{height:40,width:40,marginBottom:10,marginLeft:5}} maxLength={1}></TextInput>
                        <TextInput backgroundColor='#313a47' style={{height:40,width:40,marginBottom:10,marginLeft:5}} maxLength={1}></TextInput>
                    </View>

                    <TouchableHighlight style={styles.btn_obj} onPress={()=>this.props.navigation.navigate('Register')}>
                        <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Resend OTP</Text>
                    </TouchableHighlight>
                    <Text style={{color:'#8a97ab', fontSize:11,marginTop:10}}>Resend after 28s</Text>

                    <View style={styles.contactUs}>
                        <Icon name='call' size={14} color='#00e348'></Icon>
                        <Text style={{fontSize:14,color:'#00e348', marginLeft:5,fontWeight:'bold'}}>Contact Us</Text>

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
            backgroundColor:'#fff',
            alignItems:'center',
            justifyContent:'center'
            
        },
        container2:{
            height:'30%',
            width:'100%',
            backgroundColor:'#fff',
            alignItems:'center',
            justifyContent:'center'
        },
        logo:{
            height:50,
            width:200
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
        txt1:{
            fontSize:18,
            color:'black',
            fontWeight:'bold',
            marginTop:20
        },
        bottomContainer:{
            height:'30%',
            width:'100%',
            backgroundColor:'#0c0f24',
            marginTop:40,
            borderTopEndRadius:15,
            borderTopLeftRadius:15,
            alignItems:'center',
            justifyContent:'center'
        },
        btn_obj:{
            height:40,
            width:'70%',
            backgroundColor:'#00e348',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:8,
            marginTop:5
        },
        otpContainer:{
            flexDirection:'row'
        },
        contactUs:{
            height:'20%',
            width:'100%',
           // backgroundColor:'orange',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            marginTop:20
        }
        
        
    }
)
import React , {Component} from 'react'
import{
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    Image
} from 'react-native'


export default class Firstpage extends Component{

    constructor(){
        super();
        this.state={
            number:null
        }
    }

    passValue(mobileNumber){
        console.log(mobileNumber)
        this.setState({number:mobileNumber})
    }
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../assets/main_logo.png')}></Image>

                <Text style={styles.txt1}>Enter your mobile number</Text>
                <Text>We will send you an OTP to verify</Text>

                <View style={styles.bottomContainer}>

                    <View style={styles.mobileContainer}>
                        {/* <Text style={styles.countryCode}>+91</Text> */}
                        <TextInput placeholder='+91' style={styles.countryCode} placeholderTextColor='white'></TextInput>
                        <TextInput keyboardType='numeric' style={styles.txt_inp} placeholder='Mobile Number' maxLength={10} placeholderTextColor='#8a97ab' onChangeText={(mobileNumber)=>this.passValue(mobileNumber)}></TextInput>

                    </View>

                    <TouchableHighlight style={styles.btn}  underlayColor='white' onPress={()=>this.props.navigation.navigate('OTP',{mobileNumber:this.state.number})}>
                        <Text style={styles.btn_txt}>Continue</Text>
                    </TouchableHighlight>
                </View>
                

            </View>
        )
    }
}

const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            height:'100%',
            width:'100%',
            backgroundColor:'#fff',
            alignItems:'center',
            justifyContent:'flex-end'
        },
        logo:{
            height:40,
            width:180
        },
        txt1:{
            fontSize:18,
            fontWeight:'bold',
            color:'#000',
            marginTop:150
        },
        bottomContainer:{
            height:'25%',
            width:'100%',
            backgroundColor:'#0c0f24',
            marginTop:30,
            borderTopEndRadius:15,
            borderTopLeftRadius:15,
            alignItems:'center',
            justifyContent:'center'
        },
        btn:{
            height:'25%',
            width:'84%',
            backgroundColor:'#00e348',
            alignItems:'center',
            justifyContent:'center',
            marginTop:15,
            borderRadius:5
        },
        btn_txt:{
            fontSize:16,
            color:'white',
            fontWeight:'bold',

        },
        mobileContainer:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center'
        },
        txt_inp:{
            height:40,
            width:'68%',
            textAlign:'center',
            marginLeft:10,
            backgroundColor:'#313a47',
            borderRadius:5
           
        },
        countryCode:{
            height:38,
            width:'10%',
            backgroundColor:'#313a47',
           textAlign:'center',
            color:'white',
            fontSize:16,
            borderRadius:5,
            justifyContent:'center'
            
            
        }
    }
)
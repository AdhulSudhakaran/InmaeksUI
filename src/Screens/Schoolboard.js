//import Icon  from 'react-native-vector-icons/MaterialIcons';
//import { MultiSelect } from 'multiselect-react-dropdown';



import React,{Component} from 'react';
import{
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    TouchableHighlight
}from 'react-native'



export default class Schoolboard  extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.container2}>
                    <Image style={styles.logo} source={require('../../assets/inmakes.webp')}></Image>
                </View>

                <View style={styles.container3}>
                   <Image style={styles.iconDown} source={require('../../assets/logo.png')}></Image>
                </View>

                <Text style={{fontSize:18,fontWeight:'bold',color:'black', marginTop:20}}>Select your school board</Text>
                
                <View style={styles.bottomContainer}>
                    <TextInput style={styles.txt_inp} placeholder='Select Board' placeholderTextColor='#8a97ab'></TextInput>
                    
                    <TextInput style={styles.txt_inp} placeholder='Select Class' placeholderTextColor='#8a97ab'></TextInput>
                   

                    <TouchableHighlight style={styles.btn}  underlayColor='white' onPress={()=>this.props.navigation.navigate('Fractionalshares')}>
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
        bottomContainer:{
            height:'42%',
            width:'100%',
            backgroundColor:'#0c0f24',
            marginTop:20,
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
            marginTop:10
        },
        btn:{
            height:50,
            width:'90%',
            backgroundColor:'#00e348',
            alignItems:'center',
            justifyContent:'center',
            marginTop:30,
            borderRadius:5
        },
        btn_txt:{
            fontSize:16,
            color:'white',
            fontWeight:'bold',

        },
    }
)
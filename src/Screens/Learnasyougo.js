import React,{Component} from 'react';
import{
    View,StyleSheet,Image,Text,TouchableHighlight
}from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class Learnasyougo extends Component{
    render(){
        return(
            <View style={styles.container}>
               <View style={styles.imageContainer}>
                    <Image style={{width:'100%',height:'100%'}} source={require('../../assets/mobilescreen.webp')}></Image>

               </View>

               <Text style={{fontSize:18,color:'black', fontWeight:'bold', marginTop:50}}>Learn as you go</Text>
               <Text style={{padding:15}}>Download the Stockpile app and master the market with our mini-lesson</Text>

               <TouchableHighlight style={styles.btn} onPress={()=>this.props.navigation.navigate('Kidsandteens')}>
                    <View style={{height:50,width:50,backgroundColor:'green',alignItems:'center',justifyContent:'center',borderRadius:8,borderColor:'#cfcfcf',borderWidth:5}}>
                        <Icon name='arrow-forward' size={40} color='white'></Icon>
                    </View>
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
            backgroundColor:'white',
            alignItems:'center',
            justifyContent:'center'
        },
        imageContainer:{
            height:'60%',
            width:'95%',
            backgroundColor:'#cfcfcf',
            
        },
        btn:{
            height:20,
            width:40,
            marginTop:20,
            alignItems:'center',
            justifyContent:'center',
            marginTop:50,
            marginBottom:20,
            marginLeft:300
            
        },
        btn_img:{
            height:80,
            width:80
        }
    }
)
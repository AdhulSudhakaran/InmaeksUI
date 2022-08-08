import React,{Component} from 'react';
import{
    View,StyleSheet,Image,Text,TouchableHighlight
}from 'react-native';



export default class Anothertitlepage   extends Component{
    render(){
        return(
            <View style={styles.container}>
               <View style={styles.imageContainer}>
                    <Image style={{width:'100%',height:'100%'}} source={require('../../assets/mobilescreen.webp')}></Image>

               </View>

               <Text style={{fontSize:18,color:'black', fontWeight:'bold', marginTop:50}}>Another title page</Text>
               <Text style={{padding:15}}>Kids and teens can track their stocks 24/7 and place trades that you approve</Text>

               <TouchableHighlight style={styles.btn} onPress={()=>this.props.navigation.navigate('BottomTab')} underlayColor='white'>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'black',marginRight:20}}>Done</Text>
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
            width:'90%',
            marginTop:20,
            alignItems:'flex-end',
            justifyContent:'center',
            marginTop:50,
            marginBottom:20,
            
        },
        btn_img:{
            height:80,
            width:80
        }
    }
)
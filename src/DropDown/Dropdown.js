import React,{useState} from 'react';
import{View,StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

function App(){

    const [pickerValue,setPickerValue]=useState('Javascript')
    return(
        <View style={styles.container}>

        <Picker style={styles.picker} selectedValue={pickerValue} onValueChange={(itemValue)=>setPickerValue(itemValue)} dropdownIconColor='white'>
            <Picker.Item label="Select state" value="Javascript"></Picker.Item>
            <Picker.Item label="Kerala" value="Kerala"></Picker.Item>
            <Picker.Item label="Karnataka" value="Karnataka"></Picker.Item>
            <Picker.Item label="Kerala" value="Kerala"></Picker.Item>
            <Picker.Item label="Karnataka" value="Karnataka"></Picker.Item>
            <Picker.Item label="Kerala" value="Kerala"></Picker.Item>
            <Picker.Item label="Karnataka" value="Karnataka"></Picker.Item>

        </Picker>

    </View>
    )
}







const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        },
        picker:{
            width:350,
            height:5,
            borderColor:'blue',
            borderWidth:5,
            backgroundColor:'#313a47',
            color:'#8a97ab'
            
        }
    }
)
export default App
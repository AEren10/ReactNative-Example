import { Button } from "react-native";
import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const DeviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container:{
        padding:10,
        flex:1,
    },
    card:{
        padding:10,
    },  
    image:{
        width:'auto',
        height:DeviceSize.height/3,
        borderRadius:5,
    },
    inner_card:{
        borderBottomColor:'grey',
        borderBottomWidth:1,
    },
    text:{
        fontWeight:'bold',
        fontStyle:'italic',
        fontSize:25,
        textAlign:'center',
        margin:10,
    },
    area:{
        fontWeight:'bold',
        fontStyle:'italic',
        fontSize:18,
        textAlign:'center',
        marginBottom:10,
        color:'red',
    },
    desc:{
        textAlign: 'justify',
        fontSize:20,
        marginTop:10,
    },
    button:{
        width:'100%',
        height:40,
        margin:15,
        padding:10,
        borderRadius:5,
        borderWidth:0.5,
        backgroundColor:'red',   
    }
  
})


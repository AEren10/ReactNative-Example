import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'orange',
        padding:10,
    },
    card:{
        borderWidth:'grey',
        borderBottomLeftRadius:100,
        borderTopLeftRadius:100, 
        backgroundColor:'white',
        flexDirection:'row',
        padding:8,    
        flex:1,
        alignItems:'center',
    },
    image:{
        width:100,
        height:100,
        borderRadius:50,
    },
    text:{
        marginLeft:12,
        fontSize:30,
        
    }    

})


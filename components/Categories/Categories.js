import react from "react";
import { StyleSheet,View,Text,Image,TouchableWithoutFeedback } from "react-native";
import styles from './Categories.style'

function Categories({categories,onSelect}){
    
    return(
    <TouchableWithoutFeedback onPress={onSelect}>
        <View style = {styles.container}>
            <View style = {styles.card}>
                <Image
                    style = {styles.image}
                    source={{uri:categories.strCategoryThumb}}
                />
                <Text style = {styles.text}> {categories.strCategory} </Text>
            </View>
            
        </View> 
    </TouchableWithoutFeedback>
   )
}

export default Categories;
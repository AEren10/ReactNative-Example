import react from "react";
import { StyleSheet,View,Text,Image,TouchableWithoutFeedback,ImageBackground } from "react-native";
import styles from './Card.style'

function Card({meals,onSelect}){
    
    return(
    <TouchableWithoutFeedback onPress={onSelect}>
        <View style = {styles.container}>
            <View style={styles.inner_conteiner}>
                <ImageBackground  style = {styles.image}
                    source={{uri:meals.strMealThumb}}  >

                    <View style={styles.textContainer}>
                        <Text style = {styles.text}> {meals.strMeal} </Text>
                   </View>
                </ImageBackground>
            </View>
            
        </View> 
    </TouchableWithoutFeedback>
   )
}

export default Card;
import React from 'react'
import { FlatList,View,Text,Image,Button } from "react-native";
import UseFetch from "../../components/Hooks/UseFetch";
import styles from './Detail.style'
import { ScrollView } from 'react-native-gesture-handler';


function Detail({route}){

    const{id} = route.params;

    const DetailsUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='

    const data = UseFetch(`${DetailsUrl}${id}`);  

        
    if(!data || data?.meals?.lenght<=0){
        return null
    }
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style = {styles.container}>
                <View style = {styles.card}>
                    <Image
                        style = {styles.image}
                        source={{uri:data.meals[0].strMealThumb}}
                    />
                    <View style = {styles.inner_card}>
                        <Text style = {styles.text}> {data.meals[0].strMeal} </Text>
                        <Text style = {styles.area}>  {data.meals[0].strArea} </Text>
                    </View>
                    <Text style = {styles.desc}>  {data.meals[0].strInstructions} </Text>     
                </View>
                <Button style = {styles.button} title='Watch YouTube' onPress={null} />
            </View> 
        </ScrollView>
    ) 
        
    
}

export default Detail;


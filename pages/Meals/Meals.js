import React from 'react'
import { FlatList,View } from "react-native";
import UseFetch from "../../components/Hooks/UseFetch";
import Card from '../../components/Card/Card';

function Meal({navigation,route}){
    const{category} = route.params;

    const MealsUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='

    const data = UseFetch(`${MealsUrl}${category}`);    
  
    const openDetails = (id) => {
        navigation.navigate('Details',{id})
    }

    render = ({item}) => <Card meals = {item} onSelect={() => openDetails(item.idMeal)}/>
    
    return(
        
        <FlatList
            data={data.meals} //usefetch list olarak dönüyor apiyi
            renderItem={render}
        />  
    
    )
}

export default Meal;
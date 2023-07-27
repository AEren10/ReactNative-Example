import react from "react";
import axios from "axios";
import { FlatList,View } from "react-native";
import Categories from "../../components/Categories/Categories";
import UseFetch from "../../components/Hooks/UseFetch";

const CategoriesUrl = 'http://www.themealdb.com/api/json/v1/1/categories.php'

function Welcome({navigation}){

    const openMeals = (category) => {
        navigation.navigate('Meals',{category})
       
    }

    const data = UseFetch(CategoriesUrl);

    render = ({item}) => <Categories categories = {item} onSelect={ () => openMeals(item.strCategory)}/>
    
    return(

        <FlatList
            data={data.categories} //usefetch list olarak dönüyor apiyi
            renderItem={render}   
        />
      
    
    )
}

export default Welcome;
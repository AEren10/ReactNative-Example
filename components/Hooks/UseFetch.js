import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url){

    const [list, setlist] = useState('');

    const Fetch = async () => {

        const response = await axios.get(url)

        setlist(response.data)
    }

    useEffect(() => {
        Fetch();
      return () => {
        
      }
    }, )
        
    return(list)
}

export default useFetch;
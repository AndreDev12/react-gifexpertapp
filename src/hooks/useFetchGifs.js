import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect( () => {
        getGifs(category)
            .then(imgs => {
                // console.log(imgs);
                    // console.log(imgs);// Array de objetos {id, title, url}
                    setState({
                        data: imgs,// data: [...imgs]
                        loading: false,
                    })
            })
        }, [category]);
        
    // console.log(state);
    return state; // { data: [], loading: true }
}
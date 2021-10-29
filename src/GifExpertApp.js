import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GifExpertApp = () => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball Z'];
    const [categories, setCategories] = useState(['Neon evangelion']);

    // const handledAdd = () => {
        
    //     setCategories(['Neon Génesis Evangelion', ...categories]);
    //     console.log(categories);
    // };
    // console.log(categories);
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories} />
            <hr/>
            {/* <button onClick={handledAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map( category => {
                        return <GifGrid
                            category = { category }
                            key = { category }
                        />
                    })
                }
            </ol>
        </>
    )
};

export default GifExpertApp;
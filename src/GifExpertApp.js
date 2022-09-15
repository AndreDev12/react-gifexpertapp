import { useState } from 'react';

import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Neon evangelion']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories} />
            <hr/>
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
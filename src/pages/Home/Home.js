import { useEffect, useState } from 'react';

import { collection, getDocs } from "firebase/firestore";
import {db} from '../../firebase/config'
import RecipeList from '../../Components/RecipeList'

import "./Home.css";
import { useCollection } from '../../hooks/useCollection';

export default function Home(){

    const { collectionData: data, isLoading, error } = useCollection("recipes");

    return(
        <div className='home'>
            {error && <p className='error'>{error}</p>}
            {isLoading && <p className='loading'>Loading...</p>}
            {data && <RecipeList  recipes={data}/>  } 
        </div>
    )
}
import { useState } from 'react'
import './Create.css'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase/config'

export default function Create(){
    const [title,setTitle]=useState('')
    const [method,setMethod]=useState('')
    const [cookingTime,setCookingTime]=useState('')
    const [newingredient,setNewingredient]=useState('')
    const [ingredients,setIngredients]=useState([])
    
    const navigate=useNavigate()

    const handelSubmit= async(e) =>{
        e.preventDefault()

        const doc = ({ title, ingredients, method, cookingTime: cookingTime + 'minutes' })
        
        try {

            const ref = collection(db, 'recipes')
            await addDoc(ref, doc)
            navigate('/')
        }
        catch (err) {
            console.log(err);
        }
    }

    const handelAdd=(e)=>{
        e.preventDefault()

        if(newingredient && !ingredients.includes(newingredient)){
            setIngredients(previngredients=> [...previngredients,newingredient])
        }
        setNewingredient('')
    }

    return(
        <div className='create'>
            <h2 className='page-title'>Add a New Recipe</h2>

            <form onSubmit={handelSubmit}>
                <label>
                    <span>Recipe Title:</span>
                    <input
                      type='text'
                      onChange={(e)=> setTitle(e.target.value)}
                      value={title}
                      required
                    />
                </label>

                <label>
                    <span>Recipe Method:</span>
                    <textarea 
                      onChange={(e) => setMethod(e.target.value)}
                      value={method}
                      required
                    />
                </label>

                <label>
                    <span>Recipe ingredients:</span>
                    <div className='ingredients'>
                        <input type='text' 
                        onChange={(e)=> setNewingredient(e.target.value)}
                        value={newingredient}
                        />
                        <button  onClick={handelAdd} className='btn'>Add</button>
                    </div>
                </label>
                <p>Current Ingredients: {ingredients.map(i=> <em key={i}>{i}, </em>)}</p>

                

                <label>
                    <span>Cooking Time (m)</span>
                    <input 
                      type='number'
                      onChange={(e) => setCookingTime(e.target.value)}
                      value={cookingTime}
                      required
                    />
                </label>

                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}
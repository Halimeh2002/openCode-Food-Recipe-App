import { Link } from 'react-router-dom'
import './RecipeList.css'
import { useTheme } from '../hooks/useTheme';
import deleteIcon from '../accest/delete-icon.svg'
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config';


export default function RecipeList({ recipes }) {

  const { mode } = useTheme()

  
  const handleClick = async(id) => {
    try {
      const ref = doc( db, 'recipes', id)
      await deleteDoc(ref)
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <img
            className='delete'
            src={deleteIcon}
            onClick={()=>{handleClick(recipe.id)}}
          /> 
        </div>
      ))}
    </div>
  );
}
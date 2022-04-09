import React,{useNavigate} from 'react-router-dom'
import { Button, RecipeCard, RecipeHeader, RecipeImage } from './HomeStyles'

const RecipeCardComp = ({recipe}) => {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate("/details", {state:recipe})
    }
  return (
    <div>
        <RecipeCard>
            <RecipeHeader>
                {recipe.label}
            </RecipeHeader>
            <RecipeImage src={recipe.image} />
                <Button onClick={handleClick}>View More</Button>
        </RecipeCard>
    </div>
  )
}

export default RecipeCardComp
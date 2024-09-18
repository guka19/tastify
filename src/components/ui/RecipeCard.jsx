import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const RecipeCard = ({ recipe }) => {
    return (
        <div>
            <div>
                <img src={recipe.image} alt="recipe-image" />
            </div>
            <div className='flex flex-col items-center'>
                <span>{recipe.title}</span>
                <span>Ready in {recipe.readyInMinutes} Minutes</span>
                <span>{recipe.servings} Servings</span>
            </div>
        </div>
    )
}

export default RecipeCard
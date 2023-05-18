import { Recipe } from "../app/types/recipe.type";
import { useActions } from "../hooks/useActions";
import { Button } from "./button";
import { useSelector } from "react-redux";

interface RecipeItemProps {
  recipe: Recipe
}

export default function RecipeItem({ recipe }: RecipeItemProps) {
  const { favourites } = useSelector(state => state as any)

  const isExist = favourites.find((favourite: Recipe) => favourite.id === recipe.id)

  const { addFavourite } = useActions()

  return (
    <div className="flex flex-col mx-auto text-center mt-16 bg-slate-600 p-4 w-96 rounded-xl shadow-lg">
      <img className="mb-2 rounded-xl w-40 mx-auto rounded-xl" alt="recipe" src={recipe.image} />
      <h2 className="text-xl mb-2">{recipe.name}</h2>
      <p className="mb-2">{recipe.category}</p>
      <Button onClick={() => {addFavourite(recipe)}} variant="outline">
        {isExist ? "Remove from favourites" : "Add to favourites"}
      </Button>
    </div>
  )
}
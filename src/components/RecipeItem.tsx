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
    <div className="flex flex-col mx-auto text-center mt-16">
      <h2 className="text-xl mb-2">{recipe.title}</h2>
      <img className="mb-2 rounded-xl w-40 mx-auto rounded-xl" alt="recipe" src={recipe.image} />
      <p className="mb-2">{recipe.description}</p>
      <Button onClick={() => {addFavourite(recipe)}} variant="outline">
        {isExist ? "Remove from favourites" : "Add to favourites"}
      </Button>
    </div>
  )
}
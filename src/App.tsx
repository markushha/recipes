import { Recipe } from "./app/types/recipe.type";
import Navbar from "./components/Navbar";
import RecipeItem from "./components/RecipeItem";
import { useGetRecipesQuery } from "./redux/api/recipes/recipes.api";

function App() {
  const { data, isLoading } = useGetRecipesQuery();

  const recipes = data || [];

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-[100vh] w-[100%] text-2xl lg:text-5xl text-slate-200 text-center">
        Loading...
      </div>
    );

  return (
    <>
      <Navbar />
      <div className="flex my-20 items-center flex-col justify-center w-[100%]">
        {recipes.map((recipe: Recipe) => (
          <RecipeItem recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </>
  );
}

export default App;

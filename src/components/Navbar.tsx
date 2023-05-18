import { MdFavorite } from "react-icons/md";
import { BiMessageSquareAdd } from "react-icons/bi";

import { useSelector } from "react-redux";
import { useState } from "react";

import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Recipe } from "../app/types/recipe.type";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "./dialog";
import { Input } from "./input";
import { Button } from "./button";
import { useToast } from "./use-toast";

import { useCreateRecipeMutation } from "../redux/api/recipes/recipes.api";
import { defaultRecipe } from "../hooks/default.values";

function Navbar() {
  const { favourites } = useSelector((state) => state as any);
  const { toast } = useToast();

  const [createRecipe, result] = useCreateRecipeMutation();

  const [recipe, setRecipe] = useState<Recipe>(defaultRecipe);

  const addRecipe = () => {
    if (!recipe.name || !recipe.category || !recipe.image)
      return toast({
        title: "Please, fill all fields",
      });

    createRecipe(recipe).then(() => {
      toast({
        title: "Recipe added successfully",
      });
      setRecipe(defaultRecipe);
    });
    console.log(result.status)
  };

  const onEnterDown = (e: any) => {
    if (e.key === "Enter") {
      addRecipe();
    }
  };

  return (
    <Dialog>
      <div className="w-[100%] fixed top-0 left-0 p-4 bg-slate-900 border-b-2 border-slate-600 shadow-md">
        <div className="flex items-center justify-between mx-auto w-[70%] h-[30px]">
          <h2 className="text-xl lg:text-2xl text-slate-500 font-bold mr-auto">
            Recipes.com
          </h2>
          <div className="ml-auto flex items-center justify-center">
            <DialogTrigger>
              <BiMessageSquareAdd size={24} className="mr-3" />
            </DialogTrigger>
            <DialogContent onKeyDown={onEnterDown} className="font-medium">
              <DialogHeader>
                <DialogTitle className="text-slate-200 text-xl lg:text-2xl">
                  Add Recipe
                </DialogTitle>
                <DialogDescription className="text-slate-400 text-md">
                  Add new recipe to your list by just clicking 3 times!
                </DialogDescription>
              </DialogHeader>
              <div className="">
                <Input
                  onChange={(e) =>
                    setRecipe({ ...recipe, name: e.target.value })
                  }
                  value={recipe.name}
                  className="mb-4"
                  type="text"
                  placeholder="Recipe Name"
                />
                <Input
                  onChange={(e) =>
                    setRecipe({ ...recipe, category: e.target.value })
                  }
                  value={recipe.category}
                  className="mb-4"
                  type="text"
                  placeholder="Recipe Category"
                />
                <Input
                  onChange={(e) =>
                    setRecipe({ ...recipe, image: e.target.value })
                  }
                  value={recipe.image}
                  type="text"
                  placeholder="Image URL"
                />
              </div>
              <DialogFooter>
                <Button onClick={addRecipe} type="submit">
                  Add new recipe
                </Button>
              </DialogFooter>
            </DialogContent>
            <Popover>
              <PopoverTrigger>
                <MdFavorite size={24} />
              </PopoverTrigger>
              <PopoverContent>
                <div className="flex flex-col items-center justify-center w-80">
                  <h2 className="text-xl text-slate-500 font-bold">
                    You have {favourites.length} favourites
                  </h2>
                  {favourites.map((favourite: Recipe) => (
                    <div className="mt-2 text-slate-500 font-medium">
                      {favourite.name}
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default Navbar;

import { MdFavorite } from "react-icons/md";
import { useSelector } from "react-redux";

import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Recipe } from "../app/types/recipe.type";

function Navbar() {
  const { favourites } = useSelector((state) => state as any);

  return (
    <div className="w-[100%] fixed top-0 left-0 p-4 bg-slate-900 border-b-2 border-slate-600 shadow-md">
      <div className="flex items-center justify-between mx-auto w-[70%] h-[30px]">
        <h2 className="text-2xl text-slate-500 font-bold mr-auto">
          Recipes.com
        </h2>
        <div className="ml-auto flex items-center justify-center">
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
  );
}

export default Navbar;

import Navbar from "./components/Navbar";
import RecipeItem from "./components/RecipeItem";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex my-20 items-center flex-col justify-center w-[100%]">
        <RecipeItem
          recipe={{
            title: "Pasta",
            id: 1,
            description: "Yummy as hell",
          }}
        />
        <RecipeItem
          recipe={{
            title: "Pizza",
            id: 2,
            description: "Hot as hell",
          }}
        />
        <RecipeItem
          recipe={{
            title: "Lasagna",
            id: 3,
            description: "Yummy as Lasagna, but not as hell",
          }}
        />
        <RecipeItem
          recipe={{
            title: "Burger",
            id: 4,
            description: "Mmmmm, this burger is so good, but not as hell",
          }}
        />
        <RecipeItem
          recipe={{
            title: "KFC Chicken",
            image: "https://tb-static.uber.com/prod/image-proc/processed_images/8fe82646a8a3f13b36e996a83752c618/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
            id: 5,
            description: "Fried Chicken in Tastest way",
          }}
        />
      </div>
    </>
  );
}

export default App;

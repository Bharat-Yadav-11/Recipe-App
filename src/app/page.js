import Link from "next/link";

async function fetchRecipeImg() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/recipes");
    const data = await apiResponse.json();

    const randomIndex = Math.floor(Math.random() * data.recipes.length);
    return data.recipes[randomIndex];

  } catch (e) {
    throw new Error(e);
  }
}

export default async function Home() {

  const recipeImg = await fetchRecipeImg();

  return (
    
    <div className="grid m-0 grid-rows-[20px_1fr_20px] items-center overflow-x-hidden h-[100vh] w-[100%] justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[#2563EA]">
      <div className="w-[92%] h-[90vh] mt-14 sm:w-[90%] md:w-[80%] lg:w-[70%] bg-white md:h-[70vh] absolute flex flex-col items-center md:items-start justify-center p-5 md:p-10 rounded-2xl text-center md:text-left">

        <h1 className="relative md:bottom-24 bottom-8 text-xl font-bold">Food<span className="text-blue-500">Lovers</span></h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          Learn. Cook. Share.<br />Cooking Made Easy
        </h1>
        <p className="w-full md:w-[50%] text-lg sm:text-xl text-gray-700 font-semibold mt-4">
          Say goodbye to long and frustrating food blogs and recipe videos. Access our recipe card to prepare a dish in minutes.
        </p>
        <Link href={'/recipe-list'} className="underline text-blue-700 mt-4">
          Go to Recipe List
        </Link>
        <div className="md:absolute items-center justify-items-center mt-5 md:mt-0 md:top-1/2 md:right-10 md:transform md:-translate-y-1/2 w-full md:w-[40%]">
          <img
            src={recipeImg?.image} 
            alt={recipeImg?.name || "Recipe image"}
            className="h-52 md:h-full w-full md:w-full object-cover object-top rounded-xl shadow-lg"
          />
        </div>

      </div>
    </div>
  );
}

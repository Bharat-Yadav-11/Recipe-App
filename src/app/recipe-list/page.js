import RecipeList from "@/components/recipe-list";

async function fetchRecipeList() {
    try {
        const apiResponse = await fetch('https://dummyjson.com/recipes');
        const data = await apiResponse.json();

        return data?.recipes;

    } catch(e) {
        throw new Error(e);
    }
}

export default async function Recipe() {
    const recipeList = await fetchRecipeList();

    return <RecipeList recipeList={recipeList} />;
}
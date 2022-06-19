const recipeStorage = document.querySelector("#recipes");
const recipeSettings = document.querySelector("#recipe-number");

const columnCount = 6

function GetRecipesPerRow() {
    return recipeSettings.value;
}

ChangeRecipeView();

recipeSettings.addEventListener("input", ChangeRecipeView);

function ChangeRecipeView() {
    recipeStorage.innerHTML = "";
    recipeStorage.style.gridTemplateColumns = "repeat(" + GetRecipesPerRow() +",auto)";
    for (let i = 0; i < columnCount * GetRecipesPerRow(); i++) {
        const recipeDiv = document.createElement("div");
        const recipe = document.createElement("span");
        recipe.textContent = "This is a recipe";
        recipe.classList.add("recipe");
        recipeDiv.appendChild(recipe);
        recipeStorage.appendChild(recipeDiv);
        
    }
}


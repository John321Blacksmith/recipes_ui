
// Data Models
export interface Category{
    title: string
}


export interface User{
    nickname: string
    username: string
    email: string
    comments: Comment[]
    recipes: Recipe[]
}


export interface Comment{
    recipe: Recipe
    author: User
    content: string
    date_published: string
}


export interface Recipe{
    pk: number
    category: Category
    author: User
    title: string
    description: string
    date_published: number
    prep_time: number
    cook_time: number
    directions: string
    ingredients: Ingredient[]
}


export interface Ingredient{
    title: string
    recipe: Recipe
}


// Interfaces which provide models representation for different requests

// Interface for a common list of recipes
export interface IRecipesListResponse{
    comments_amount: number
    recipes: Recipe[]
}


// Interface for the category-oriented recipes 
export interface ICategoryRecipesResponse{
    category: Category
    comments_amount: number
    recipes: Recipe[]
}


// Interface for a single recipe object data
export interface IRecipeDetailResponse{
    recipe: Recipe
    comments: Comment[]
}


// Interface for searching a recipe or a group of recipes
export interface IRecipeSearchParams{
    title: string
    category: Category
}
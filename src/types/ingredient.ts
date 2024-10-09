export interface Ingredient {
    id: number;
    recipeId: number;
    measure?: string;
    qt?: number;
    ingredient: string;
}
import type { Taste } from '@/types/taste';

export interface Recipe {
    id: number;
    name: string;
    description?: string;
    prepTime: number;
    cookTime: number;
    serves: number;
    tasteId: number;
    imagePath?: string;
    taste?: Taste;
}
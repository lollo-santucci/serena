import { Image } from '@/types';

export interface Step {
    id: number;
    recipeId: number;
    step: string;
    specification?: string;
    images?: Image[];
 }
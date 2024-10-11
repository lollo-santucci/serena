import { Recipe } from '@/types';
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchRecipes(searchTerm: string = ''): Promise<Recipe[]> {
    try {
        const url = `${BASE_URL}/recipes?search=${encodeURIComponent(searchTerm)}`;
        const response = await fetch(url, {
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error('Errore durante il recupero delle ricette');
        }

        return await response.json();
    } catch (error) {
        console.error('Errore durante il recupero delle ricette:', error);
        return [];
    }
}

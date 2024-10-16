import { Recipe } from '@/types';
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchRecipes(searchTerm?: string, tasteId?: number): Promise<Recipe[]> {
    try {
        // Creiamo l'URL con eventuali parametri di query
        let url = `${BASE_URL}/recipes`;

        // Costruisci dinamicamente i parametri di query
        const queryParams = new URLSearchParams();
        if (searchTerm) {
            queryParams.append('search', searchTerm);
        }
        if (tasteId !== undefined) {
            queryParams.append('tasteId', tasteId.toString());
        }

        // Se ci sono parametri di query, aggiungili all'URL
        if (queryParams.toString()) {
            url += `?${queryParams.toString()}`;
        }

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

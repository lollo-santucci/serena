import { Tool } from '@/types';
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchTools(recipeId?: number): Promise<Tool[]> {
    try {
        // Creiamo l'URL con eventuali parametri di query
        let url = `${BASE_URL}/tools`;

        // Costruisci dinamicamente i parametri di query
        const queryParams = new URLSearchParams();
        if (recipeId !== undefined) {
            queryParams.append('recipeId', recipeId.toString());
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

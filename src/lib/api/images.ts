import { Image } from '@/types';
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchImages(stepId?: number[]): Promise<Image[]> {
    try {
        // Creiamo l'URL con eventuali parametri di query
        let url = `${BASE_URL}/images`;

        // Costruisci dinamicamente i parametri di query
        const queryParams = new URLSearchParams();
        if (stepId !== undefined && stepId.length > 0) {
            stepId.forEach(id => queryParams.append('stepId', id.toString()));
        }

        // Se ci sono parametri di query, aggiungili all'URL
        if (queryParams.toString()) {
            url += `?${queryParams.toString()}`;
        }

        const response = await fetch(url, {
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error('Errore durante il recupero delle immagini');
        }

        return await response.json();
    } catch (error) {
        console.error('Errore durante il recupero delle immagini:', error);
        return [];
    }
}

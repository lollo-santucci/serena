import { Taste } from '@/types'; 

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchTastes(): Promise<Taste[]> {
    try {
        const response = await fetch(`${BASE_URL}/tastes`, {
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error('Errore durante il recupero dei tastes');
        }

        return await response.json();
    } catch (error) {
        console.error('Errore durante il recupero dei tastes:', error);
        return [];
    }
}

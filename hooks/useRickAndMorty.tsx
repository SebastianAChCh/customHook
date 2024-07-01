import { useState } from 'react';

const LINK: string = 'https://rickandmortyapi.com/api/';

export const useRickAndMorty = (initialValue: string | null) => {
    const [error, setError] = useState<string | null>();
    const [loading, setLoading] = useState<boolean>();

    const getCharacters = async (page: string = '1') => {
        setLoading(true);
        const isPageNumber = Number(page);
        const isInitialValueNumber = Number(initialValue);

        if (!isNaN(isPageNumber) || !isNaN(isInitialValueNumber)) {
            try {
                const response = await fetch(`${LINK}character/?page=${page || initialValue}`, {
                    method: 'GET'
                });

                if (!response.ok) {
                    setLoading(false);
                    setError('There was an error getting the data');
                    return;
                }

                const data = await response.json();

                setLoading(false);
                return data;
            } catch (error) {
                console.error('Error:', error);
                setError('There was an error fetching the data');
                setLoading(false);
            }
        } else {
            setError('The value is not a number');
            setLoading(false);
        }
    };

    return { getCharacters, error, loading };
};
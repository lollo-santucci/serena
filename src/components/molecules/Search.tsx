'use client'

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import debounce from '@/lib/debounce';
import type { Recipe } from '@/types';
import { fetchRecipes } from '@/lib/api/recipes';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const fetchSuggestions = async (query: string) => {
    setIsLoading(true);
    const data = await fetchRecipes(query);
    setSuggestions(data);
    setIsLoading(false);
  };

  const debouncedFetchSuggestions = useCallback(debounce(fetchSuggestions, 300), []);

  useEffect(() => {
    if (searchTerm.length > 1) {
      debouncedFetchSuggestions(searchTerm);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, debouncedFetchSuggestions]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSuggestionClick = (tasteName: string, recipeName: string) => {
    router.push(`/${tasteName}/${recipeName}`);
  };

  return (
    <div className="flex flex-col items-center font-manuka-bold">
      <div className="flex items-center w-full max-w-md">
        <span style={{fontFamily: 'var(--font-inter-bold-italic)'}} className="text-h2 mx-2">(</span>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="cerca ricetta"
          className="text-h2 text-gray-500 focus:outline-none"
          style={{ width: `${Math.max(searchTerm.length, 11)}ch` }} // adjust search bar width based on input length to improve
        />
        <span style={{fontFamily: 'var(--font-inter-bold-italic)'}} className="text-h2">)</span>
      </div>
      {isLoading && <p className='text-sm'>Caricamento...</p>}
      <ul className="text-base uppercase mt-2 w-full max-w-md bg-white shadow-lg rounded-lg">
        {suggestions.map((recipe) => (
          <li
            key={recipe.id}
            className="px-4 py-2 hover:bg-gray-200 hover:rounded-lg cursor-pointer"
            onClick={() => recipe.taste && handleSuggestionClick(recipe.taste.taste, recipe.name)}
          >
            {recipe.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;

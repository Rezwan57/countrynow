"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import './search.css'
import Image from 'next/image';

function Search() {

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const apiUrl = 'https://restcountries.com/v3.1/all';
  const [showSearchButton, setShowSearchButton] = useState(false);

  const fetchSearchResults = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  }

  const handleSearch = event => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      setShowSearchButton(false);
    } else {
      fetchSearchResults();
      setShowSearchButton(true);
    }
  };

  const clearSeach = () => {
    setSearch('');
    setSearchResults([]);
    setShowSearchButton(false);
  };

  return (
    <>
      <div className='searchBarContainer'>

        <input className='searchBar' type="text" placeholder='Search for a country...' value={search} onChange={handleSearch} />

        {showSearchButton && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.75, ease: 'easeIn' }}
            className='clearButton flex items-center justify-center'
            type="submit"
            onClick={clearSeach}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>

        )}

      </div>



      {search && (
        <div className='suggestionContainer'>
          {searchResults.length > 0 ? (
            searchResults
              .filter(country => country.name.common.toLowerCase().startsWith(search.toLowerCase()))
              .sort((a, b) => a.name.common.localeCompare(b.name.common))
              .map(country => (

                <Link href={`/countries/${country.name.common}`} key={country.name.common} className='suggestionItem'>

                  <div className='suggestionFlagContainer'>

                    <Image src={country.flags.svg} width={300} height={200} alt={`${country.name.common} flag`} className='suggestionFlag' />

                  </div>

                  <p className='suggestionName'>{country.name.common}</p>
                  
                </Link>
              ))
          ) : (
            <div className="noResults">No matching results</div>
          )}
        </div>
      )}


    </>

  )
}








export default Search
"use client"
import React, { useEffect, useState } from 'react'
import './page.css'
import { motion } from 'framer-motion';
import CountryCard from './components/CountryCard';

function AllCountries() {

  const [search, setSearch] = useState('');
  const apiUrl = 'https://restcountries.com/v3.1/all';
  const [countries, setCountries] = useState([]);
  const [showSearchButton, setShowSearchButton] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const sortedCountries = data.sort((a, b) => {
          const countryA = a.name.common.toLowerCase();
          const countryB = b.name.common.toLowerCase();
          if (countryA < countryB) return -1;
          if (countryA > countryB) return 1;
          return 0;
        });
        setCountries(sortedCountries);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const handleSearch = event => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);
    if (searchTerm.trim() === '') {
      setShowSearchButton(false);
    } else {
      setShowSearchButton(true);
    }
  };

  const clearSeach = () => {
    setSearch('');
    setSearchResults([]);
  };

  return (

    <div className='allCountriesContainer'>

      <div className='allCountriesSearch'>

        <div className='allCountriesSearchBarContainer'>

          <input className='allCountriesSearchBar' type="text" placeholder='Search for a country...' value={search} onChange={handleSearch} />

          {showSearchButton && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.75, ease: 'easeIn' }}
              className='clearButton flex items-center justify-center'
              type="submit"
              onClick={clearSeach}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          )}

        </div>

      </div>



      <div className='countryCardContainer'>

        {countries.map(country => (
          <CountryCard key={country.name.common} country={country} />
        ))}

      </div>

    </div>

  )
}

export default AllCountries;
"use client"

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import MapComponent from './components/MapComponent';
import './page.css'

function Country() {

    const pathname = usePathname();
    const country = pathname.split('/').pop();
    const [countryData, setCountryData] = useState(null);
    const data = countryData && countryData[0];

    useEffect(() => {
        if (country) {
            fetch(`https://restcountries.com/v3.1/name/${country}`)
                .then(response => response.json())
                .then(data => setCountryData(data))
                .catch(error => console.error('Error fetching country data:', error));
        }
    }, [country]);

    return (
        <main className="countryPage">
            {countryData && (
                <>
                    <div className="countryInfoContainer">

                        <Image src={data.flags.svg} className="countryInfoNameImgBg" alt={data.flags.svg} width={100} height={100} />

                        <div className='countryInfoFlag'>

                            <Image src={data.flags.svg} className="countryInfoFlagImgBg" alt={data.flags.svg} width={250} height={0} />

                            <Image src={data.flags.svg} className="countryInfoFlagImg" alt={data.flags.svg} width={250} height={0} />

                        </div>

                        <div className="countryInfoNameContainer">


                            <h1 className="countryInfoName">{data.name.common}</h1>

                            <div className="countryInfoDetails">

                                <p><span>Capital:</span> {data.capital}</p>
                                <p><span>Region:</span> {data.region}</p>
                                <p>
                                    <span>Population:</span> {data.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                </p>
                                <p><span>Languages:</span> {Object.values(data.languages).join(', ')}</p>
                                <p><span>Currencies:</span> {Object.values(data.currencies)[0].name}</p>
                                <p><span>Timezone:</span> {data.timezones[0]}</p>
                            </div>

                        </div>

                    </div>

                    <div className="mapContainer">
                        <MapComponent countryName={country} />
                    </div>

                </>
            )}
        </main>
    );
}

export default Country;
import React from 'react'
import './CountryCard.css'
import Image from 'next/image'
import Link from 'next/link'

function CountryCard({ country }) {

  return (
    <Link href={`/countries/${country.name.common}`} className='countryCard' >

      <div className='countryCardFlag'>
        <Image src={country.flags.svg} className='countryFlagImgBg' alt={country.flags.alt} width={250} height={0} />

        <Image src={country.flags.svg} className='countryFlagImg' alt={country.flags.alt} width={275} height={0} />
      </div>

      <p className='countryName'>{country.name.common.length > 20 ? country.name.common.slice(0, 20) + '...' : country.name.common}</p>

    </Link>
  )
}

export default CountryCard
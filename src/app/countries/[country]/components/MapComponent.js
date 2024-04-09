import React from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import worldMap from './world-110m.json';

const MapComponent = ({ countryName }) => {
    
    const decodedCountryName = decodeURIComponent(countryName);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <ComposableMap
                width={400}
                height={250}
                projection="geoMercator"
                projectionConfig={{ scale: 35 }}
            >
                <Geographies geography={worldMap}>
                    {({ geographies }) =>
                        geographies.map((geo) => {
                            const { id, properties } = geo;
                            const isCountry = properties.name === decodedCountryName;

                            return (
                                <Geography
                                    key={id}
                                    geography={geo}
                                    style={{
                                        default: {
                                            fill: isCountry ? '#00FFA3' : '#FFFFFF70',
                                            outline: 'none',
                                        },
                                        hover: {
                                            fill: isCountry ? '#00FFA3' : '#006E46',
                                            outline: 'none',
                                        },
                                        pressed: {
                                            fill: isCountry ? '#00FFA3' : '#006E46',
                                            outline: 'none',
                                        },
                                    }}
                                />
                            );
                        })
                    }
                </Geographies>
                {/* Add Marker for the selected country */}
                {decodedCountryName && (
                    <Marker coordinates={[0, 0]}>
                        <text textAnchor="middle" y={-10} style={{ fill: 'pink' }}>
                            {decodedCountryName}
                        </text>
                    </Marker>
                )}
            </ComposableMap>
        </div>
    );
};

export default MapComponent;

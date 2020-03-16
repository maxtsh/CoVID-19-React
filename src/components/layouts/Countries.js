import React from 'react';
import useCountry from '../../hooks/useCountry';

const Countries = () => {
    const countries = useCountry();

    if(!countries){
        return(
            <h1>Loading...</h1>
        )
    }

    return (
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Countries</th>
                <th>Total</th>
                <th>Deaths</th>
                <th>Recovered</th>
                <th>Active</th>
            </tr>
        </thead>
        <tbody>
            {countries.map((country, index) => (
                <tr key={index}>
                    <td>{index}</td>
                    <td>{country.provinceState ? country.provinceState : country.countryRegion}</td>
                    <td>{country.confirmed}</td>
                    <td className="deaths">{country.deaths}</td>
                    <td>{country.recovered}</td>
                    <td>{country.active}</td>
                </tr>
            ))}
        </tbody>
    </table>
    )
};

export default Countries;

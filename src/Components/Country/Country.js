import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props.country);
    const {area,region,population,name,flags}=props.country
    
    return (
        <div className='country bg-warning'>
            <h2>Country name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h4>Population:  {population}</h4>
            <h3><small>Area : {area}</small></h3>
            <p>Region: {region} </p>


        </div>
    );
};

export default Country;
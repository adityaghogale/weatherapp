import React from 'react';

const Weather=(props)=>{
    return (
        <div className="container">
            <br/>
            <h1>{props.weather.city}</h1>
            <h5 className="py-4">
                <i className={`wi ${props.weather.icon} display-1`}></i>
                </h5>
                {/** &deg; will show degree symbol */}
            
            {props.weather.temp?<h3 className="py-4">{props.weather.temp}&deg;</h3> :null}

            {/** to display minimu and maximum temperature */}
            {props.weather.min_temp&&props.weather.max_temp?minMaxTemp(props.weather.min_temp,props.weather.max_temp):null}
            
            <h3 className="py-3">{props.weather.desc}</h3>
        </div>
    )
}

function minMaxTemp(min,max){
    return(
        <h2>
            <span className="px-4">{min}&deg;</span>

            <span className="px-4">{max}&deg;</span>
        </h2>
    );
}
export default Weather;
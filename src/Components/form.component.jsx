import React from 'react';

const Form=props=>{
    return(
        <div className="container">
            <form onSubmit={props.getWeather}>
            <div className="row">
                <div className="col-md-3 offset-md-2">
            <input className="form-control" name="city" placeholder="city name"></input>
            </div>
            <div className="col-md-3">
            <input type="text" className="form-control" name="country" placeholder="country name"/>
            </div>
            <div className="col-md-3 mt-md-0text-md-left">
            <button className="btn btn-success">get</button>
            </div>
        </div>
        </form>
        </div>
    );
}

export default Form;

import './App.css';
import React from 'react';
import Weather from './Components/wheather.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Form from './Components/form.component';

const apiKey="3f376cb0d159d3b9803a475cab52abbb";
//api.openweathermap.org/data/2.5/weather?q=London&appid={API key}

class App extends React.Component{
  constructor(){
    super();
    this.state={ 
      country:undefined,
      city:undefined,
      temp:undefined,
      max_temp:undefined,
      min_temp:undefined,
      desc:undefined,
      icon:undefined
    };
    this.getWeather=this.getWeather.bind(this);

    this.weatherIcon={
      Thunderstorm:'wi-thunderstorm',
      Drizzle:'wi-sleet',
      Rain:'wi-storm-showers',
      Snow:'wi-snow',
      Atmosphere:'wi-fog',
      Clear:'wi-day-sunny',
      Clouds:'wi-day-fog'
    }
  }

  //this method will convert kelvin temperature to celcius
  calTemp(temp){
    let t=Math.floor(temp - 273.15);
    return t;
  }

  findIcon(iconId){
    if(iconId >=200 && iconId <= 232)
        return this.weatherIcon.Thunderstorm;
    else if(iconId >=300 && iconId <= 321)
      return this.weatherIcon.Drizzle;
    else if(iconId >=500 && iconId <= 531)
      return this.weatherIcon.Rain;
    else if(iconId >=600 && iconId <= 622)
        return this.weatherIcon.Snow;
    else if(iconId >= 700 && iconId <= 781)
    return this.weatherIcon.Atmosphere;
    else if(iconId >= 801 && iconId <= 804)
    return this.weatherIcon.Clouds;
    else if(iconId === 800)
    return this.weatherIcon.Clear;
  }
  handleNameChange=(event)=>{
    const {name,value}=event.target;
    this.setState({
      [name]:value
    });
  };
  getWeather=async(event)=>{
    event.preventDefault();
    const cityN=event.target.elements.city.value;
    const countryN=event.target.elements.country.value;
    if(cityN && countryN){
      const apiCall=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityN},${countryN}&appid=${apiKey}`);
    const response = await apiCall.json();
    console.log(response);
    this.setState({
      /*city:response.name,
      country:response.sys.country,*/
      city:`${response.name},${response.sys.country}`,
      temp:this.calTemp(response.main.temp),
      max_temp:this.calTemp(response.main.temp_max),
      min_temp:this.calTemp(response.main.temp_min),
      desc:response.weather[0].description,
      icon:this.findIcon(response.weather[0].id)
    });
    }
    else
      alert('City and country name cannot be empty');
    
  };
  render(){
    return(
    <div className="App">
     <Form getWeather={this.getWeather}/>
    <Weather 
    weather={{
    city:this.state.city,
     country:this.state.country,
     temp:this.state.temp,
     max_temp:this.state.max_temp,
     min_temp:this.state.min_temp,
     desc:this.state.desc,
     icon:this.state.icon
    }}
     />
    
  </div>);
  }
}
export default App;

import { useContext, useEffect, useState } from "react";
import { CityContext } from "./CityContext";
import axios from "axios";
import Weather from "./Weather"



const Main = () => {
    
   
    const TurkeyCities = useContext(CityContext);
    const REACT_WEATHER_API_KEY = "43a3f4364af4f6d749100642bd9103a1";
    const [city, setCity] = useState("Istanbul");
    const [status, setStatus] = useState("");
    const [temp, setTemp] = useState("");
    const [humidity, setHumidity] = useState("");
    const [feel, setFeel] = useState("");
    const [temp_min, setTemp_min] = useState("");
    const [temp_max, setTemp_max] = useState("");
    const [icon, setIcon] = useState("");
    const api_url= 'https://api.openweathermap.org/data/2.5/weather?q=';

useEffect(() => {


    axios.get(`${api_url}${city}&appid=${REACT_WEATHER_API_KEY}`)
    .then((response) => {

        
        setStatus(response.data.weather[0].main);
        setFeel(Math.round(response.data.main.feels_like - 273.15))
        setHumidity(response.data.main.humidity)
        setTemp_min(Math.round(response.data.main.temp_min - 273.15))
        setTemp_max(Math.round(response.data.main.temp_max - 273.15))
        setTemp(Math.round(response.data.main.temp - 273.15))
        setIcon(response.data.weather[0].icon)
    })


},[])


    const changeSelected = (e) => {


       
        axios.get(`${api_url}${e.target.value}&appid=${REACT_WEATHER_API_KEY}`)
            .then((response) => {

                setCity(response.data.name);
                setStatus(response.data.weather[0].main);
                setFeel(Math.round(response.data.main.feels_like - 273.15))
                setHumidity(response.data.main.humidity)
                setTemp_min(Math.round(response.data.main.temp_min - 273.15))
                setTemp_max(Math.round(response.data.main.temp_max - 273.15))
                setTemp(Math.round(response.data.main.temp - 273.15))
                setIcon(response.data.weather[0].icon)
                console.log("tamam");
            })


    }



    return (

        <>

            <div className="container-sm">
                <div className="row">
                    <div className="mx-auto col-sm-4 col-md-6 ">
                        <select className="form-select form-select-sm mt-3" aria-label="Default select " name="cities" id="cities" onChange={changeSelected}>
                            <option defaultValue=" ">Select a city</option>
                            {TurkeyCities.map((cities, id) => {

                                return (
                                    <option value={cities} key={id} >{cities}</option>

                                );
                            })}
                        </select>
                    </div>
                </div>
            </div>
         
            <Weather 
            city={city}
            status={status}
            temp={temp}
            feel={feel}
            humidity={humidity}
            temp_max={temp_max}
            temp_min={temp_min}
            icon={icon}
             />
        </>

    );
};

export default Main;

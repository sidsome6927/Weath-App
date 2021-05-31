import axios from 'axios';
import React , {useState,useEffect} from 'react';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import img from  "./compass.svg";
import img2 from "./icons8-dew-point-90.png";
import img3 from "./icons8-marker-sun-90.png";
import img4 from "./icons8-windy-weather-90.png";
import "./index.css"

const WeathApp = () => {
    const[search,setSearch] = useState("Haridwar");
    const [city, setCity] = useState("");
    const [country,setCountry] = useState();
    const[temp,setTemp] = useState("");
    const [wind, setWind] = useState("");
    


    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=397705edc485cdc7b4b883e74686b97f`);
            console.log(res);
            setCity(res.data.name);
            setTemp(res.data.main.temp);
            setCountry(res.data.sys.country);
            setWind(res.data.wind.speed);
            
        }

        getData();
    }, [search])
    return (
        <>
        <section className="main-div">
        <div className=" mt-5 card d-flex mx-auto text-center weath-card" style={{width: '80rem'    }}>
        <figure>
          <img src={img} className="card-img-top pt-3 " alt="..." />
        </figure>
        <div className="card-body">
          <h1 className=" display-3">Weatherizer</h1>
          <p className="card-text ">View the current weather.</p>
          <br/>
          <br/>
          <br/>
          <div className="city-details">
            <label htmlFor="inputCity" className="form-label">City</label>
            <input type="search" value={search} className="form-control input-group-sm" id="inputCity" name="city" placeholder="Enter city name" onChange={(event) => {
                    setSearch(event.target.value);
                }}/>
          </div>
          
        </div>
        <div className="result my-5">
        <div className="row mx-5">
        <img src={img2} alt="img" className=" icons"/>
        <h1 className="display-5 col-3  ">{temp}°C</h1>
        </div>
        <div className="row mx-5 my-5">
        <img src={img3} alt="img" className=" icons"/>
        <h1 className="display-5 col-3  ">{city},{country}</h1>
        </div>
        <div className="row mx-5">
        <img src={img4} alt="img" className=" icons"/>
        <h1 className="display-5 col-3  ">{wind} Km/h</h1>
        </div>
        
        </div>
      </div>

        </section>
        
        </>
    )
}

export default WeathApp;
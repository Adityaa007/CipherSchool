import { useEffect,useState } from "react";
import WeatherRow from "../components/WeatherRow";
import WeatherSummary from "../components/WeatherSummary";
import getWeather from "../API/WeatherAPI";

const fetchCoordinates=(callback)=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>
    {
       callback(latitude,longitude)
    },
       (err)=> console.error(err)
    );
};

const WeatherPage=()=>{
    const [todayWeather,setTodayWeather]=useState({});
    const [WeekWeather,setWeekWeather]=useState([]);
    const [isCelsius, setIsCelsius] = useState(true);


    const isday=todayWeather.isDay ?? true;
     // callback function , dependancy array 
    // /? mounting adding to calltack or defined there and unmounting concept removing data from callstack ?? 

    useEffect(()=>{
        fetchCoordinates(async(latitude,longitude)=>{
          const WeatherInfo= await getWeather({latitude,longitude})
          console.log(WeatherInfo);
        })
    },[])
    const convertToStateVariable=(tempWeekWeather)=>{
        let fetchedWeatherInfo=[];
        for(let i=0;i<tempWeekWeather.daily.time.length;i++){
            fetchedWeatherInfo.push({
                date:new Date(tempWeekWeather.daily.time[i]),
                maxTemperature: tempWeekWeather.daily.temperature_2m_max[i],
                minTemperature: tempWeekWeather.daily.temperature_2m_min[i],
                weatherCode:tempWeekWeather.daily.weatherCode[i],


            })
        }
        setWeekWeather(fetchedWeatherInfo)

        let currentWeather= tempWeekWeather.current_weather;
        currentWeather.time=new Date(currentWeather.time);
        currentWeather.isDay = currentWeather.is_day===1 ? true: false;
        delete currentWeather.is_day;

        currentWeather.weatherCode=currentWeather.weathercode;
        delete currentWeather.weathercode;

        setTodayWeather(currentWeather);
    }
    if(!weekWeather.length){
        return <h3>Loading...</h3>
    }
    

    return (
        <div className={isday ? "app": "app dark"}>
            <h1 className="my-heading">Weather</h1>
            <button className="ui icon button" onClick={()=>{
                console.log("Temp Unit Button was clicked");
            }} style={{float:"right"}}>°F</button>
            <div>
                <WeatherSummary/>
                <table className={`ui very basic table ${!isday ? "dark" : ""}`} >
                    <thead className={`table-custom${!isday ? "dark" : ""}`}>
                    <tr>
                        <th>Date</th>
                        <th>Temperature</th>
                        <th>Type</th>
                    </tr>
                    </thead>
                    <tbody className="table-custom">
                        <WeatherRow/>
                        <WeatherRow/>
                        <WeatherRow/>
                        <WeatherRow/>
                        <WeatherRow/>
                        <WeatherRow/>
                        <WeatherRow/>
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default WeatherPage;
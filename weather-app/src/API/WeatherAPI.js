import Axios from "axios";

const WEATHER_API_URL="https://api.open-meteo.com/v1/forecast";


const convertDate = (date) => {
    const year=date.getFullYear();
    // getmonth always gives one month less i.e if month is 4th then it will give 3 as result
    const month=date.getMonth()+1<=9 ?`0${date.getMonth()+1}`: date.getMonth()+1;
    const day=date.getDate()<=9 ?`0${date.getMonth()}`: date.getMonth();
    return `${year}-${month}-${day}`;

}

const getWeather=async(latitude,longitude)=>{
    const StartDate=new Date();
    const {data: WeatherInfo}=await Axios.get(WEATHER_API_URL,{
        params:{
            latitude,
            longitude,
            current_weather:true,
            timezone:"IST",
            daily:["temperature_2m_max","temperature_2m_min","weathercode"],
            start_date: convertDate(StartDate),
            end_date: convertDate(new Date(StartDate.setDate(StartDate.getDate()+7)))
        }
    });
    return WeatherInfo;
}

export default getWeather;
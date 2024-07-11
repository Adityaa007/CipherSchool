import WeatherRow from "../components/WeatherRow";
import WeatherSummary from "../components/WeatherSummary";

const WeatherPage=()=>{
    const isday=false;
    return (
        <div className={isday ? "app": "app dark"}>
            <h1 className="ui header">Weather</h1>
            <button className="ui icon button" onClick={()=>{
                console.log("Temp Unit Button was clicked");
            }} style={{float:"right"}}>°F</button>
            <div>
                <WeatherSummary/>
                <table className={`ui very basic table dark${!isday && " dark "}`} >
                    <thead className={`table-custom${!isday && "dark"}`}>
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
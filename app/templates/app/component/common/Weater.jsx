import React from 'react'
import simulationData from "../../public/js/simulationData/simulationData";
import moment from "moment";

const subStr = "实时："

class Weater extends React.Component {
    constructor(props) {
        super(props);

        this.data = simulationData["api/weatherUrl"];
    }

    componentWillMount() {

    }

    render() {
        let dataArray = this.data,
            timeNow = new Date(dataArray.date),
            todayWeater = dataArray.dataList.results[0].weather_data[0],
             weaterDate = todayWeater.date
        return (
            <div>
                <div className="weatherDate">
                    <span className="date">{moment().format('yyyy年MM月dd日')}</span>
                    <span className="date">{moment().format('hh:mm:ss')}</span>
                </div>
                <div className="weatherShowImg">
                    <img className="dayPictureUrl" src={todayWeater.dayPictureUrl} alt=""/>
                    <span className="weather">{todayWeater.weather}</span>
                </div>
                <div className="weatherTemperature">
                    <span className="weekly"></span>
                    <span
                        className="temperature">{weaterDate.substring(weaterDate.indexOf(subStr) + subStr.length, weaterDate.length - 1)}</span>
                </div>
            </div>
        )
    }
}

export default Weater
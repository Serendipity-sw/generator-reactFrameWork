import React from 'react'
import xlsxProcess from "../../public/js/xlsxProcess/xlsxProcess";
import style from '../../public/css/common.pcss.json'

class ExcelDown extends React.Component{
    constructor(props){
        super(props)
    }

    excelButtonClick=()=>{
        let exportData=[]
        exportData.push(["姓名","年龄","性别"])
        exportData.push(["gloomy","年龄","性别"])
        exportData.push(["gloomy","年龄","性别"])
        exportData.push(["gloomy","年龄","性别"])
        exportData.push(["gloomy","年龄","性别"])
        xlsxProcess.ExcelWriteFile(exportData,"文件导出示例.xlsx")
    }

    render(){
        return(
            <div>
                <button type="primary" icon="download" onClick={this.excelButtonClick} size="large">excel导出示例</button>
                <div className={style.col-3}></div>
                <div className={style.col-5}></div>
                <div className={style.icondog}></div>
                <div className={style.icontiger}></div>
            </div>
        )
    }
}

export default ExcelDown
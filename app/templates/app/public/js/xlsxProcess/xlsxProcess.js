import * as XLSX from "xlsx";

/**
 * excel文件导出
 * @param dataArray 示例 [ ["基站名称", "基站地址", "小区编码(lac)", "扇区编码(cell_id或者ci)", "经度", "维度", "网络制式", "基站类型"]... ]
 * @param fileName 下载文件名
 * @constructor
 */
let ExcelWriteFile=(dataArray,fileName)=>{
    let ws=XLSX.utils.aoa_to_sheet(dataArray)
    let wb=XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb,ws,"Sheet1")
    XLSX.writeFile(wb,fileName)
}


export default {
    ExcelWriteFile
}
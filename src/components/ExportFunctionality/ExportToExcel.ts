import * as XLSX from 'xlsx';
import rowsData from './config';

function exportSingleExcel(name: any,rowsData:any) {
  return function downloadAsExcel(number:any) {
    // Ensure data is an array
    const dataToExport = rowsData.slice(0, number);

    const data1 = dataToExport.map((el:any) => ({
        // real code
    
        'Name': el.name,
      'ISO Code': el.code,
      'Population': el.population,
      'Size': el.size,
      'Density': el.density,
    
    }))

    // Convert the formatted data to a worksheet
    const worksheet = XLSX.utils.json_to_sheet(data1);

    // Create a new workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Save the workbook as an Excel file
    XLSX.writeFile(workbook, name);
  };
}

export default exportSingleExcel;

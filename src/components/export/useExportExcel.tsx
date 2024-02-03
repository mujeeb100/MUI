import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';


// export to all data
const useExportAllExcel = () => {
    const downloadAllAsExcel = (name:any, rowsData:any) => {
      // Convert the formatted data to a worksheet
      const worksheet = XLSX.utils.json_to_sheet(rowsData);
  
      // Create a new workbook and append the worksheet
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  
      // Save the workbook as an Excel file
      XLSX.writeFile(workbook, name);
    };
  
    return downloadAllAsExcel
  };

export {  useExportAllExcel };

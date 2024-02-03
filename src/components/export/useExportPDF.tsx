import { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const useExportPDF = () => {

  const handleExportPDF = (fileName:any,rowsData:any, columns:any) => {
    const doc = new jsPDF('landscape', 'px', [1800, 800]);
    // const rows = rowsData.slice(0, number);
    const rows = rowsData;
    const cntStr = `Total Count: ${rows.length}`;

    doc.setFontSize(12);
    doc.text(cntStr, 15, 10);

    const tableColumnStyles = {};
    columns?.forEach((column:any, index:any) => {
    const tableColumnStyles: { [key: number]: { cellWidth: number } } = {};

    columns?.forEach((column: any, index: number) => {
        tableColumnStyles[index] = { cellWidth: column.minWidth || 40 };
    });
    });

    autoTable(doc, {
      head: [columns.map((col:any) => col.header)],
      body: rows.map((row:any) => columns.map((col:any) => row[col.dataKey])),
      columnStyles: tableColumnStyles,
    });

    // const fileName =  'pdf_table_data.pdf';
    doc.save(fileName);
    // You may replace the handleClose function with whatever logic you have for closing.
  };

  // useEffect(() => {
  //   // You may add additional logic here if needed when rowsData or columns change
  // }, [rowsData, columns]);

  return  handleExportPDF
   
   
  
};

export default useExportPDF;

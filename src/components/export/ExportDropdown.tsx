import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; // Import the correct icon
import useExportPDF from './useExportPDF';
import {useExportAllExcel} from './useExportExcel';

const ExportDropdown = ({dropDownObject}: { dropDownObject: any }) => {
  const [anchorEl, setAnchorEl] = useState(null);


  const exportToPdf = useExportPDF();// it return a higher order function that recieved data convert into the pdf
const exportToExcel =useExportAllExcel();// it return a higher order function that recived data convert into the excel


// dropdown list show of export functionality 
  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-expanded="false"
        onClick={handleClick}
        variant="outlined"
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          borderRadius: '20px',
          color: 'var(--blue-blue-5000049-db, var(--colour-blue-500, #0049DB))',
          fontFeatureSettings: "'clig' off, 'liga' off",
          fontFamily: 'Lato',
          fontSize: '14px',
          fontStyle: 'normal',
          border: '1px solid var(--blue-blue-5000049-db, #0049DB)',
          textTransform: 'none',
          padding: '4px 12px',
        }}
      >
        Export
      </Button>

      <Menu id="export-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
  
  {dropDownObject.map((el:any) => (
    <MenuItem onClick={(()=>{
      if(el.dropDownOptionType==="PDF"){
        exportToPdf(el.fileName,el.dropDownData,el.dataNames)// passing file name and rowData,columnData
        }else if(el.dropDownOptionType==="EXCEL" ) {
          exportToExcel(el.fileName,el.dropDownData) // passing file name and rowData
      }
      setAnchorEl(null);
    })} key={el.dropDownOptionName}>{el.dropDownOptionName}</MenuItem>
  ))}
</Menu>
    </div>
  );
};

export default ExportDropdown;


import 'jspdf-autotable'; // Import the jspdf-autotable package
import 'jspdf-autotable';
import ExportDropdown from '../export/ExportDropdown';
import rowArray from './config';
const Export = () => {

// define datakey custom name which renders on UI
const columnname=[
  { header: 'Name', dataKey: 'name' },
  { header: 'ISO Code', dataKey: 'code' },
  { header: 'Population', dataKey: 'population' },
  { header: 'Size', dataKey: 'size' },
  { header: 'Density', dataKey: 'density' },
]

// this is a array which contains  export data and dropdwon information
const dropDownObject= [
{
  dropDownOptionName:"Export to Excel",
dropDownOptionType: "EXCEL",
//slice method copy array and return a new array recived,
// two parameter 1st is starting index and 2nd second is end index
dropDownData:rowArray.slice(0,10),
fileName:"countries.xlsx",
dataNames:
  columnname
},
{
  dropDownOptionName:"Export to PDF",
dropDownOptionType: "PDF",
dropDownData:rowArray.slice(0,10), // i have used manully
routeToGetData:"",
fileName:"countries.pdf",
dataNames:
  columnname
},
{
  dropDownOptionName:"Export to all PDF",
dropDownOptionType:  "PDF",
dropDownData:rowArray,
fileName:"All_countries.pdf",
dataNames:
  columnname
},
{
  dropDownOptionName:"Export to all excel",
dropDownOptionType: "EXCEL",
dropDownData:rowArray,
routeToGetData:"",
fileName:"all_countries.xlsx",
dataNames:
  columnname
},

]


  return (
    <div>
      <ExportDropdown dropDownObject={dropDownObject} />
    </div >
  );
};

export default Export;

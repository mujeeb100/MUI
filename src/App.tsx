import React, { ChangeEvent } from "react";
import "./App.css";
import Export from "./components/ExportFunctionality/Export";
import StickyHeadTable from "./components/StickyHeadTable";

import MainMenu from "./components/constants/menu";
import { TopMenu } from "./components/constants/TopMenu";
import CustomCheckbox from "./components/checkBoxes/CustomCheckbox";
import { CustomIconAvatars } from "./components/Avatar/CustomIconAvatars";
import CustomImageList from "./components/ImageMUI/CustomImageList";
import customImageData from "./components/ImageMUI/itemData";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import pandaImages from "./panda.jpg";
import itemData from "./components/ImageMUI/itemData";
import Typography from "@material-ui/core/Typography";
import CardComponent from "./components/cards/CardComponent";
import { Button } from "@mui/material";
function App() {

  // if we dont needed thousand of state 
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedC: true,
    checkedD: true,
    checkedE: true,
  });
const [bg,setBg] = React.useState("blue")
const [name,setname]= React.useState("click me")

  const handleChange:any =
   (e: React.ChangeEvent<HTMLInputElement>) => {
      setState({ ...state, [e.target.name]: e.target.checked });
    };
// console.log(state.checkedF,"state")
// console.log(state["checkedF"],"state")

const handleColorChange = () => {
  console.log("clicked");
  const color =  "red" && "green";
  setBg(color);
  setname("has been chnaged the name")
}
    
  return (
    <div style={{ background: bg }}>
      {/* <div > */}
        {/* <button onClick={handleColorChange}>click me</button> */}
        <Button onClick={handleColorChange} variant="contained" color="primary">{name}</Button>
      {/* </div> */}
      {/* <Typography variant="h5" align="center">
        Checkbox with FormControlLabel
        <div
          className="App"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            {/* Usage of CustomCheckbox */}
            {/* <CustomCheckbox
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
              disabled={false}
              checked={state.checkedF}
              onChange={handleChange}
              name={"checkedF"}
              label="Checkbox icon"
              color="primary"
            /> */}
            
          

            {/* <CustomImageList images={itemData} rounded={true} size="200px" /> */}
          {/* </div>
          <div>
          <div> */}
      {/* Other components or content */}
      {/* <CardComponent
        image="url-to-your-image"
        title="Your Card Title"
        description="Your card description goes here."
        buttonText="Click me"
        // backgroundColor={backgroundColor ? 'blue' : 'green'}
  textColor="white"
  borderRadius="50px" // or '100%' for a full circle
      /> */}
      {/* Other components or content */}
    {/* </div>
          </div>
        </div>
      </Typography> */}
      {/* <div>
        <Export />
      </div>
      <div>
        <StickyHeadTable /> */}
      {/* </div> */} */
    </div>
  );
}

export default App;

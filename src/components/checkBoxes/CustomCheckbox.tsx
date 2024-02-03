import React from "react";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import {
  green,
  blue,
  red,
  orange,
  yellow,
  purple,
  deepOrange,
} from "@material-ui/core/colors";
import { FormControlLabel } from "@mui/material";
// import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
interface GreenCheckboxProps extends CheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  color:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
}

// const getColor = (color: string) => {
//   switch (color) {
//     case "primary":
//       return blue[500];
//     case "secondary":
//       return red[400];
//     case "error":
//       return deepOrange[500];
//     case "info":
//       return blue[500];
//     case "success":
//       return green[500];
//     case "warning":
//       return orange[500];
//     default:
//       return "rgba(0, 0, 0, 0.54)";
//   }
// };

const GreenCheckbox = withStyles({
  root: (props: GreenCheckboxProps) => ({
    // color: getColor(props.color),
    "&$checked": {
    //   color: getColor(props.color),
    },
  }),
  checked: {},
})((props: GreenCheckboxProps) => <Checkbox {...props} />);

interface CustomCheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  disabled?: boolean;
  icon?: any;
  checkedIcon?: any;
  name?:any;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  onChange,
  label,
  checkedIcon,
  icon,
  color = "default",
  disabled,
  name,
  ...rest
}) => {
  return (
    <FormControlLabel
      control={
        <GreenCheckbox
          icon={icon || <CheckBoxOutlineBlankIcon />}
          checkedIcon={checkedIcon || <CheckBoxIcon />}
          checked={checked}
          onChange={onChange}
          color={color}
          {...rest}
          name={name}
        />
      }
      label={label}
      disabled={disabled}
    />
  );
};

export default CustomCheckbox;

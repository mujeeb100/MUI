// CardComponent.tsx
import React, { ReactNode, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography, createTheme, ThemeProvider, Theme } from '@material-ui/core';
 
const globalTheme = createTheme({
 
});
 
interface CardComponentProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  children?: ReactNode;
  textColor?: string;
  borderRadius?: string;
  backgroundColor?: string;
}
 
const CardComponent: React.FC<CardComponentProps> = ({ image, title, description, buttonText, children, textColor,
  borderRadius,backgroundColor }) => {
  const cardTheme = createTheme({
    typography: {
      h5: {
        fontSize: 20,
        fontWeight: 600,
        color: '#3B3839',
        marginBottom: 10,
      },
      body2: {
        fontSize: 18,
        fontWeight: 400,
        color: '#3B3839',
        marginBottom: 20,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            borderRadius: '110px!important',
            border: '1px solid', // Specify the border style
          },
        },
      },
    },
  } as Theme & { components?: { MuiButton?: { styleOverrides?: { contained?: React.CSSProperties } } } });
 
  const [isButtonClicked, setButtonClicked] = useState(false);
 
  const handleButtonClick = () => {
    setButtonClicked(true);
  };
 
  const handleCardClick = () => {
    if (!isButtonClicked) {
      console.log('Card clicked!');
    }
  };
 
  return (
    <ThemeProvider theme={globalTheme}>
      <Card onClick={handleCardClick}>
        <CardMedia component="img" height="140" image={isButtonClicked ? 'https://source.unsplash.com/random/800x800/' : image} alt={title} />
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
          <Button
            variant="contained"
            onClick={handleButtonClick}
            disabled={isButtonClicked}
            style={{
              backgroundColor,
              color: textColor,
              borderRadius,
            }}
          >
            {buttonText}
          </Button>
          {/* {children} */}
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};
 
export default CardComponent;
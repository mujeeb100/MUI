import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Typography,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import { TricorUnifyLogo } from '../../assets/svg-images/SvgComponents';
// import { TricorUnifyLogo } from 'assets/svg-images/SvgComponents';


interface IMenuProps {
  getDefaultLang: (lang: string) => void;
  itemData?: any;
  entity?: any;
}

const TopMenu = ({ getDefaultLang, itemData, entity }: IMenuProps) => {
  const mockAPIContext = {
    userInfo: {
      name: 'John Doe',
    },
    handleLogout: () => {
      console.log('Logout');
    },
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedLang, setSelectedLang] = useState('en');

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLangChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedLang(event.target.value as string);
  };

  return (
    <AppBar position="static" style={{ background: 'white' }}>
      <Toolbar>
        <div style={{ flexGrow: 1 }}>
            <div style={{ backgroundImage: `url(${TricorUnifyLogo})`, width: '25px', height: '25px' }} />
            {/* <img style={{TricorUnifyLogo}} alt="Logo" /> */}

        </div>
        <div>
          <Button color="inherit" onClick={handleMenuOpen} style={{
              color: 'var(--blue-blue-5000049-db, var(--colour-blue-500, #0049DB))',
              fontFamily: 'Lato',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '22px',
            }}>
            {entity?.entityName || 'Select Entity'}
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Entity 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Entity 2</MenuItem>
            {/* Add hardcoded values as MenuItem components */}
          </Menu>
        </div>
        <FormControl>
          <InputLabel htmlFor="lang-select">Language</InputLabel>
          <Select
            value={selectedLang}
            // onChange={handleLangChange}
            label="Language"
            inputProps={{
              name: 'lang',
              id: 'lang-select',
            }}
            style={{
                color: 'var(--blue-blue-5000049-db, var(--colour-blue-500, #0049DB))',
                fontFamily: 'Lato',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '22px',
              }}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="es">Español</MenuItem>
            {/* Add more hardcoded language options */}
          </Select>
        </FormControl>
        <Typography className="blue-brdr" style={{
              color: 'var(--blue-blue-5000049-db, var(--colour-blue-500, #0049DB))',
              fontFamily: 'Lato',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '22px',
            }}>
          {mockAPIContext.userInfo.name}
        </Typography>
        <Button color="inherit" onClick={mockAPIContext.handleLogout} style={{ color: 'black' }}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export { TopMenu };

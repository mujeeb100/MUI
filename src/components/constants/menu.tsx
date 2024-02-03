import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LoginIcon from '@mui/icons-material/Login';

const createMainMenu = () => [
  {
    icon: <HomeIcon />,
    title: 'Home',
    active: true,
  },
  {
    icon: <PersonIcon />,
    title: 'Employee',
    active: false,
  },
  {
    icon: <BusinessIcon />,
    title: 'Entity',
    active: false,
  },
  {
    icon: <AccountBalanceIcon />,
    title: 'Payroll',
    active: false,
  },
  {
    icon: <LoginIcon />,
    title: 'Login',
    active: false,
  },
];

const StyledList = styled(List)({
  width: '100%',
  maxWidth: 360,
  backgroundColor: '#fff', // Add your background color here
});

const MainMenu = () => {
  const mainMenuItems = createMainMenu();

  return (
    <StyledList>
      {mainMenuItems.map((menuItem) => (
        <MenuItem key={menuItem.title} {...menuItem} />
      ))}
    </StyledList>
  );
};

const StyledListItem = styled(ListItem)({
  '&.Mui-selected': {
    backgroundColor: '#e0e0e0', // Add your selected background color here
  },
});

const MenuItem = ({ icon, title, active }: { icon: JSX.Element, title: string, active: boolean }) => (
  <StyledListItem disablePadding>
    <ListItemButton selected={active} onClick={() => {}}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItemButton>
  </StyledListItem>
);

export default MainMenu;

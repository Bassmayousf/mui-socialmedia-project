import React from "react";
import {
  Box,
  Drawer,
  FormControlLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import { Create, LoginOutlined, Person } from "@mui/icons-material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
export default function Sidbar({setMode,noneORblock,
  setDrawerType,
  drawerType,
  setnoneORblock}) {
const  [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };


  const theme = useTheme()
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      borderRadius: 20 / 2,
    },
  }));



  const myList = [
    { text: "HomePage", icon: <HomeOutlinedIcon />, path: "/" },
    { text: "Pages", icon: <Create />, path: "/create" },
    { text: "Profile", icon: <Person />, path: "/profile" },
    { text: "Groups", icon: <GroupsOutlinedIcon />, path: "/setting" },
    { text: "Friends", icon: <PeopleAltOutlinedIcon />, path: "/setting" },
    { text: "Markteplace", icon: <AddBusinessOutlinedIcon />, path: "/setting" },
    { text: "Setting", icon: <SettingsOutlinedIcon />, path: "/setting" },
  ];

  return (
    <Drawer
      p={2}
      flex={1}
      sx={{ display: {  xs: noneORblock, lg: "block" },
      width: "240px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "240px",
          boxSizing: "border-box",
          marginTop:"66px",

        },
    
    }}
      variant={drawerType}
      open={true}
      anchor="left"
      onClose={() => {
        setDrawerType("permanent");
        setnoneORblock("none");
      }}
    >
      <Box sx={{position:"fixed"}}>
      <List>
        {myList.map((item) => {
          return (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          );
        })}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LoginOutlined />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
        <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }}   />}
        label=" Switch Mode"
        checked={checked}
      onChange={handleChange}
        onClick={()=>{
          setMode(theme.palette.mode==="light"?"dark":"light")
        }}
      />
        </ListItem>
      </List>
      </Box>
    </Drawer>
  );
}

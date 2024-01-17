import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import MaterialUISwitch from "./MaterialUISwitch";

const Header = ({toggleDarkMode}) => {
  return (
    <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Atlas News
          </Typography>
          <MaterialUISwitch onChange={toggleDarkMode}/>
        </Toolbar>
      </AppBar>
  );
};

export default Header;

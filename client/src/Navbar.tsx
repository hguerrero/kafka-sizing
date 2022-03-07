import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          component="img"
          sx={{
            height: 36,
          }}
          alt="Red Hat AMQ Streams"
          src="redhat.png"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

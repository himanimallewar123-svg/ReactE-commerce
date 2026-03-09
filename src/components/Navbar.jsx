import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <AppBar position="static">
      <Toolbar>

        {/* Logo / Title */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "white",
            fontWeight: "bold"
          }}
        >
          MyShop
        </Typography>

        {/* Home Button */}
        <Button
          color="inherit"
          component={Link}
          to="/"
          sx={{ marginRight: 2 }}
        >
          Home
        </Button>

        {/* Cart Icon */}
        <IconButton
          color="inherit"
          component={Link}
          to="/cart"
        >
          <Badge badgeContent={cartCount} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
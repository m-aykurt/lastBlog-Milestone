import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CssBaseline from '@mui/material/CssBaseline';


import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";


import {useAuth} from "../context/AuthContext"
import { Link,useHistory } from "react-router-dom";

export default function MenuAppBar(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const {currentUser,logout} = useAuth()
  const history = useHistory();


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout =async ()=>{
    try {
      await logout();
      history.push("/");
    } catch {
      alert("Failed to log out");
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline/>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Avatar
              alt="clrswy"
              src="https://lms.clarusway.com/pluginfile.php/1/core_admin/logocompact/300x300/1628491244/clarusway_LOGO_tek_png.png"
            />
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Stack direction="row" spacing={1} justifyContent="center">
              <Chip
                label="-----<Murat/> Blog -----"
                href="https://github.com/m-aykurt/react-blog-page"
                variant="outlined"
                component="a"
                clickable
                target="_blank"
                size="medium"
                sx={{
                  borderColor: "primary.main",
                  color: "white",
                  fontSize: 25,
                  "&:hover": { opacity: 1 },
                }}
              />
            </Stack>
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {currentUser ? (
                <div>
                <MenuItem onClick={handleClose}>
                  <Link to="/profile">Profile</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/new-blog">New</Link>
                </MenuItem>
                <MenuItem onClick={(handleClose, handleLogout)}>
                  <Link to="/">Log Out</Link>
                </MenuItem>
              </div>
              ):(
                <div>
                 <MenuItem onClick={handleClose}>
                <Link to="/login">Login</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/register">Register</Link>
              </MenuItem>
              </div>
              )}
             
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

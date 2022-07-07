import "./DashSideBar.css";
import { Link, Outlet } from "react-router-dom";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
//import Typography from '@mui/material/Typography';
import DashboardIcon from "@mui/icons-material/Dashboard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrafficIcon from "@mui/icons-material/Traffic";
import CategoryIcon from "@mui/icons-material/Category";
import SellIcon from "@mui/icons-material/Sell";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import HeadsetIcon from "@mui/icons-material/Headset";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

function DashSideBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <h4 className="ms-3">Business Overall</h4>
      <Divider />
      <List>
        {[["Dashboard", "/dashboard"]].map((text, index) => (
          <Link key={text[0]} className="dash-link" to={text[1]}>
            <ListItem key={text[0]} disablePadding className="pt-2 pb-2">
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? (
                    <DashboardIcon />
                  ) : index === 1 ? (
                    <AttachMoneyIcon />
                  ) : (
                    <TrafficIcon />
                  )}
                </ListItemIcon>
                {text[0]}
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <div className="pt-3">
        <h4 className="ms-3">Data CRUD</h4>
      </div>
      <Divider />
      <List>
        {["Categories", "Products", "Orders", "Admins"].map((text, index) => (
 
          <Link key={text[0]} className="dash-link" to={"/" + text}>
 
            <ListItem key={text} disablePadding className="pt-2 pb-2">
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? (
                    <CategoryIcon />
                  ) : index === 1 ? (
                    <SellIcon />
                  ) : index === 2 ? (
                    <ReceiptIcon />
                  ) : (
                    <SupervisorAccountIcon />
                  )}
                </ListItemIcon>
                {text}
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ bgcolor: "#ff5722" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div className="d-flex justify-content-between w-100 align-items-center">
            <div className="d-flex align-items-center">
              <div className="pb-2 px-2">
                <HeadsetIcon />
              </div>
              <h4>Dashboard & Administrative tools</h4>
            </div>
            <div className="">
              <Link className="d-flex text-white" to="logout">
                <h5 className="pe-3">Logout</h5> <LogoutIcon />
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          paddingTop: 10,
          width: { md: `calc(100vw - ${drawerWidth}px)`, xs: "100vw" },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

DashSideBar.propTypes = {
  window: PropTypes.func,
};

export default DashSideBar;

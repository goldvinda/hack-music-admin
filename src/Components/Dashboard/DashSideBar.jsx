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
          <HeadsetIcon className="me-3 mb-2" />
          <h4>Dashboard & Administrative tools</h4>
          {/* <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography> */}
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
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashSideBar;

/* const DashSideBar = () => {
  return (
    <div className="sideBar">
      <ul className="dash-ul">
        <Link className="dash-link" to="/"></Link>
        <Link className="dash-link" to="/dashboard">
          <li className="dash-li">
            <FaIcons.FaRegChartBar />
            <span className="text-responsive ps-2">Sales</span>
          </li>
        </Link>
        <Link className="dash-link" to="/dashboard/admin">
          <li className="dash-li">
            <FaIcons.FaUserFriends />
            <span className="text-responsive ps-2">Admin</span>
          </li>
        </Link>
        <Link className="dash-link" to="/dashboard/categories">
          <li className="dash-li">
            <FaIcons.FaThList />
            <span className="text-responsive ps-2">Categories</span>
          </li>
        </Link>
        <Link className="dash-link" to="/dashboard/orders">
          <li className="dash-li">
            <FaIcons.FaShopify />
            <span className="text-responsive ps-2">Orders</span>
          </li>
        </Link>
        <Link className="dash-link" to="/dashboard/products">
          <li className="dash-li">
            <FaIcons.FaProductHunt />
            <span className="text-responsive ps-2">Products</span>
          </li>
        </Link>
        <Link className="dash-link" to="/">
          <li className="dash-li">
            <FaIcons.FaHome />
            <span className="text-responsive ps-2">Hack Music</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};
export default DashSideBar; */

import { Link } from "react-router-dom";
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  useProSidebar,
} from "react-pro-sidebar";
import { Box, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

const Sidebar = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <ProSidebar>
      <Menu>
        <Box>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => collapseSidebar()}
          >
            <Typography> Sidebar</Typography>
          </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/" />}>
            Dashboard
          </MenuItem>
        </Box>
        <MenuItem icon={<ArticleOutlinedIcon />}> Documentation </MenuItem>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;

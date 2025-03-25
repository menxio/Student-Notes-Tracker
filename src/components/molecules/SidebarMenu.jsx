import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";

function SidebarMenu() {
  const links = [
    {
      label: "Freshman",
      icon: <SchoolIcon />,
      path: "/pages/Freshman",
    },
    {
      label: "Sophomore",
      icon: <SchoolIcon />,
      path: "/pages/Sophomore",
    },
    {
      label: "Junior",
      icon: <SchoolIcon />,
      path: "/pages/Junior",
    },
    {
      label: "Senior",
      icon: <SchoolIcon />,
      path: "/pages/Senior",
    },
  ];

  return (
    <List>
      {links.map((link, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton component={Link} to={link.path}>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary={link.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default SidebarMenu;

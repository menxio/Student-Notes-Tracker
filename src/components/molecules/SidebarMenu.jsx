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
      path: "/freshman",
    },
    {
      label: "Sophomore",
      icon: <SchoolIcon />,
      path: "/sophomore",
    },
    {
      label: "Junior",
      icon: <SchoolIcon />,
      path: "/junior",
    },
    {
      label: "Senior",
      icon: <SchoolIcon />,
      path: "/senior",
    },
  ];

  return (
    <List>
      {links.map((link, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton component={Link} to={link.path}>
            <ListItemIcon>{link.icon}</ListItemIcon>
            <ListItemText primary={link.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default SidebarMenu;

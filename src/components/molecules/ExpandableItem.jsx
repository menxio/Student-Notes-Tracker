import React from "react";
import { Box, Typography, Collapse } from "@mui/material";
import { ExpandMore, ExpandLess, Add } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const IconButtonAtom = ({ onClick, icon, label }) => (
  <IconButton size="small" onClick={onClick} aria-label={label}>
    {icon}
  </IconButton>
);

const ExpandableItem = ({ title, children, expanded, toggleExpand, onAdd }) => (
  <Box sx={{ border: "1px solid #ddd", borderRadius: 1, mb: 1 }}>
    <Box
      sx={{ display: "flex", alignItems: "center", p: 1, cursor: "pointer" }}
      onClick={toggleExpand}
    >
      <Typography sx={{ flexGrow: 1 }}>{title}</Typography>
      <IconButtonAtom
        onClick={onAdd}
        icon={<Add fontSize="small" />}
        label={`Add ${title}`}
      />
      {expanded ? <ExpandLess /> : <ExpandMore />}
    </Box>
    <Collapse in={expanded}>{children}</Collapse>
  </Box>
);

export default ExpandableItem;

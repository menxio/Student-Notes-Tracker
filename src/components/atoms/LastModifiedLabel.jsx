import React from "react";
import { Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const LastModifiedLabel = ({ lastModified }) => {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      display="flex"
      alignItems="center"
    >
      <AccessTimeIcon fontSize="small" style={{ marginRight: 4 }} />
      Last modified: {lastModified}
    </Typography>
  );
};

export default LastModifiedLabel;

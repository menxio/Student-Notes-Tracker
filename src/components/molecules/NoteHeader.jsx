import React from "react";
import { Box, Typography } from "@mui/material";
import LastModifiedLabel from "../atoms/LastModifiedLabel";

const NoteHeader = ({ title, lastModified }) => {
  return (
    <Box mb={2}>
      <Typography variant="h5" fontWeight="bold">
        {title}
      </Typography>
      <LastModifiedLabel lastModified={lastModified} />
    </Box>
  );
};

export default NoteHeader;

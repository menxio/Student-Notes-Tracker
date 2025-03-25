import React from "react";
import { Box, Typography } from "@mui/material";
import SaveButton from "../atoms/SaveButton";

const NoteFooter = ({ isSaving, lastSaved, onSave }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderTop="1px solid #e0e0e0"
      padding="8px 16px"
      bgcolor="#f9f9f9"
    >
      <Typography variant="body2" color="textSecondary">
        {isSaving ? "Saving..." : lastSaved ? `Saved on ${lastSaved}` : ""}
      </Typography>
      <SaveButton isSaving={isSaving} onClick={onSave} />
    </Box>
  );
};

export default NoteFooter;

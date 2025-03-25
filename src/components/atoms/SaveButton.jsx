import React from "react";
import { Button, CircularProgress } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

const SaveButton = ({ isSaving, onClick }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={isSaving ? <CircularProgress size={20} /> : <SaveIcon />}
      onClick={onClick}
      disabled={isSaving}
    >
      {isSaving ? "Saving..." : "Save"}
    </Button>
  );
};

export default SaveButton;

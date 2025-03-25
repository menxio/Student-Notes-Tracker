import React from "react";
import { TextField } from "@mui/material";

const TextArea = ({ value, onChange, placeholder }) => {
  return (
    <TextField
      multiline
      fullWidth
      minRows={10}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      variant="outlined"
    />
  );
};

export default TextArea;

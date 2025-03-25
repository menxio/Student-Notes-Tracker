import React from "react";
import { TextField } from "@mui/material";

const InputField = ({ value, onChange, placeholder, onEnter }) => (
  <TextField
    size="small"
    variant="outlined"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onKeyDown={(e) => e.key === "Enter" && onEnter()}
    fullWidth
  />
);

export default InputField;

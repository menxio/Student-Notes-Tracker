import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ExpandableItem from "components/molecules/ExpandableItem";
import InputField from "components/atoms/InputField";
import SidebarMenu from "components/molecules/SidebarMenu"; // Import SidebarMenu

const Sidebar = () => {
  const [expandedYears, setExpandedYears] = useState({});
  const [newSemesterName, setNewSemesterName] = useState("");

  const toggleYearExpand = (yearId) => {
    setExpandedYears((prev) => ({ ...prev, [yearId]: !prev[yearId] }));
  };

  const handleAddSemester = (yearId) => {
    if (newSemesterName.trim()) {
      console.log(`Adding semester "${newSemesterName}" to year ID ${yearId}`);
      setNewSemesterName("");
    }
  };

  return (
    <Box
      sx={{ width: 300, p: 2, bgcolor: "white", boxShadow: 1, height: "100vh" }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        College Notes
      </Typography>
      {/* Render SidebarMenu */}
      <SidebarMenu />
      {/* Render Expandable Items */}
      {Object.keys(expandedYears).map((yearId) => (
        <ExpandableItem
          key={yearId}
          title={`Year ${yearId}`}
          expanded={expandedYears[yearId]}
          toggleExpand={() => toggleYearExpand(yearId)}
          onAdd={() => handleAddSemester(yearId)}
        >
          <InputField
            placeholder="New Semester"
            value={newSemesterName}
            onChange={(e) => setNewSemesterName(e.target.value)}
            onEnter={() => handleAddSemester(yearId)}
          />
        </ExpandableItem>
      ))}
    </Box>
  );
};

export default Sidebar;

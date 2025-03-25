import React from "react";
import { Box, Typography } from "@mui/material";
import SidebarMenu from "components/molecules/SidebarMenu"; // Import SidebarMenu

const Sidebar = ({
  years,
  selectedYear,
  selectedSemester,
  selectedSubject,
  setSelectedYear,
  setSelectedSemester,
  setSelectedSubject,
  setSelectedNote,
  addSemester,
  addSubject,
  addNote,
}) => {
  return (
    <Box
      sx={{
        width: 300,
        p: 2,
        bgcolor: "white",
        boxShadow: 1,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        College Notes
      </Typography>
      {/* Render SidebarMenu */}
      <SidebarMenu
        years={years}
        selectedYear={selectedYear}
        selectedSemester={selectedSemester}
        selectedSubject={selectedSubject}
        setSelectedYear={setSelectedYear}
        setSelectedSemester={setSelectedSemester}
        setSelectedSubject={setSelectedSubject}
        setSelectedNote={setSelectedNote}
        addSemester={addSemester}
        addSubject={addSubject}
        addNote={addNote}
      />
    </Box>
  );
};

export default Sidebar;

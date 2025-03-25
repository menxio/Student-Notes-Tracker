import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
  TextField,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import AddIcon from "@mui/icons-material/Add";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SubjectIcon from "@mui/icons-material/MenuBook";
import NoteIcon from "@mui/icons-material/Description";

const SidebarMenu = ({
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
  const [expandedYears, setExpandedYears] = useState({});
  const [newSemesterName, setNewSemesterName] = useState("");

  const toggleYearExpand = (yearId) => {
    setExpandedYears((prev) => ({ ...prev, [yearId]: !prev[yearId] }));
  };

  const handleAddSemester = (yearId) => {
    if (newSemesterName.trim()) {
      addSemester(yearId, newSemesterName);
      setNewSemesterName("");
    }
  };

  return (
    <List>
      {years.map((year) => (
        <React.Fragment key={year.id}>
          {/* Year Level */}
          <ListItem disablePadding>
            <ListItemButton onClick={() => toggleYearExpand(year.id)}>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary={year.name} />
              {expandedYears[year.id] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
            <IconButton onClick={() => toggleYearExpand(year.id)}>
              <AddIcon />
            </IconButton>
          </ListItem>
          {/* Semester */}
          <Collapse in={expandedYears[year.id]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {year.semesters.map((semester) => (
                <React.Fragment key={semester.id}>
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      onClick={() => setSelectedSemester(semester)}
                    >
                      <ListItemIcon>
                        <SubjectIcon />
                      </ListItemIcon>
                      <ListItemText primary={semester.name} />
                    </ListItemButton>
                  </ListItem>
                  {/* Subjects */}
                  <Collapse
                    in={selectedSemester?.id === semester.id}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {semester.subjects.map((subject) => (
                        <React.Fragment key={subject.id}>
                          <ListItem disablePadding>
                            <ListItemButton
                              sx={{ pl: 6 }}
                              onClick={() => setSelectedSubject(subject)}
                            >
                              <ListItemIcon>
                                <NoteIcon />
                              </ListItemIcon>
                              <ListItemText primary={subject.name} />
                            </ListItemButton>
                          </ListItem>
                        </React.Fragment>
                      ))}
                    </List>
                  </Collapse>
                </React.Fragment>
              ))}
              {/* Add Semester Input */}
              <ListItem sx={{ pl: 4 }}>
                <TextField
                  size="small"
                  placeholder="Semester name"
                  value={newSemesterName}
                  onChange={(e) => setNewSemesterName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleAddSemester(year.id);
                  }}
                />
                <IconButton onClick={() => handleAddSemester(year.id)}>
                  <AddIcon />
                </IconButton>
              </ListItem>
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default SidebarMenu;

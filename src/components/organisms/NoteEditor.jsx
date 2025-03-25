import React, { useEffect, useState } from "react";
import { Box, Paper } from "@mui/material";
import NoteHeader from "../molecules/NoteHeader";
import TextArea from "../atoms/TextArea";
import NoteFooter from "../molecules/NoteFooter";

const NoteEditor = () => {
  // Move note data here
  const [note, setNote] = useState({
    title: "My First Note",
    content: "This is the content of the note.",
    lastModified: new Date().toISOString(),
  });

  const [content, setContent] = useState(note.content);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);

  useEffect(() => {
    setContent(note.content);
    setLastSaved(formatDate(note.lastModified));
  }, [note]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
  };

  const handleSave = () => {
    setIsSaving(true);
    // Simulate saving logic
    setTimeout(() => {
      setIsSaving(false);
      setLastSaved(formatDate(new Date().toISOString()));
      setNote((prevNote) => ({
        ...prevNote,
        content,
        lastModified: new Date().toISOString(),
      }));
    }, 500);
  };

  return (
    <Paper
      elevation={3}
      style={{
        padding: 16,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NoteHeader
        title={note.title}
        lastModified={lastSaved || formatDate(note.lastModified)}
      />
      <Box flex={1} mb={2}>
        <TextArea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start typing your notes here..."
        />
      </Box>
      <NoteFooter
        isSaving={isSaving}
        lastSaved={lastSaved}
        onSave={handleSave}
      />
    </Paper>
  );
};

export default NoteEditor;

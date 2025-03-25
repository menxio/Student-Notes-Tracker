import React from "react";
import Sidebar from "./components/organisms/Sidebar";
import NoteEditor from "./components/organisms/NoteEditor";
import useCollegeNotes from "./hooks/useCollegeNotes";

function App() {
  const {
    years,
    selectedYear,
    selectedSemester,
    selectedSubject,
    selectedNote,
    setSelectedYear,
    setSelectedSemester,
    setSelectedSubject,
    setSelectedNote,
    addSemester,
    addSubject,
    addNote,
    updateNoteContent,
  } = useCollegeNotes();

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <Sidebar
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
      <main className="flex-1 p-4 overflow-auto">
        {selectedNote ? (
          <NoteEditor
            note={selectedNote}
            onSave={(content) => {
              if (selectedYear && selectedSemester && selectedSubject) {
                updateNoteContent(
                  selectedYear.id,
                  selectedSemester.id,
                  selectedSubject.id,
                  selectedNote.id,
                  content
                );
              }
            }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <h2 className="text-2xl font-semibold mb-2">
              Welcome to College Notes
            </h2>
            <p>Select a note from the sidebar to view or edit it</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;

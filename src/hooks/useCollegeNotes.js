import { useState, useEffect } from "react";

const useCollegeNotes = () => {
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem("collegeNotes");
    if (savedData) {
      setYears(JSON.parse(savedData));
    } else {
      const defaultYears = [
        { id: "1", name: "Freshman", semesters: [] },
        { id: "2", name: "Sophomore", semesters: [] },
        { id: "3", name: "Junior", semesters: [] },
        { id: "4", name: "Senior", semesters: [] },
      ];
      setYears(defaultYears);
      localStorage.setItem("collegeNotes", JSON.stringify(defaultYears));
    }
  }, []);

  useEffect(() => {
    if (years.length > 0) {
      localStorage.setItem("collegeNotes", JSON.stringify(years));
    }
  }, [years]);

  const addSemester = (yearId, semesterName) => {
    const updatedYears = years.map((year) => {
      if (year.id === yearId) {
        return {
          ...year,
          semesters: [
            ...year.semesters,
            { id: Date.now().toString(), name: semesterName, subjects: [] },
          ],
        };
      }
      return year;
    });
    setYears(updatedYears);
  };

  const addSubject = (yearId, semesterId, subjectName) => {
    const updatedYears = years.map((year) => {
      if (year.id === yearId) {
        return {
          ...year,
          semesters: year.semesters.map((semester) => {
            if (semester.id === semesterId) {
              return {
                ...semester,
                subjects: [
                  ...semester.subjects,
                  { id: Date.now().toString(), name: subjectName, notes: [] },
                ],
              };
            }
            return semester;
          }),
        };
      }
      return year;
    });
    setYears(updatedYears);
  };

  const addNote = (yearId, semesterId, subjectId, noteTitle) => {
    const updatedYears = years.map((year) => {
      if (year.id === yearId) {
        return {
          ...year,
          semesters: year.semesters.map((semester) => {
            if (semester.id === semesterId) {
              return {
                ...semester,
                subjects: semester.subjects.map((subject) => {
                  if (subject.id === subjectId) {
                    const newNote = {
                      id: Date.now().toString(),
                      title: noteTitle,
                      content: "",
                      lastModified: new Date().toISOString(),
                    };
                    return { ...subject, notes: [...subject.notes, newNote] };
                  }
                  return subject;
                }),
              };
            }
            return semester;
          }),
        };
      }
      return year;
    });
    setYears(updatedYears);
  };

  const updateNoteContent = (
    yearId,
    semesterId,
    subjectId,
    noteId,
    content
  ) => {
    const updatedYears = years.map((year) => {
      if (year.id === yearId) {
        return {
          ...year,
          semesters: year.semesters.map((semester) => {
            if (semester.id === semesterId) {
              return {
                ...semester,
                subjects: semester.subjects.map((subject) => {
                  if (subject.id === subjectId) {
                    return {
                      ...subject,
                      notes: subject.notes.map((note) => {
                        if (note.id === noteId) {
                          return {
                            ...note,
                            content,
                            lastModified: new Date().toISOString(),
                          };
                        }
                        return note;
                      }),
                    };
                  }
                  return subject;
                }),
              };
            }
            return semester;
          }),
        };
      }
      return year;
    });
    setYears(updatedYears);
  };

  return {
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
  };
};

export default useCollegeNotes;

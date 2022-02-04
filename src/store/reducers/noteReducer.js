const nextNoteId = (notes) => {
  const maxId = Math.max.apply(
    Math,
    notes.map((note) => note.id)
  );
  return maxId + 1;
};

const initState = {
  notes: [
    { id: "1", title: "first", content: "It is the first note" },
    { id: "2", title: "second", content: "It is the second note" },
    { id: "3", title: "third", content: "It is the third note" },
  ],
};

const noteReducer = (state = initState, action) => {
  switch (action.type) {
    case "note/create":
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id: nextNoteId(state.notes),
            title: action.payload.title,
            content: action.payload.content,
          },
        ],
      };
    case "note/edit":
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.id !== action.payload.id) {
            return note;
          } else {
            note.id = action.payload.id;
            note.title = action.payload.title;
            note.content = action.payload.content;
            return note;
          }
        }),
      };

    case "note/delete":
      return {
        ...state,
        notes: state.notes.filter((note) => {
          return note.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default noteReducer;

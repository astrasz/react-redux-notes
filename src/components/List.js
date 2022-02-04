import { Link } from "react-router-dom";

function List({ notes, remove }) {
  const btnMargin = {
    marginLeft: "10px",
  };

  return (
    <div className="col s12">
      {notes.length ? (
        notes.map((note) => {
          return (
            <div key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <button
                className="btn-small"
                type="button"
                onClick={() => remove(note.id)}
              >
                Delete
              </button>
              <Link to={`/edit/${note.id}`}>
                <button className="btn-small" type="button" style={btnMargin}>
                  Edit
                </button>
              </Link>
            </div>
          );
        })
      ) : (
        <p>No notes!</p>
      )}
    </div>
  );
}

export default List;

import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

function Edit({ edit, notes }) {
  const { id } = useParams();
  const note = notes.find((note) => note.id === id);
  const navigate = useNavigate();
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const submitEdit = (e, id) => {
    e.preventDefault();
    edit({ id, title, content });
    navigate("/list", { replace: true });
  };

  return (
    <form
      className="col s12"
      onSubmit={(e) => {
        submitEdit(e, id, title, content);
      }}
    >
      <h5>Edit note:</h5>
      <div className="input-field">
        <label htmlFor="title"></label>
        <input
          placeholder="title"
          className="validate"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="input-field">
        <label htmlFor="content"></label>
        <input
          placeholder="content"
          className="materialize-textarea"
          type="text"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <button className="btn" type="submit" placeholder="Content">
        Submit
      </button>
    </form>
  );
}

export default Edit;

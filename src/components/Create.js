import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Create({ create }) {
  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    if (title && content) {
      create({ title, content });
      navigate("/list", { replace: true });
    }
  };
  const handleChange = (e) => {
    if (e.target.id === "title") {
      setTitle(e.target.value);
    } else {
      setContent(e.target.value);
    }
  };

  return (
    <form className="col s12" onSubmit={addNote}>
      <h5>Add note:</h5>
      <div className="input-field">
        <label htmlFor="title">Title</label>
        <input
          className="validate"
          type="text"
          id="title"
          value={title}
          onChange={handleChange}
        />
      </div>

      <div className="input-field">
        <label htmlFor="content">Content</label>
        <input
          className="materialize-textarea"
          type="text"
          id="content"
          value={content}
          onChange={handleChange}
        />
      </div>

      <button className="btn" type="submit" placeholder="Content">
        Create
      </button>
    </form>
  );
}

export default Create;

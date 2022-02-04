// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Create from "./components/Create";
import List from "./components/List";
import Edit from "./components/Edit";
import { connect } from "react-redux";
import { remove, edit, create } from "./actions/noteActions";

function App({ notes, remove, edit, create }) {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="row">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create" element={<Create create={create} />} />
            <Route
              path="/list"
              element={<List notes={notes} remove={remove} />}
            />
            <Route
              path="/edit/:id"
              element={<Edit edit={edit} notes={notes} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (noteId) => dispatch(remove(noteId)),
    edit: (data) => dispatch(edit(data)),
    create: (data) => dispatch(create(data)),
  };
};

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

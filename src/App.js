import React from "react";
import { connect } from "react-redux";
import {
  addEntries,
  clearEntries,
} from "./redux/Entries/entries.actions";

function App() {
  return (
    <div className="App"></div>
  );
}

const mapStateToProps = state => {
  return {
    entries: state.entries.entries,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addEntries: () => dispatch(addEntries()),
    clearEntries: () => dispatch(clearEntries()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
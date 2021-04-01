import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  addEntries,
  fetchEntries
} from "./redux/Entries/entries.actions";
import Main from "./components/Main/Main";

function App(props) {
  useEffect(() => {
    props.fetchEntries();
  }, []);

  return (
    <div className="App">
      <Main entries={props.entries} />
    </div>
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
    fetchEntries: () => dispatch(fetchEntries()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
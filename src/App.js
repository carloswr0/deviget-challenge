import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  addEntries,
  fetchEntries,
  dismissEntry,
  clearEntries,
  selectEntry
} from "./redux/Entries/entries.actions";
import Main from "./components/Main/Main";
import Details from "./components/Main/Details/Details";

function App(props) {
  useEffect(() => {
    const { entriesState, fetchEntries } = props;
    const { entries } = entriesState;
    const noEntries = entries.length === 0;
    if (noEntries) {
      fetchEntries();
    }
  }, []);

  return (
    <div className="App">
      <Main {...props} />
      <Details {...props} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    entriesState: state.entriesState,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addEntries: () => dispatch(addEntries()),
    dismissEntry: (id) => dispatch(dismissEntry(id)),
    fetchEntries: () => dispatch(fetchEntries()),
    clearEntries: () => dispatch(clearEntries()),
    selectEntry: (entry) => dispatch(selectEntry(entry))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
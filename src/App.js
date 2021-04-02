import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  addEntries,
  fetchEntries,
  dismissEntry,
  clearEntries,
  selectEntry
} from "./redux/Entries/entries.actions";
import Dashboard from "./components/Dashboard/Dashboard";
import List from "./components/List/List";
import Details from "./components/Details/Details";

function App(props) {
  useEffect(() => {
    const { entriesState, fetchEntries } = props;
    const { entries } = entriesState;
    const noEntries = entries.length === 0;
    if (noEntries) {
      fetchEntries();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Dashboard>
        <List {...props} />
        <Details {...props} />
      </Dashboard>
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
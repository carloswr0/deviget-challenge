import styled from 'styled-components';
import { connect } from "react-redux";
import {
  dismissEntry,
} from "../redux/Entries/entries.actions";

const StyledEntryFooter = styled.div`
  border: 1px solid orange;
`;

const EntryFooter = ({entry, dismissEntry}) => {
  return (
    <StyledEntryFooter>
      <p>Comments: {entry.comments}</p>
      {entry.unread && <p>Unread</p>}
      <div onClick={(e) => {
        e.stopPropagation();
        dismissEntry(entry.id)
      }}>
        Dismiss
      </div>
    </StyledEntryFooter>
  );
};

const mapStateToProps = state => {
  return {
    entriesState: state.entriesState,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dismissEntry: (id) => dispatch(dismissEntry(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryFooter)
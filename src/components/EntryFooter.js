import styled from 'styled-components';
import { connect } from "react-redux";
import {
  dismissEntry,
} from "../redux/Entries/entries.actions";

const StyledEntryFooter = styled.div`
  display: flex;
  padding: 10px; 
  & > * {
    margin-right: 10px;
    padding: 5px 15px;
  }
  @media only screen and (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Bold = styled.b`
  font-weight: bold;
  font-size: 1.2rem;
`

const Unread = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;

const Dismiss = styled.button`
  border: none;
  background-color: transparent;
  color: inherit;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background-color: #0000001f;
    border-radius: 10px;
    transition: 0.1s ease-out;
  }
`

const EntryFooter = ({entry, dismissEntry}) => {
  return (
    <StyledEntryFooter>
      <Bold>💬 {entry.comments} Comments</Bold>
      {entry.unread && <Unread>👁‍🗨 Unread</Unread>}
      <Dismiss onClick={(e) => {
        e.stopPropagation();
        dismissEntry(entry.id)
      }}>
        ❌ Dismiss
      </Dismiss>
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
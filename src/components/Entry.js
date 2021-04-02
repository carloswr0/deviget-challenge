import styled from 'styled-components';
import { connect } from "react-redux";
import {
  selectEntry,
} from "../redux/Entries/entries.actions";

const StyledEntry = styled.div`
    border: 1px solid blue;
    margin-bottom: 20px;
`;

const Entry = (props) => {
  return (
    <StyledEntry onClick={() => props.selectEntry(props.entry)}>
      {props.children}
    </StyledEntry>
  );
};

const mapStateToProps = state => {
    return {
      entriesState: state.entriesState,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      selectEntry: (entry) => dispatch(selectEntry(entry)),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Entry)
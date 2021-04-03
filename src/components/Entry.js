import styled from 'styled-components';
import { connect } from "react-redux";
import {
  selectEntry,
} from "../redux/Entries/entries.actions";

const StyledEntry = styled.div`
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: rgba(255,255,255,0.3);
  box-shadow: 5px 5px 0px #0000002e;
`;

const Entry = (props) => {
  return (
    <StyledEntry onClick={() => props.selectEntry(props.entry)}>
      {props.children}
    </StyledEntry>
  );
};

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    selectEntry: (entry) => dispatch(selectEntry(entry)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Entry)
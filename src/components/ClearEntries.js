import styled from 'styled-components';
import { connect } from "react-redux";
import {
  clearEntries,
} from "../redux/Entries/entries.actions";

const StyledClearEntries = styled.button`
  border: none;
  background-color: transparent;
  color: inherit;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    text-decoration-line: underline;
    color: red;
  }
`;

const ClearEntries = ({children, clearEntries}) => {
  return (
    <StyledClearEntries onClick={() => clearEntries()}>
      {children}
    </StyledClearEntries>
  );
};

const mapStateToProps = () => {
  return {}
}
  
const mapDispatchToProps = dispatch => {
  return {
    clearEntries: () => dispatch(clearEntries()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClearEntries)
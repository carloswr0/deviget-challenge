import React, { useEffect } from 'react';
import { connect } from "react-redux";
import {
  dismissEntry,
} from "../../../redux/Entries/entries.actions";
import styled from 'styled-components';

const DetailsContainer = styled.div``;

const Details = (props) => {
  return (
    <DetailsContainer>
      Details will be shown here.
    </DetailsContainer>
  )
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Details)
import React from 'react';
import isEmpty from '../../helpers/isObjEmpty';
import { connect } from "react-redux";
import {
  dismissEntry,
} from "../../redux/Entries/entries.actions";
import styled from 'styled-components';
import toTimestamps from '../../helpers/formatTimestamps';

const entryDateToMs = (date) => date * 1000;
const DetailsContainer = styled.div`
  border: 2px solid violet;
  margin: 50px;
  flex: 1;
`;

const Details = ({selectedEntry}) => {
  const dateNowInMs = Date.now();
  const {title, author, entry_date, fullscreen_image_url} = selectedEntry;

  if (!isEmpty(selectedEntry)) {
    return (
      <DetailsContainer>
        <h1>{title}</h1>
        <span>Posted by {author} {toTimestamps(dateNowInMs, entryDateToMs(entry_date))}</span>
        {
          fullscreen_image_url && <img 
            src={fullscreen_image_url} 
            alt="" 
          >
          </img>
        }
      </DetailsContainer>
    )
  }
  return null;
}

const mapStateToProps = state => {
  return {
    selectedEntry: state.entriesState.selectedEntry,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dismissEntry: (id) => dispatch(dismissEntry(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
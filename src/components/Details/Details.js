import React from 'react';
import isEmpty from '../../helpers/isObjEmpty';
import { connect } from "react-redux";
import {
  dismissEntry,
  unselectEntry
} from "../../redux/Entries/entries.actions";
import styled from 'styled-components';
import toTimestamps from '../../helpers/formatTimestamps';

const entryDateToMs = (date) => date * 1000;

const DetailsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 2vw;
  padding: 28px;
  border-radius: 5px;
  background-color: rgba(255,255,255,0.3);
  box-shadow: 5px 5px 0px #0000002e;
  height: 100%;
  @media only screen and (min-width: 992px) {
    margin: 4vw;
  }
`;

const Bold = styled.b`
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 10px;
`

const Blur = styled.p`
  opacity: 0.8;
  font-size: 1.5rem;
  margin-bottom: 28px;
`

const PostImage = styled.img`
  width: 100%;
`;

const Options = styled.div`
  display: flex;
  padding: 10px; 
  justify-content: space-between;
  & > * {
    padding: 5px 15px;
  }
`;

const Option = styled.button`
  border: none;
  background-color: transparent;
  color: inherit;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: #0000001f;
    border-radius: 10px;
    transition: 0.1s ease-out;
  }
`

const Details = ({selectedEntry, dismissEntry, unselectEntry}) => {
  const dateNowInMs = Date.now();
  const {title, author, entry_date, fullscreen_image_url} = selectedEntry;

  if (!isEmpty(selectedEntry)) {
    return (
      <DetailsContainer>
        <Bold>{title}</Bold>
        <Blur>Posted by {author} {toTimestamps(dateNowInMs, entryDateToMs(entry_date))}</Blur>
        {
          fullscreen_image_url && <PostImage 
            src={fullscreen_image_url} 
            alt="" 
          >
          </PostImage>
        }
      <Options>
        <Option onClick={(e) => {
          unselectEntry()
        }}>
          ↩️ Hide
        </Option>
        <Option onClick={(e) => {
          dismissEntry(selectedEntry.id)
        }}>
          ❌ Dismiss
        </Option>
      </Options>
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
    unselectEntry: (entry) => dispatch(unselectEntry(entry))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
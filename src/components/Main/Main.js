import { MainContainer } from './MainContainer';
import React, { useState } from 'react';
import styled from 'styled-components';
import toTimestamps from '../../helpers/formatTimestamps';

const Entry = styled.div`
  border: 3px solid blue;
`;
const EntryHeader = styled.div``;
const EntryBody = styled.div``;
const EntryFooter = styled.div``;

const Main = ({entriesState, dismissEntry, clearEntries, selectEntry}) => {
  const { entries, fetched, fetchSuccess, fetchFailed } = entriesState;
  
  const [pageNumber, setPageNumber]= useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const currentPageNumber = (pageNumber * entriesPerPage) - entriesPerPage; 
  const paginatedEntries = [...entries].splice(currentPageNumber, entriesPerPage);

  const handlePrev = () => {
    if (shouldHavePrev) {
      setPageNumber(pageNumber - 1)
    }
  }

  const handleNext = () => {
    if (shouldHaveNext) {
      setPageNumber(pageNumber + 1)
    }
  }

  const hasntFetched = fetched === false;
  const entriesAvailable = entries.length !== 0;
  const shouldHavePrev = pageNumber !== 1;
  const shouldHaveNext = entries.length > entriesPerPage * pageNumber;

  const dateNowInMs = Date.now();
  const entryDateToMs = (date) => date * 1000;

  return (
    <MainContainer>
      {hasntFetched && <div>Loading...</div>}
      {fetchFailed && <div>Error!</div>}
      {entriesAvailable && <span onClick={() => clearEntries()}>Clear all the entries</span>}
      {!entriesAvailable && fetchSuccess && <div>There are no more entries to show.</div>}
      {paginatedEntries.map(entry => {
        return (
          <Entry key={entry.id} onClick={() => selectEntry(entry)}>
            <EntryHeader>
              <div>Posted by {entry.author} {toTimestamps(dateNowInMs, entryDateToMs(entry.entry_date))}</div>
              <div>{entry.title}</div>
            </EntryHeader>
            <EntryBody>
              <a href={entry.fullscreen_image_url}>
                <img src={entry.thumbnail_url} />
              </a>
            </EntryBody>
            <EntryFooter>
              <p>Comments: {entry.comments}</p>
              {entry.unread && <p>Unread</p>}
              <div onClick={() => dismissEntry(entry.id)}>Dismiss</div>
            </EntryFooter>
          </Entry>
        )
      })
    }
    {
      entriesAvailable && (
        <>
          <div>Page {pageNumber} </div>
          <div>
              <button disabled={!shouldHavePrev} onClick={() => handlePrev()}>prev</button>
              <button disabled={!shouldHaveNext} onClick={() => handleNext()}>next</button>
          </div>
        </>
      )
    }
    </MainContainer>
  )
}

export default Main
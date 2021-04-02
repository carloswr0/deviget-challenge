import { StyledList } from './StyledList';
import React, { useState, useEffect } from 'react';
import Entry from '../Entry';
import EntryHeader from '../EntryHeader';
import EntryBody from '../EntryBody';
import EntryFooter from '../EntryFooter';
import Pagination from '../Pagination';
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';

const List = ({entriesState, clearEntries}) => {
  const { entries, fetched, fetchSuccess, fetchFailed } = entriesState;
  const [pageNumber, setPageNumber] = useState(1);
  const [entriesPerPage] = useState(10);
  const currentPageNumber = (pageNumber * entriesPerPage) - entriesPerPage; 
  const paginatedEntries = [...entries].splice(currentPageNumber, entriesPerPage);
  const hasntFetched = fetched === false;
  const entriesAvailable = entries.length !== 0;
  const shouldHavePrev = pageNumber !== 1;
  const shouldHaveNext = entries.length > entriesPerPage * pageNumber;
  const dateNowInMs = Date.now();
  const handlePrev = () => shouldHavePrev && setPageNumber(pageNumber - 1);
  const handleNext = () => shouldHaveNext && setPageNumber(pageNumber + 1);
  
  const paginationProps = {
    shouldHavePrev,
    shouldHaveNext,
    handlePrev,
    handleNext,
    pageNumber
  };

  useEffect(() => {
    const ranOutOfEntries = paginatedEntries.length === 0
    if (ranOutOfEntries) {
      handlePrev();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginatedEntries]);

  return (
    <StyledList>
      {hasntFetched && <Loading />}
      {fetchFailed && <ErrorMessage>Error: We could'nt get any information, please try again!</ErrorMessage>}
      {!entriesAvailable && fetchSuccess && <ErrorMessage>There are no more entries to show.</ErrorMessage>}
      {entriesAvailable && <span onClick={() => clearEntries()}>Clear all the entries</span>}
      {paginatedEntries.map(entry => {
        return (
          <Entry key={entry.id} entry={entry}>
            <EntryHeader entry={entry} date={dateNowInMs} />
            <EntryBody entry={entry} />
            <EntryFooter entry={entry} />
          </Entry>
        )
      })
      }
      {entriesAvailable && <Pagination {...paginationProps} />}
    </StyledList>
  )
}

export default List
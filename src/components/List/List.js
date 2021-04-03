import { StyledList } from './StyledList';
import { connect } from "react-redux";
import React, { useState, useEffect } from 'react';
import Entry from '../Entry';
import EntryHeader from '../EntryHeader';
import EntryBody from '../EntryBody';
import EntryFooter from '../EntryFooter';
import Pagination from '../Pagination';
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';
import ClearEntries from '../ClearEntries';
import isObjEmpty from '../../helpers/isObjEmpty';

const List = ({entriesState}) => {
  const { entries, fetched, fetchSuccess, fetchFailed, selectedEntry } = entriesState;
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
    <StyledList selectedEntry={isObjEmpty(selectedEntry)}>
      {hasntFetched && <Loading />}
      {fetchFailed && <ErrorMessage>Error: We could'nt get any information, please try again!</ErrorMessage>}
      {!entriesAvailable && fetchSuccess && <ErrorMessage>There are no more entries to show.</ErrorMessage>}
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
    {entriesAvailable && <ClearEntries>Clear all the entries</ClearEntries>}
    </StyledList>
  )
}

const mapStateToProps = state => {
  return {
    entriesState: state.entriesState,
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
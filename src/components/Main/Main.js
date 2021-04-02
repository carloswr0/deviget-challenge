import { MainContainer } from './MainContainer';
import styled from 'styled-components';

const Entry = styled.div``;
const EntryHeader = styled.div``;
const EntryBody = styled.div``;
const EntryFooter = styled.div``;

const Main = ({entriesState, dismissEntry, clearEntries, selectEntry}) => {
  const { entries, fetched, fetchSuccess, fetchFailed } = entriesState;
  const hasntFetched = fetched === false;
  const entriesAvailable = entries.length !== 0;
  
  return (
    <MainContainer>
      {hasntFetched && <div>Loading...</div>}
      {fetchFailed && <div>Error!</div>}
      {entriesAvailable && <span onClick={() => clearEntries()}>Clear all the entries</span>}
      {!entriesAvailable && fetchSuccess && <div>There are no more entries to show.</div>}
      {entries.map(entry => {
        return (
          <Entry key={entry.id} onClick={() => selectEntry(entry)}>
            <EntryHeader>
              <div>Posted by {entry.author} {entry.entry_date} hours ago.</div>
              <div>{entry.title}</div>
            </EntryHeader>
            <EntryBody>
              <a href={entry.fullscreen_image_url}>
                <img src={entry.thumbnail_url} />
              </a>
            </EntryBody>
            <EntryFooter>
              <p>Comments: {entry.comments}</p>
              <div onClick={() => dismissEntry(entry.id)}>Dismiss</div>
            </EntryFooter>
          </Entry>
        )
      })
    }
    </MainContainer>
  )
}

export default Main
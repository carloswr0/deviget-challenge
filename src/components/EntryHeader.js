import styled from 'styled-components';
import toTimestamps from '../helpers/formatTimestamps';

const StyledEntryHeader = styled.div`
  border: 1px solid red;
`;
const entryDateToMs = (date) => date * 1000;

const EntryHeader = ({entry, date}) => {
  return (
    <StyledEntryHeader>
      <div>Posted by {entry.author} {toTimestamps(date, entryDateToMs(entry.entry_date))}</div>
      <div>{entry.title}</div>
    </StyledEntryHeader>
  );
};

export default EntryHeader;
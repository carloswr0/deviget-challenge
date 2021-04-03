import styled from 'styled-components';
import toTimestamps from '../helpers/formatTimestamps';

const StyledEntryHeader = styled.div`
  padding: 10px 10px 4px 10px; 
`;

const Blur = styled.p`
  opacity: 0.8;
  font-size: 1.5rem;
`

const entryDateToMs = (date) => date * 1000;

const EntryHeader = ({entry, date}) => {
  return (
    <StyledEntryHeader>
      <Blur>Posted by {entry.author} {toTimestamps(date, entryDateToMs(entry.entry_date))}</Blur>
    </StyledEntryHeader>
  );
};

export default EntryHeader;
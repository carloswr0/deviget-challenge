import styled from 'styled-components';

const StyledEntryBody = styled.div`
  border: 1px solid green;
`;

const EntryBody = ({entry}) => {
  return (
    <StyledEntryBody>
      <a href={entry.fullscreen_image_url}>
        <img src={entry.thumbnail_url} alt=""/>
      </a>
    </StyledEntryBody>
  );
};

export default EntryBody;
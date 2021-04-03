import styled from 'styled-components';

const StyledEntryBody = styled.div`
  display: flex;
  padding: 0 10px;
  @media only screen and (max-width: 600px) {
    & > * {
      margin-bottom: 20px;
    }
    flex-direction: column;
    align-items: center;
  }
`;

const Bold = styled.b`
  flex: 1;
  font-weight: bold;
  font-size: 2rem;
`

const Thumbnail = styled.img`
  border: 1px solid black;
  border-radius: 3px;
  margin-right: 18px;
  display: table-row;
`;

const LinkToImg = styled.a`
  display: table;
`;

const EntryBody = ({entry}) => {
  return (
    <StyledEntryBody>
      <Bold>{entry.title}</Bold>
      <LinkToImg href={entry.fullscreen_image_url}>
        <Thumbnail src={entry.thumbnail_url} alt=""/>
      </LinkToImg>
    </StyledEntryBody>
  );
};

export default EntryBody;
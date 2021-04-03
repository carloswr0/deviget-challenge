import styled from 'styled-components';

const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const Buttons = styled.button`
  border: none;
  background-color: transparent;
  color: inherit;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    transition: 0.1s ease-out;
    text-decoration-line: underline;
  }
`;

const Page = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;

const Pagination = (props) => {
  const {shouldHavePrev, shouldHaveNext, pageNumber, handlePrev, handleNext} = props;
  return (
    <StyledPagination>
      {shouldHavePrev && <Buttons onClick={() => handlePrev()}>◀️ PREVIOUS</Buttons>}
      <Page>PAGE {pageNumber} </Page>
      {shouldHaveNext && <Buttons onClick={() => handleNext()}>NEXT ▶️</Buttons>}
    </StyledPagination>
  );
};

export default Pagination;
import styled from 'styled-components';

const StyledPagination = styled.div`
    
`;

const Pagination = (props) => {
  return (
    <StyledPagination>
      <div>Page {props.pageNumber} </div>
      <div>
          <button disabled={!props.shouldHavePrev} onClick={() => props.handlePrev()}>prev</button>
          <button disabled={!props.shouldHaveNext} onClick={() => props.handleNext()}>next</button>
      </div>
    </StyledPagination>
  );
};

export default Pagination;
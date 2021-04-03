import styled from 'styled-components';

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2vw;
  margin-right: ${props => props.selectedEntry ? '2vw;' : '0vw;'}
  flex: 1;
  @media only screen and (min-width: 992px) {
    margin: 4vw;
  }
  @media only screen and (max-width: 768px) {
    ${props => props.selectedEntry ? 'display: flex;' : 'display: none;'}
  }
`;
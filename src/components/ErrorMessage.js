import styled from 'styled-components';

const StyledErrorMessage = styled.div`
    
`;

const ErrorMessage = ({children}) => {
  return (
    <StyledErrorMessage>
      {children}
    </StyledErrorMessage>
  );
};

export default ErrorMessage;
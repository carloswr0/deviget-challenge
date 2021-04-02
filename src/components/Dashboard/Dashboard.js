import React from 'react';
import styled from 'styled-components';

const StyledDashboard = styled.div`
  display: flex;
`;

const Dashboard = ({children}) => {
  return (
    <StyledDashboard>
      {children}
    </StyledDashboard>
  )
}

export default Dashboard;
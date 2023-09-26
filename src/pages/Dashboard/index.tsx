import styled from 'styled-components';

import Header from '../../components/layouts/Header';
import NavigationLeft from '../../components/NavigationLeft';
import MainTitle from '../../components/MainTitle';
import KPI from '../../components/KPI';
import Statistics from '../../components/Statistics';
import Actions from '../../components/Actions';

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <NavigationLeft />
      <DashboardContentWrapper>
        <Header />
        <main>
          <MainTitle
            src="/assets/flash-icon-green.svg"
            title="Tableau de bord"
            margin="30px 0 40px 0"
          />
          <DashBoardContent>
            <KPI />
            <Statistics />
          </DashBoardContent>
          <Actions />
        </main>
      </DashboardContentWrapper>
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.div`
  display: flex;
`;

const DashboardContentWrapper = styled.div`
  background-color: #f4f8f6;
  width: 100%;
  margin: 30px 40px 0 40px;
`;

const DashBoardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export default Dashboard;

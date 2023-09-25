import styled from 'styled-components';

import Header from '../../components/layouts/Header';
import NavigationLeft from '../../components/NavigationLeft';
import KPI from '../../components/KPI';
import Statistics from '../../components/Statistics';
import Actions from '../../components/Actions';

const Dashboard = () => {
  return (
    <>
      <DashboardWrapper>
        <NavigationLeft />
        <DashboardContentWrapper>
          <Header />
          <main>
            <DashboardMainTitleWrapper>
              <DashboardMainIcon src="/assets/flash-icon-green.svg" />
              <DashboardMainTitle>Tableau de bord</DashboardMainTitle>
            </DashboardMainTitleWrapper>
            <DashBoardContent>
              <KPI />
              <Statistics />
            </DashBoardContent>
            <Actions />
          </main>
        </DashboardContentWrapper>
      </DashboardWrapper>
    </>
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

const DashboardMainTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DashboardMainIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const DashboardMainTitle = styled.h1`
  font-size: 40px;
  margin: 30px 0 40px 0;
`;

const DashBoardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export default Dashboard;

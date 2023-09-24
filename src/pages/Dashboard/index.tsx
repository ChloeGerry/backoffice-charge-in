import styled from 'styled-components';

import Header from '../../components/layouts/Header';
import NavigationLeft from '../../components/NavigationLeft';
import KPI from '../../components/KPI';
import KPIButton from '../../components/KPIButton';

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
            <KPISection>
              <KPIHeaderContentWrapper>
                <KPITitle>
                  Objectifs de <KPIChargeInTitle>Charge-In</KPIChargeInTitle>
                </KPITitle>
                <KPIButton text="1er trimestre" />
                <KPIButton text="2ème trimestre" />
                <KPIButton text="3ème trimestre" />
                <KPIButton text="année 2023" />
              </KPIHeaderContentWrapper>
              <KPIWrapper>
                <KPI KPIInformation="50 Partenaires" progression={76} />
                <KPI KPIInformation="100 Installateurs" progression={45} />
                <KPI KPIInformation="200 Installations" progression={100} />
              </KPIWrapper>
            </KPISection>
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
`;

const KPISection = styled.section`
  background: linear-gradient(#0c354f, #326b8f);
  box-shadow: 0 4px 16px 0px rgba(164, 188, 211, 0.6);
  padding: 30px 38px;
  border-radius: 16px;
`;

const KPIHeaderContentWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 25px;
`;

const KPITitle = styled.h2`
  font-size: 27px;
  line-height: 35px;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
`;

const KPIChargeInTitle = styled.strong`
  color: #4bd2ca;
`;

const KPIWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Dashboard;

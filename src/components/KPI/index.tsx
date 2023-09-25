import styled from 'styled-components';

import KPIContent from '../KPIContent';
import KPIButton from '../KPIButton';
import SecondaryTitle from '../SecondaryTitle';

const KPI = () => {
  return (
    <KPISection>
      <KPIHeaderContentWrapper>
        <SecondaryTitle
          title="Objectifs de "
          importantPart="Charge-In"
          colorTitle="#ffffff"
          colorImportantPart="#4bd2ca"
        />
        <KPIButton text="1er trimestre" />
        <KPIButton text="2ème trimestre" />
        <KPIButton text="3ème trimestre" />
        <KPIButton text="année 2023" />
      </KPIHeaderContentWrapper>
      <KPIContentWrapper>
        <KPIContent KPIInformation="50 Partenaires" progression={76} />
        <KPIContent KPIInformation="100 Installateurs" progression={45} />
        <KPIContent KPIInformation="200 Installations" progression={100} />
      </KPIContentWrapper>
    </KPISection>
  );
};

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

const KPIContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default KPI;

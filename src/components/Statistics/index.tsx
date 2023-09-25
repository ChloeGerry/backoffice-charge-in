import styled from 'styled-components';
import { useState } from 'react';

import Card from '../../components/Card';
import StatisticsPercentage from '../StatisticsPercentages';
import B2CB2BDetails from '../B2CB2BDetails';
import SecondaryTitle from '../SecondaryTitle';

const Statistics = () => {
  const [isStatisticsButtonOpen, setStatisticsButton] =
    useState<boolean>(false);

  return (
    <section>
      <StatisticsHeader>
        <SecondaryTitle
          title="Statistiques de "
          importantPart="Charge-In"
          colorTitle="#000000"
          colorImportantPart="#369C96"
        />
        <StatisticsButtonsWrapper>
          <StatisticsButton
            $color="#ffffff"
            $background="linear-gradient(to right, #8bdfda, #369c96)"
            $padding="8px 12px"
            type="button"
            onClick={() => {
              return setStatisticsButton(!isStatisticsButtonOpen);
            }}
          >
            Cette année
            <img src="/assets/arrow-down-icon.svg" />
          </StatisticsButton>

          {isStatisticsButtonOpen && (
            <StatisticsButtonsDropdown>
              <StatisticsButton type="button">Cette année</StatisticsButton>
              <StatisticsButton type="button">
                30 dernier jours
              </StatisticsButton>
              <StatisticsButton type="button">Mois de Juin</StatisticsButton>
              <StatisticsButton type="button">6 derniers mois</StatisticsButton>
              <StatisticsButton type="button">
                12 derniers mois
              </StatisticsButton>
            </StatisticsButtonsDropdown>
          )}
        </StatisticsButtonsWrapper>
      </StatisticsHeader>
      <CardsWrapper>
        <Card
          icon="/assets/person-icon.svg"
          text="Installateurs partenaires inscrits"
        >
          <StatisticsPercentage
            number={78}
            src="/assets/arrow-down-icon-red.svg"
            color="#a94442"
            percentage={2}
          />
        </Card>
        <Card icon="/assets/ion_pie-chart.svg" text="Abonnements en cours">
          <StatisticsCardText>
            {' '}
            Nombre d'abonnements{' '}
            <StatisticsCardSubstriction>22</StatisticsCardSubstriction>
          </StatisticsCardText>
          <StatisticsPercentage
            isNumberAPrice={true}
            number={261}
            color="#AFB2B6"
            percentage={2}
          />
        </Card>
        <Card icon="/assets/file-icon.svg" text="Devis réalisés">
          <StatisticsPercentage
            number={105}
            src="/assets/arrow-down-icon-red.svg"
            color="#a94442"
            percentage={2}
          />
          <B2CB2BDetails exitValue="##" entriesValue="##" />
        </Card>
        <Card icon="/assets/chargin-station-icon.svg" text="Points de charge">
          <StatisticsPercentage
            number={450}
            src="/assets/up-arrow-green.svg"
            color="#27AE60"
            percentage={18}
          />
          <B2CB2BDetails exitValue="##" entriesValue="##" />
        </Card>
        <Card
          icon="/assets/supervision-icon.svg"
          text="Points de charge supervisés"
        >
          <StatisticsPercentage
            number={432}
            src="/assets/up-arrow-green.svg"
            color="#27AE60"
            percentage={18}
          />
          <B2CB2BDetails exitValue="##" entriesValue="##" />
        </Card>
        <Card icon="/assets/folder-icon.svg" text="Taux de conversion">
          <StatisticsPercentage
            number={78}
            src="/assets/arrow-down-icon-red.svg"
            color="#a94442"
            percentage={2}
          />
          <B2CB2BDetails exitValue="##" entriesValue="##" />
        </Card>
        <Card icon="/assets/money-icon.svg" text="Chiffre d'affaires">
          <StatisticsPercentage
            isNumberAPrice={true}
            number={26100}
            src="/assets/up-arrow-green.svg"
            color="#27AE60"
            percentage={6}
          />
          <B2CB2BDetails
            exitValue="12000€ HT"
            entriesValue="22045€ HT"
            flexDirection="column"
            gap="8px"
          />
        </Card>
      </CardsWrapper>
    </section>
  );
};

const StatisticsHeader = styled.div`
  display: flex;
  gap: 24px;
`;

const StatisticsButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StatisticsButton = styled.button<{
  $color?: string;
  $background?: string;
  $padding?: string;
}>`
  display: flex;
  align-items: center;
  gap: 80px;
  background: ${({ $background }) => $background || '#ffffff'};
  border: none;
  border-radius: 8px;
  padding: ${({ $padding }) => $padding || '10px 12px'};
  color: ${({ $color }) => $color};
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background-color: #ebebeb;
  }
`;

const StatisticsButtonsDropdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: white;
  border-radius: 12px;
  padding: 8px;
`;

const CardsWrapper = styled.div`
  margin: 24px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const StatisticsCardText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 21.6px;
  color: #8fa2a2;
`;

const StatisticsCardSubstriction = styled.strong`
  color: #0c354f;
  line-height: 19.6px;
`;

export default Statistics;

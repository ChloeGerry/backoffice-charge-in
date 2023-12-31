import styled from 'styled-components';
import { useState } from 'react';

import StatisticsCard from '../Cards/StatisticsCard';
import StatisticsPercentage from '../StatisticsPercentages';
import B2CB2BDetails from '../B2CB2BDetails';
import SecondaryTitle from '../SecondaryTitle';
import GradientButton from '../Buttons/GradientButton';

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
          <GradientButton
            text="Cette année"
            padding="8px 12px"
            fontSize="18px"
            lineHeight="26px"
            gap="80px"
            onClick={() => {
              return setStatisticsButton(!isStatisticsButtonOpen);
            }}
            isContainIcon={true}
            src="/assets/arrow-down-icon.svg"
          />

          {isStatisticsButtonOpen && (
            <StatisticsListDropdown>
              <StatisticsList>Cette année</StatisticsList>
              <StatisticsList>30 dernier jours</StatisticsList>
              <StatisticsList>Mois de Juin</StatisticsList>
              <StatisticsList>6 derniers mois</StatisticsList>
              <StatisticsList>12 derniers mois</StatisticsList>
            </StatisticsListDropdown>
          )}
        </StatisticsButtonsWrapper>
      </StatisticsHeader>
      <CardsWrapper>
        <StatisticsCard
          icon="/assets/person-icon.svg"
          text="Installateurs partenaires inscrits"
        >
          <StatisticsPercentage
            number={78}
            src="/assets/arrow-down-icon-red.svg"
            color="#a94442"
            percentage={2}
          />
        </StatisticsCard>
        <StatisticsCard
          icon="/assets/ion_pie-chart.svg"
          text="Abonnements en cours"
        >
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
        </StatisticsCard>
        <StatisticsCard icon="/assets/file-icon.svg" text="Devis réalisés">
          <StatisticsPercentage
            number={105}
            src="/assets/arrow-down-icon-red.svg"
            color="#a94442"
            percentage={2}
          />
          <B2CB2BDetails exitValue="##" entriesValue="##" />
        </StatisticsCard>
        <StatisticsCard
          icon="/assets/charge-in-station-icon.svg"
          text="Points de charge"
        >
          <StatisticsPercentage
            number={450}
            src="/assets/up-arrow-green.svg"
            color="#27AE60"
            percentage={18}
          />
          <B2CB2BDetails exitValue="##" entriesValue="##" />
        </StatisticsCard>
        <StatisticsCard
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
        </StatisticsCard>
        <StatisticsCard
          icon="/assets/folder-icon.svg"
          text="Taux de conversion"
        >
          <StatisticsPercentage
            number={78}
            src="/assets/arrow-down-icon-red.svg"
            color="#a94442"
            percentage={2}
          />
          <B2CB2BDetails exitValue="##" entriesValue="##" />
        </StatisticsCard>
        <StatisticsCard icon="/assets/money-icon.svg" text="Chiffre d'affaires">
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
        </StatisticsCard>
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

const StatisticsListDropdown = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 8px;
  width: 203px;
  position: absolute;
  top: 537px;
  margin: 0;
  box-shadow: 0 4px 16px 0 rgba(180, 189, 189, 0.25);
`;

const StatisticsList = styled.li`
  font-size: 16px;
  line-height: 21.6px;
  padding: 10px 12px;
  list-style: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #ebebeb;
  }
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

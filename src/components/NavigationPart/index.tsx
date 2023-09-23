import styled from 'styled-components';

interface Props {
  partTitle: string;
}

const NavigationPart = ({ partTitle }: Props) => {
  return <NavigationPartTitle>{partTitle}</NavigationPartTitle>;
};

export default NavigationPart;

const NavigationPartTitle = styled.span`
  text-transform: uppercase;
  color: #6a93ac;
  font-size: 15px;
  line-height: 24.6px;
  letter-spacing: 3px;
`;

import styled from 'styled-components';

interface Props {
  partTitle: string;
}

const NavigationPartName = ({ partTitle }: Props) => {
  return <NavigationPartTitle>{partTitle}</NavigationPartTitle>;
};

const NavigationPartTitle = styled.span`
  text-transform: uppercase;
  color: #6a93ac;
  font-size: 15px;
  line-height: 24.6px;
  letter-spacing: 3px;
  display: block;
  margin: 12px 0;
`;

export default NavigationPartName;

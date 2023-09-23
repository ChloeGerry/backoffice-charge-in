import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface Props {
  src: string;
  alt: string;
  linkName: string;
  subMenu?: Array<object>;
  backgroundColor?: string;
  margin?: string;
  to: string;
  onClick?: () => void;
}

const NavigationLink = ({
  src,
  alt,
  linkName,
  subMenu,
  backgroundColor,
  margin,
  to,
  onClick,
}: Props) => {
  return (
    <NavigationLinkWrapper $backgroundColor={backgroundColor} $margin={margin}>
      <NavigationInformations
        to={to}
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <NavigationIcon src={src} alt={alt} />
        <NavigationName>{linkName}</NavigationName>
      </NavigationInformations>
      {subMenu?.length > 0 && (
        <>
          <PlusIcon src="assets/plus-icon.svg" onClick={onClick} />
        </>
      )}
    </NavigationLinkWrapper>
  );
};

const NavigationLinkWrapper = styled.div<{
  $backgroundColor?: string;
  $margin?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: ${({ $backgroundColor }) =>
    $backgroundColor || '#0c354f'}; */
  border-radius: 8px;
  padding: 12px;
  margin: ${({ $margin }) => $margin || '12px 0px'};
  &.isSelected {
    background-color: ${({ $backgroundColor }) =>
      $backgroundColor || '#0c354f'};
  }
`;

const NavigationInformations = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #ffffff;
  text-decoration: none;
`;

const NavigationIcon = styled.img`
  width: 20px;
  height: 20px;
  color: #ffffff;
`;

const NavigationName = styled.span`
  font-size: 18px;
  line-height: 26px;
`;

const PlusIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export default NavigationLink;

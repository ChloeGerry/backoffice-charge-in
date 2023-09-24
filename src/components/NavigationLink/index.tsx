import styled from 'styled-components';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

interface SubMenu {
  label: string;
  to: string;
}

interface Props {
  src: string;
  alt: string;
  linkName: string;
  subMenu?: Array<SubMenu>;
  backgroundColor?: string;
  borderRadius?: string;
  to?: string;
}

const NavigationLink = ({
  src,
  alt,
  linkName,
  subMenu,
  borderRadius,
  to,
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  return (
    <>
      <NavigationButton
        to={to!}
        as={subMenu?.length > 0 ? 'div' : NavLink}
        className={location.pathname === to || isOpen ? 'isSelected' : ''}
        $borderRadius={borderRadius}
        onClick={() => subMenu?.length > 0 && setIsOpen(!isOpen)}
      >
        <NavigationButtonWrapper>
          <NavigationIcon src={src} alt={alt} />
          <NavigationName>{linkName}</NavigationName>
        </NavigationButtonWrapper>
        {subMenu?.length > 0 && <PlusIcon src="assets/plus-icon.svg" />}
      </NavigationButton>
      {isOpen && (
        <NavigationDropdown>
          {subMenu?.map(({ label, to }) => {
            return (
              <NavigationDropdownLink
                key={to}
                to={to}
                className={location.pathname === to ? 'isSelected' : ''}
              >
                {label}
              </NavigationDropdownLink>
            );
          })}
        </NavigationDropdown>
      )}
    </>
  );
};

const NavigationButton = styled(NavLink)<{ $borderRadius?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  border-radius: ${({ $borderRadius }) => $borderRadius || '8px 8px 0 0'};

  &.isSelected {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const NavigationButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
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
`;

const NavigationDropdown = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 12px 4px 12px 4px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 0px 0px 8px 8px;
`;

const NavigationDropdownLink = styled(Link)`
  padding: 0 12px;
  color: #6a93ac;
  text-decoration: none;

  &.isSelected {
    color: #369c96;
  }
`;

export default NavigationLink;

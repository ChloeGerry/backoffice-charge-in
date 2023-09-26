import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  name: string;
  choosenChargin: string;
  estimate: string;
  step: 'Étape 1' | 'Étape 2' | 'Étape 3' | 'Étape 4';
  onClick?: () => void;
  color?: string;
  backgroundColor?: string;
  padding?: string;
  borderRadius?: string;
}

const UserInformationsPreview = ({
  name,
  choosenChargin,
  estimate,
  step,
  onClick,
  color,
  backgroundColor,
  padding,
  borderRadius,
}: Props) => {
  return (
    <UserInformationsPreviewWrapper>
      <UserText>{name}</UserText>
      <UserText>{choosenChargin}</UserText>
      <UserText>{estimate}</UserText>
      <UserText
        $color={color}
        $backgroundColor={backgroundColor}
        $padding={padding}
        $borderRadius={borderRadius}
      >
        {step}
      </UserText>
      <UserIconsWrapper>
        <Link to="/users/1">
          <img
            src="/assets/pencil-icon.svg"
            alt="Pencil icon"
            onClick={onClick}
          />
        </Link>
        <img src="/assets/trash-icon.svg" alt="Trash icon" onClick={onClick} />
        <img
          src="/assets/ellipsis-icon.svg"
          alt="Ellipsis icon"
          onClick={onClick}
        />
      </UserIconsWrapper>
    </UserInformationsPreviewWrapper>
  );
};

const UserInformationsPreviewWrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserText = styled.p<{
  $color?: string;
  $backgroundColor?: string;
  $padding?: string;
  $borderRadius?: string;
}>`
  font-size: 16px;
  line-height: 21.6px;
  color: ${({ $color }) => $color};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  padding: ${({ $padding }) => $padding};
  border-radius: ${({ $borderRadius }) => $borderRadius};
`;

const UserIconsWrapper = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;

export default UserInformationsPreview;

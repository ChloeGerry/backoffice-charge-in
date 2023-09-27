import styled from 'styled-components';

interface Props {
  label: string;
  value: string | number;
  lineHeight?: string;
  color?: string;
  containAnIcon?: boolean;
  src?: string;
}

const UserLabel = ({
  containAnIcon,
  src,
  label,
  value,
  lineHeight,
  color,
}: Props) => {
  return (
    <UserLabelWrapper>
      <UserLabelStyled>
        {containAnIcon && <UserInformationIcon src={src} />}
        {label}
      </UserLabelStyled>
      <UserLabelStyled $lineHeight={lineHeight} $color={color}>
        {value}
      </UserLabelStyled>
    </UserLabelWrapper>
  );
};

const UserLabelWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const UserLabelStyled = styled.p<{
  $lineHeight?: string;
  $color?: string;
}>`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  line-height: ${({ $lineHeight }) => $lineHeight || '21.6px'};
  color: ${({ $color }) => $color || '#000000'};
  border-radius: 4px;
  width: fit-content;
`;

const UserInformationIcon = styled.img`
  margin-right: 16px;
`;

export default UserLabel;

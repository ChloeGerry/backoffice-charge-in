import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  right: string;
  top?: string;
}

const SlideshowCard = ({ right, children, top }: Props) => {
  return (
    <SlideshowCardWrapper $right={right} $top={top}>
      {children}
    </SlideshowCardWrapper>
  );
};

const SlideshowCardWrapper = styled.article<{ $right?: string; $top?: string }>`
  box-shadow: 0 4px 16px 0 rgba(180, 189, 189, 0.25);
  border-radius: 12px;
  background-color: #ffffff;
  position: absolute;
  right: ${({ $right }) => $right};
  top: ${({ $top }) => $top};
  z-index: 1;
`;

export default SlideshowCard;

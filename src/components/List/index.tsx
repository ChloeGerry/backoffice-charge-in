import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  display?: string;
  justifyContent?: string;
  margin?: string;
}

const List = ({ children, display, justifyContent, margin }: Props) => {
  return (
    <ListWrapper
      $display={display}
      $justifyContent={justifyContent}
      $margin={margin}
    >
      {children}
    </ListWrapper>
  );
};

const ListWrapper = styled.ul<{
  $display?: string;
  $justifyContent?: string;
  $margin?: string;
}>`
  margin: ${({ $margin }) => $margin || '12px 0 0 0'};
  padding: 0 0 0 14px;
  color: #369c96;
  line-height: 22.5px;
  font-size: 16px;
  font-weight: 400;
  display: ${({ $display }) => $display};
  justify-content: ${({ $justifyContent }) => $justifyContent};
`;

export default List;

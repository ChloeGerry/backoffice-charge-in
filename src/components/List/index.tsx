import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const List = ({ children }: Props) => {
  return <ListWrapper>{children}</ListWrapper>;
};

const ListWrapper = styled.ul`
  margin: 12px 0 0 0;
  padding: 0 0 0 14px;
  color: #369c96;
  line-height: 22.5px;
  font-size: 16px;
  font-weight: 400;
`;

export default List;

import styled from 'styled-components';

interface Props {
  src: string;
  title: string;
  price: string;
  children: React.ReactNode;
}

const ModelsCard = ({ src, title, children, price }: Props) => {
  return (
    <ModelsCardWrapper>
      <img src={src} />
      <ModelsContent>
        <ModelsCardTitle>{title}</ModelsCardTitle>
        {children}
      </ModelsContent>
      <Price>{price}</Price>
    </ModelsCardWrapper>
  );
};

const ModelsCardWrapper = styled.article`
  border: 1px solid #dce6e5;
  padding: 32px 37px;
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
  margin: 24px 0;
`;

const ModelsContent = styled.div`
  border-right: 1px solid #dce6e5;
  border-left: 1px solid #dce6e5;
  padding: 0 30px;
`;

const ModelsCardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-family: Chivo, sans-serif;
  line-height: 25.31px;
  font-weight: 400;
`;

const Price = styled.p`
  color: #304399;
  font-size: 48px;
  line-height: 67.5px;
  font-weight: 600;
  font-family: Poppins, sans-serif;
`;

export default ModelsCard;

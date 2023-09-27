import styled from 'styled-components';

const List = () => {
  return (
    <ListWrapper>
      <li>
        <ListText>Puissance max pour votre installation: 22 kW</ListText>
      </li>
      <li>
        <ListText>Contrôle d'accès: RFID</ListText>
      </li>
      <li>
        <ListText>Temps de charge: 6h30</ListText>
      </li>
      <li>
        <ListText>Optimisation coût de recharge: Oui</ListText>
      </li>
      <li>
        <ListText>Borne connectée</ListText>
      </li>
    </ListWrapper>
  );
};

const ListWrapper = styled.ul`
  margin: 12px 0 0 0;
  padding: 0 0 0 14px;
  color: #369c96;
  line-height: 22.5px;
  font-size: 16px;
  font-weight: 400;
`;

const ListText = styled.span`
  color: #000000;
`;

export default List;

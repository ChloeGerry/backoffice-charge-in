import styled from 'styled-components';

const ListItem = () => {
  return (
    <>
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

      {/* <div>
        <li>
          <ListText>Puissance max pour votre installation: 22 kW</ListText>
        </li>
        <li>
          <ListText>Contrôle d'accès: RFID</ListText>
        </li>
      </div>
      <div>
        <li>
          <ListText>Temps de charge: 6h30</ListText>
        </li>
        <li>
          <ListText>Optimisation coût de recharge: Oui</ListText>
        </li>
      </div>
      <div>
        <li>
          <ListText>Borne connectée</ListText>
        </li>
      </div> */}
    </>
  );
};

const ListText = styled.span`
  color: #000000;
`;

export default ListItem;

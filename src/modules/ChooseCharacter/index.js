import { useHistory } from 'react-router-dom';

import {
  Container,
  Title,
  ButtonsContainer,
  AtlasCharacterButton,
  JarvanCharacterButton,
} from './styles';

export function ChooseCharacter() {
  const history = useHistory();

  return (
    <Container container justifyContent="center">
      <Title>ESCOLHA SEU PERSONAGEM:</Title>

      <ButtonsContainer>
        <AtlasCharacterButton
          variant="contained"
          onClick={() => history.push('/atlas-hasken')}
        >
          ATLAS HASKEN
        </AtlasCharacterButton>

        <JarvanCharacterButton
          variant="contained"
          onClick={() => history.push('/jarvan-hasken')}
        >
          JARVAN HASKEN
        </JarvanCharacterButton>
      </ButtonsContainer>
    </Container>
  );
}

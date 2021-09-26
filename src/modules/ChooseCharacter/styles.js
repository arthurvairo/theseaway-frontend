import styled from 'styled-components';

import { Typography, Grid, Button } from '@material-ui/core';

import { AtlasHaskenPalette, JarvanHaskenPalette } from '../../colors';

export const Container = styled(Grid).attrs({
  container: true,
})``;

export const Title = styled(Typography).attrs({
  variant: 'h4',
})`
  font-weight: 800;
  margin-bottom: 3rem;
`;

export const ButtonsContainer = styled(Grid).attrs({
  container: true,
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

////////////// BUTTONS -------------------------------

export const AtlasCharacterButton = styled(Button)`
  background: ${AtlasHaskenPalette[200]};
  color: white;

  margin-left: 1rem;

  &:hover {
    background: ${AtlasHaskenPalette[300]};
  }
`;

export const JarvanCharacterButton = styled(Button)`
  background: ${JarvanHaskenPalette[150]};
  color: white;

  margin-left: 1rem;

  &:hover {
    background: ${JarvanHaskenPalette[250]};
  }
`;

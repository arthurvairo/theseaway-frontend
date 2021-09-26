import { Switch, Route } from 'react-router-dom';

import { Navigation } from '../components/Navigation';

import { ChooseCharacter } from '../../modules/ChooseCharacter';
import { AtlasHasken } from '../../modules/Characters/AtlasHasken';

export function IndexRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={ChooseCharacter} />
      <Route path="/atlas-hasken" component={AtlasHasken} />
    </Switch>
  );
}

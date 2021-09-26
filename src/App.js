import { BrowserRouter } from 'react-router-dom';

import { IndexRoutes } from './shared/routes/index.routes';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <BrowserRouter>
        <IndexRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
